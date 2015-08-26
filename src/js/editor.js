// Some browsers don't support repeat, for example, Safari
String.prototype.repeat = function (i) {
    return new Array(i + 1).join(this);
}
angular.module("wt-editor")
    .constant('wtEditorConfig', {
        fontSize          : '14px',
        theme             : 'kuroir',
        isPreview         : false,
        isPreviewButton   : false,
        autofocus         : true, //默认聚焦
        width             : '100%', //宽度
        height            : '100%',  //高度
        isFullscreen      : false, //默认是否全屏显示
        isFullButton      : true, //是否显示最大化按钮
        hiddenButtons     : [],//要不显示的图标
        additionalButtons : [],//扩展的图标
        language          : [],//国际化设置
        onShow            : null,//显示编辑器的时候调用
        onPreview         : null,//渲染的时候调用
        onChange          : null,//内容变化时调用
        onFocus           : null,//获取焦点时调用
        onBlur            : null,//失去焦点时调用
        onSave            : null //保存事件
    })
    .controller('wtEditorCtrl', ['$scope', function($scope){
        //controller 定义事件
        //directive 定义业务逻辑

        this.initGantt = function(){
            mermaid.ganttConfig = {
                // Configuration for Gantt diagrams
                numberSectionStyles: 4,
                axisFormatter      : [
                    ["%I:%M", function (d) { // Within a day
                        return d.getHours();
                    }],
                    ["w. %U", function (d) { // Monday a week
                        return d.getDay() == 1;
                    }],
                    ["%a %d", function (d) { // Day within a week (not monday)
                        return d.getDay() && d.getDate() != 1;
                    }],
                    ["%b %d", function (d) { // within a month
                        return d.getDate() != 1;
                    }],
                    ["%m-%y", function (d) { // Month
                        return d.getMonth();
                    }]
                ]
            };
        }

        this.initEditor = function (id,wtEditorConfig){
            var editor = ace.edit(id);
            editor.session.setUseWorker(false);
            editor.$blockScrolling = Infinity;
            editor.renderer.setShowPrintMargin(false);
            editor.session.setMode('ace/mode/markdown');
            editor.session.setUseWrapMode(true);
            editor.setScrollSpeed(1);
            editor.setOption("scrollPastEnd", true);
            editor.session.setFoldStyle('manual');
            editor.focus();
            editor.session.on('changeScrollTop', function (scroll) {
                //sync_preview();
            });
            editor.setFontSize(wtEditorConfig.fontSize);
            editor.setTheme('ace/theme/'+wtEditorConfig.theme);

            // 编辑器的一些拓展方法
            editor.selection.smartRange = function () {
                var range = editor.selection.getRange();
                if (!range.isEmpty()) {
                    return range; // 用户手动选中了一些文字，直接用这个
                }
                // 没有选中任何东西
                var _range = range; // 备份原始range
                range = editor.selection.getWordRange(range.start.row, range.start.column); // 当前单词的range
                if (editor.session.getTextRange(range).trim().length == 0) { // 选中的东西是空或者全空白
                    range = _range; // 还使用原始的range
                }
                return range;
            };
            // 实时监听用户的编辑
            editor.session.on('change', function () {
                if(wtEditorConfig.isPreview === true){
                    _.debounce(function () {
                        // 用户停止输入128毫秒之后才会触发
                        var modelist = ace.require('ace/ext/modelist').modesByName;
                        var highlight = ace.require('ace/ext/static_highlight');
                        $('.markdown-body').empty().append(marked(editor.session.getValue())); // realtime preview
                        $('pre > code').each(function () { // code highlight
                            var code = $(this);
                            var language = (code.attr('class') || 'lang-javascript').substring(5).toLowerCase();
                            if (modelist[language] == undefined) {
                                language = 'javascript';
                            }
                            highlight(code[0], {
                                    mode           : 'ace/mode/' + language,
                                    theme          : 'ace/theme/github',
                                    startLineNumber: 1,
                                    showGutter     : false,
                                    trim           : true,
                                },
                                function (highlighted) {
                                }
                            );
                        });
                        mermaid.init();
                        //sync_preview();
                    }, 128, false)();
                }
            });


            // modals
            $(document).on('close', '.remodal', function (e) {
                editor.focus(); // 关闭modal，编辑器自动获得焦点
            });

            // overwrite some ACE editor keyboard shortcuts
            editor.commands.addCommands([
                {
                    name   : "preferences",
                    bindKey: {win: "Ctrl-,", mac: "Command-,"},
                    exec   : function (editor) {
                        $('i.fa-cog').click(); // show M+ preferences modal
                    }
                }
            ]);
            return editor;
        };
        this.refreshHTML = function(editor){
            // 用户停止输入128毫秒之后才会触发
            var modelist = ace.require('ace/ext/modelist').modesByName;
            var highlight = ace.require('ace/ext/static_highlight');
            $('.markdown-body').empty().append(marked(editor.session.getValue())); // realtime preview
            $('pre > code').each(function () { // code highlight
                var code = $(this);
                var language = (code.attr('class') || 'lang-javascript').substring(5).toLowerCase();
                if (modelist[language] == undefined) {
                    language = 'javascript';
                }
                highlight(code[0], {
                        mode           : 'ace/mode/' + language,
                        theme          : 'ace/theme/github',
                        startLineNumber: 1,
                        showGutter     : false,
                        trim           : true,
                    },
                    function (highlighted) {
                    }
                );
            });
            mermaid.init();
        }

        this.initMarked = function(){
            // 设置marked
            var renderer = new marked.Renderer();
            renderer.listitem = function (text) {
                if (!/^\[[ x]\]\s/.test(text)) {
                    return marked.Renderer.prototype.listitem(text);
                }
                // 任务列表
                var checkbox = $('<input type="checkbox" disabled/>');
                if (/^\[x\]\s/.test(text)) { // 完成的任务列表
                    checkbox.attr('checked', true);
                }
                return $(marked.Renderer.prototype.listitem(text.substring(3))).addClass('task-list-item').prepend(checkbox)[0].outerHTML;
            }
            renderer.codespan = function (text) { // inline code
                if (/^\$.+\$$/.test(text)) { // inline math
                    var raw = /^\$(.+)\$$/.exec(text)[1];
                    var line = raw.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'"); // unescape html characters
                    try {
                        return katex.renderToString(line, {displayMode: false});
                    } catch (err) {
                        return '<code>' + err + '</code>';
                    }
                }
                return marked.Renderer.prototype.codespan.apply(this, arguments);
            }
            renderer.code = function (code, language, escaped, line_number) {
                code = code.trim();
                var firstLine = code.split(/\n/)[0].trim();
                if (language === 'math') { // 数学公式
                    var tex = '';
                    code.split(/\n\n/).forEach(function (line) { // 连续两个换行，则开始下一个公式
                        line = line.trim();
                        if (line.length > 0) {
                            try {
                                tex += katex.renderToString(line, {displayMode: true});
                            } catch (err) {
                                tex += '<pre>' + err + '</pre>';
                            }
                        }
                    });
                    return '<div data-line="' + line_number + '">' + tex + '</div>';
                } else if (firstLine === 'gantt' || firstLine === 'sequenceDiagram' || firstLine.match(/^graph (?:TB|BT|RL|LR|TD);?$/)) { // mermaid
                    if (firstLine === 'sequenceDiagram') {
                        code += '\n'; // 如果末尾没有空行，则语法错误
                    }
                    if (mermaid.parse(code)) {
                        return '<div class="mermaid" data-line="' + line_number + '">' + code + '</div>';
                    } else {
                        return '<pre data-line="' + line_number + '">' + mermaidError + '</pre>';
                    }
                } else {
                    return marked.Renderer.prototype.code.apply(this, arguments);
                }
            };
            renderer.html = function (html) {
                var result = marked.Renderer.prototype.html.apply(this, arguments);
                var h = $(result.bold());
                return h.html();
            };
            renderer.paragraph = function (text) {
                var result = marked.Renderer.prototype.paragraph.apply(this, arguments);
                var h = $(result.bold());
                // h.find('script,iframe').remove();
                return h.html();
            };
            marked.setOptions({
                renderer   : renderer,
                gfm        : true,
                tables     : true,
                breaks     : false,
                pedantic   : false,
                sanitize   : false,
                smartLists : true,
                smartypants: true
            });
            return renderer;
        }


        this.setFullScreen = function(id,flag){
            var _obj = $('#'+id);
            if(flag){
                _obj.css({
                    width:document.documentElement.clientWidth,
                    height:document.documentElement.clientHeight,
                    left:0,
                    top:0
                });
            }else{
                _obj.css({
                    width:'100%',
                    height:'100%'
                });
            }

        }



    }])
    .directive("wtEditor", ['wtEditorConfig','$timeout',function (wtEditorConfig,$timeout) {
        return {
            require: ["wtEditor",'ngModel'],
            scope:{
                value:'=ngModel',
                config:'='
            },
            controller: 'wtEditorCtrl',
            templateUrl:"wt-editor/editor.html",
            link: function (scope, element, attrs,controller) {
                var vm = scope.vm = {
                    value             : scope.value //默认显示的内容
                };
                //继承设置
                angular.extend(wtEditorConfig,scope.config);
                //是否显示预览
                vm.isPreview = wtEditorConfig.isPreview;
                vm.isPreviewButton = wtEditorConfig.isPreviewButton;
                vm.isFullButton = wtEditorConfig.isFullButton;
                vm.isFullscreen = wtEditorConfig.isFullscreen;
                //设置甘特图
                controller[0].initGantt();
                //设置markdown
                vm.renderer = controller[0].initMarked();
                //初始化编辑器
                vm.editor = controller[0].initEditor('wtEditorObj',wtEditorConfig);

                //初始化toolbar

                //加粗 斜体 横线
                vm.styleFn = function($event){
                    var modifier = $($event.target).data('modifier');
                    var range = vm.editor.selection.smartRange();
                    var p = vm.editor.getCursorPosition();
                    p.column += modifier.length; // 光标位置会产生偏移
                    vm.editor.session.replace(range, modifier + vm.editor.session.getTextRange(range) + modifier);
                    vm.editor.moveCursorToPosition(p); // 恢复光标位置
                    vm.editor.selection.clearSelection(); // 不知为何上一个语句会选中一部分文字
                    vm.editor.focus();
                }

                //h1 -- h6
                vm.headingFn = function($event){
                    var level = $($event.target).data('level');
                    var p = vm.editor.getCursorPosition();
                    p.column += level + 1; // 光标位置会产生偏移
                    vm.editor.navigateTo(vm.editor.getSelectionRange().start.row, 0); // navigateLineStart 在 wrap 的时候有问题
                    vm.editor.insert('#'.repeat(level) + ' ');
                    vm.editor.moveCursorToPosition(p); // 恢复光标位置
                    vm.editor.focus();
                }


                // <hr/>
                vm.horizonFn = function ($event){
                    var p = vm.editor.getCursorPosition();
                    if (p.column == 0) { // 光标在行首
                        vm.editor.selection.clearSelection();
                        vm.editor.insert('\n---\n');
                    } else {
                        vm.editor.navigateTo(vm.editor.getSelectionRange().start.row, Number.MAX_VALUE); // navigateLineEnd 在 wrap 的时候有问题
                        vm.editor.insert('\n\n---\n');
                    }
                    vm.editor.focus();
                }

                // list icons
                vm.listFn = function($event){
                    var prefix = $($event.target).data('prefix');
                    var p = vm.editor.getCursorPosition();
                    p.column += prefix.length; // 光标位置会产生偏移
                    var range = vm.editor.selection.getRange();
                    for (var i = range.start.row + 1; i < range.end.row + 2; i++) {
                        vm.editor.gotoLine(i);
                        vm.editor.insert(prefix);
                    }
                    vm.editor.moveCursorToPosition(p); // 恢复光标位置
                    vm.editor.focus();
                }


                //插入链接
                vm.linkFn = function($event){
                    var _target = $($event.target);
                    var range = vm.editor.selection.smartRange();
                    var text = vm.editor.session.getTextRange(range);
                    if (text.trim().length == 0) {
                        text = _target.data('sample-text');
                    }
                    var url = _target.data('sample-url');
                    vm.editor.session.replace(range, '[' + text + '](' + url + ')');
                    vm.editor.focus();
                }

                //插入图片
                vm.imageFn = function($event){
                    var _target = $($event.target);
                    var text = vm.editor.session.getTextRange(vm.editor.selection.getRange()).trim();
                    if (text.length == 0) {
                        text = _target.data('sample-text');
                    }
                    var url = _target.data('sample-url')
                    vm.editor.insert('![' + text + '](' + url + ')');
                    vm.editor.focus();
                }

                //插入代码
                vm.codeFn = function($event){
                    var text = vm.editor.session.getTextRange(vm.editor.selection.getRange()).trim();
                    vm.editor.insert('\n```\n' + text + '\n```\n');
                    vm.editor.focus();
                    vm.editor.navigateUp(2);
                    vm.editor.navigateLineEnd();
                }


                //插入表格
                vm.tableFn = function($event){
                    var sample = $($event.target).data('sample');
                    vm.editor.insert(''); // 删除选中的部分
                    var p = vm.editor.getCursorPosition();
                    if (p.column == 0) { // 光标在行首
                        vm.editor.selection.clearSelection();
                        vm.editor.insert('\n' + sample + '\n\n');
                    } else {
                        vm.editor.navigateTo(vm.editor.getSelectionRange().start.row, Number.MAX_VALUE);
                        vm.editor.insert('\n\n' + sample + '\n');
                    }
                    vm.editor.focus();
                }

                //数学公式
                vm.mathFn = function($event){
                    var text = vm.editor.session.getTextRange(vm.editor.selection.getRange()).trim();
                    if (text.length == 0) {
                        text = $($event.target).data('sample');
                    }
                    vm.editor.insert('\n```math\n' + text + '\n```\n');
                    vm.editor.focus();
                }

                //流程图
                vm.mermaidFn = function($event){
                    var text = vm.editor.session.getTextRange(vm.editor.selection.getRange()).trim();
                    if (text.length == 0) {
                        text = $($event.target).data('sample');
                    }
                    vm.editor.insert('\n```\n' + text + '\n```\n');
                    vm.editor.focus();
                }

                //preview
                vm.togglePreview = function(){
                    vm.isPreview = !vm.isPreview;
                    wtEditorConfig.isPreview = vm.isPreview;
                    if(vm.isPreview === true){
                        $timeout(function () {
                            controller[0].refreshHTML(vm.editor);
                        }, 50);
                    }
                }

                //full screen
                vm.toggleFullScreen = function(){
                    if(vm.isFullButton){
                        vm.isFullscreen = !vm.isFullscreen;
                        vm.isPreviewButton = vm.isFullscreen;
                        vm.isPreview = !vm.isFullscreen;
                        wtEditorConfig.isPreview = vm.isPreview;
                        wtEditorConfig.isPreviewButton = vm.isPreviewButton;

                        if(vm.isPreview === true){
                            vm.togglePreview();
                        }

                        wtEditorConfig.isFullscreen = vm.isFullscreen;
                        controller[0].setFullScreen('wtEditor',vm.isFullscreen);
                    }
                }


            }
        };
    }]);