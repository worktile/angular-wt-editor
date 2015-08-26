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
        onSave            : null, //保存事件
        emojis            : [":blush:",":scream:",":smirk:",":smiley:",":stuck_out_tongue_closed_eyes:",":stuck_out_tongue_winking_eye:",":rage:",":disappointed:",":sob:",":kissing_heart:",":wink:",":pensive:",":confounded:",":flushed:",":relaxed:",":mask:",":heart:",":broken_heart:",":sunny:",":umbrella:",":cloud:",":snowflake:",":snowman:",":zap:",":cyclone:",":foggy:",":ocean:",":cat:",":dog:",":mouse:",":hamster:",":rabbit:",":wolf:",":frog:",":tiger:",":koala:",":bear:",":pig:",":pig_nose:",":cow:",":boar:",":monkey_face:",":monkey:",":horse:",":racehorse:",":camel:",":sheep:",":elephant:",":panda_face:",":snake:",":bird:",":baby_chick:",":hatched_chick:",":hatching_chick:",":chicken:",":penguin:",":turtle:",":bug:",":honeybee:",":ant:",":beetle:",":snail:",":octopus:",":tropical_fish:",":fish:",":whale:",":whale2:",":dolphin:",":cow2:",":ram:",":rat:",":water_buffalo:",":tiger2:",":rabbit2:",":dragon:",":goat:",":rooster:",":dog2:",":pig2:",":mouse2:",":ox:",":dragon_face:",":blowfish:",":crocodile:",":dromedary_camel:",":leopard:",":cat2:",":poodle:",":paw_prints:",":bouquet:",":cherry_blossom:",":tulip:",":four_leaf_clover:",":rose:",":sunflower:",":hibiscus:",":maple_leaf:",":leaves:",":fallen_leaf:",":herb:",":mushroom:",":cactus:",":palm_tree:",":evergreen_tree:",":deciduous_tree:",":chestnut:",":seedling:",":blossom:",":ear_of_rice:",":shell:",":globe_with_meridians:",":sun_with_face:",":full_moon_with_face:",":new_moon_with_face:",":new_moon:",":waxing_crescent_moon:",":first_quarter_moon:",":waxing_gibbous_moon:",":full_moon:",":waning_gibbous_moon:",":last_quarter_moon:",":waning_crescent_moon:",":last_quarter_moon_with_face:",":first_quarter_moon_with_face:",":moon:",":earth_africa:",":earth_americas:",":earth_asia:",":volcano:",":milky_way:",":partly_sunny:",":octocat:",":squirrel:",":bamboo:",":gift_heart:",":dolls:",":school_satchel:",":mortar_board:",":flags:",":fireworks:",":sparkler:",":wind_chime:",":rice_scene:",":jack_o_lantern:",":ghost:",":santa:",":christmas_tree:",":gift:",":bell:",":no_bell:",":tanabata_tree:",":tada:",":confetti_ball:",":balloon:",":crystal_ball:",":cd:",":dvd:",":floppy_disk:",":camera:",":video_camera:",":movie_camera:",":computer:",":tv:",":iphone:",":phone:",":telephone:",":telephone_receiver:",":pager:",":fax:",":minidisc:",":vhs:",":sound:",":speaker:",":mute:",":loudspeaker:",":mega:",":hourglass:",":hourglass_flowing_sand:",":alarm_clock:",":watch:",":radio:",":satellite:",":loop:",":mag:",":mag_right:",":unlock:",":lock:",":lock_with_ink_pen:",":closed_lock_with_key:",":key:",":bulb:",":flashlight:",":high_brightness:",":low_brightness:",":electric_plug:",":battery:",":calling:",":email:",":mailbox:",":postbox:",":bath:",":bathtub:",":shower:",":toilet:",":wrench:",":nut_and_bolt:",":hammer:",":seat:",":moneybag:",":yen:",":dollar:",":pound:",":euro:",":credit_card:",":money_with_wings:",":e-mail:",":inbox_tray:",":outbox_tray:",":envelope:",":incoming_envelope:",":postal_horn:",":mailbox_closed:",":mailbox_with_mail:",":mailbox_with_no_mail:",":door:",":smoking:",":bomb:",":gun:",":hocho:",":pill:",":syringe:",":page_facing_up:",":page_with_curl:",":bookmark_tabs:",":bar_chart:",":chart_with_upwards_trend:",":chart_with_downwards_trend:",":scroll:",":clipboard:",":calendar:",":date:",":card_index:",":file_folder:",":open_file_folder:",":scissors:",":pushpin:",":paperclip:",":black_nib:",":pencil2:",":straight_ruler:",":triangular_ruler:",":closed_book:",":green_book:",":blue_book:",":orange_book:",":notebook:",":notebook_with_decorative_cover:",":ledger:",":books:",":bookmark:",":name_badge:",":microscope:",":telescope:",":newspaper:",":football:",":basketball:",":soccer:",":baseball:",":tennis:",":8ball:",":rugby_football:",":bowling:",":golf:",":mountain_bicyclist:",":bicyclist:",":horse_racing:",":snowboarder:",":swimmer:",":surfer:",":ski:",":spades:",":hearts:",":clubs:",":diamonds:",":gem:",":ring:",":trophy:",":musical_score:",":musical_keyboard:",":violin:",":space_invader:",":video_game:",":black_joker:",":flower_playing_cards:",":game_die:",":dart:",":mahjong:",":clapper:",":memo:",":pencil:",":book:",":art:",":microphone:",":headphones:",":trumpet:",":saxophone:",":guitar:",":shoe:",":sandal:",":high_heel:",":lipstick:",":boot:",":shirt:",":tshirt:",":necktie:",":womans_clothes:",":dress:",":running_shirt_with_sash:",":jeans:",":kimono:",":bikini:",":ribbon:",":tophat:",":crown:",":womans_hat:",":mans_shoe:",":closed_umbrella:",":briefcase:",":handbag:",":pouch:",":purse:",":eyeglasses:",":fishing_pole_and_fish:",":coffee:",":tea:",":sake:",":baby_bottle:",":beer:",":beers:",":cocktail:",":tropical_drink:",":wine_glass:",":fork_and_knife:",":pizza:",":hamburger:",":fries:",":poultry_leg:",":meat_on_bone:",":spaghetti:",":curry:",":fried_shrimp:",":bento:",":sushi:",":fish_cake:",":rice_ball:",":rice_cracker:",":rice:",":ramen:",":stew:",":oden:",":dango:",":egg:",":bread:",":doughnut:",":custard:",":icecream:",":ice_cream:",":shaved_ice:",":birthday:",":cake:",":cookie:",":chocolate_bar:",":candy:",":lollipop:",":honey_pot:",":apple:",":green_apple:",":tangerine:",":lemon:",":cherries:",":grapes:",":watermelon:",":strawberry:",":peach:",":melon:",":banana:",":pear:",":pineapple:",":sweet_potato:",":eggplant:",":tomato:",":corn:",":alien:",":angel:",":anger:",":angry:",":anguished:",":astonished:",":baby:",":blue_heart:",":blush:",":boom:",":bow:",":bowtie:",":boy:",":bride_with_veil:",":broken_heart:",":bust_in_silhouette:",":busts_in_silhouette:",":clap:",":cold_sweat:",":collision:",":confounded:",":confused:",":construction_worker:",":cop:",":couple_with_heart:",":couple:",":couplekiss:",":cry:",":crying_cat_face:",":cupid:",":dancer:",":dancers:",":dash:",":disappointed:",":dizzy_face:",":dizzy:",":droplet:",":ear:",":exclamation:",":expressionless:",":eyes:",":facepunch:",":family:",":fearful:",":feelsgood:",":feet:",":finnadie:",":fire:",":fist:",":flushed:",":frowning:",":girl:",":goberserk:",":godmode:",":green_heart:",":grey_exclamation:",":grey_question:",":grimacing:",":grin:",":grinning:",":guardsman:",":haircut:",":hand:",":hankey:",":hear_no_evil:",":heart_eyes_cat:",":heart_eyes:",":heart:",":heartbeat:",":heartpulse:",":hurtrealbad:",":hushed:",":imp:",":information_desk_person:",":innocent:",":japanese_goblin:",":japanese_ogre:",":joy_cat:",":joy:",":kiss:",":kissing_cat:",":kissing_closed_eyes:",":kissing_heart:",":kissing_smiling_eyes:",":kissing:",":laughing:",":lips:",":love_letter:",":man_with_gua_pi_mao:",":man_with_turban:",":man:",":mask:",":massage:",":metal:",":muscle:",":musical_note:",":nail_care:",":neckbeard:",":neutral_face:",":no_good:",":no_mouth:",":nose:",":notes:",":ok_hand:",":ok_woman:",":older_man:",":older_woman:",":open_hands:",":open_mouth:",":pensive:",":persevere:",":person_frowning:",":person_with_blond_hair:",":person_with_pouting_face:",":point_down:",":point_left:",":point_right:",":point_up_2:",":point_up:",":poop:",":pouting_cat:",":pray:",":princess:",":punch:",":purple_heart:",":question:",":rage:",":rage1:",":rage2:",":rage3:",":rage4:",":raised_hand:",":raised_hands:",":relaxed:",":relieved:",":revolving_hearts:",":runner:",":running:",":satisfied:",":scream_cat:",":scream:",":see_no_evil:",":shit:",":skull:",":sleeping:",":sleepy:",":smile_cat:",":smile:",":smiley_cat:",":smiley:",":smiling_imp:",":smirk_cat:",":smirk:",":sob:",":sparkling_heart:",":sparkles:",":speak_no_evil:",":speech_balloon:",":star:",":star2:",":stuck_out_tongue_closed_eyes:",":stuck_out_tongue_winking_eye:",":stuck_out_tongue:",":sunglasses:",":suspect:",":sweat_drops:",":sweat_smile:",":sweat:",":thought_balloon:",":-1:",":thumbsdown:",":thumbsup:",":+1:",":tired_face:",":tongue:",":triumph:",":trollface:",":two_hearts:",":two_men_holding_hands:",":two_women_holding_hands:",":unamused:",":v:",":walking:",":wave:",":weary:",":wink2:",":wink:",":woman:",":worried:",":yellow_heart:",":yum:",":zzz:",":109:",":house:",":house_with_garden:",":school:",":office:",":post_office:",":hospital:",":bank:",":convenience_store:",":love_hotel:",":hotel:",":wedding:",":church:",":department_store:",":european_post_office:",":city_sunrise:",":city_sunset:",":japanese_castle:",":european_castle:",":tent:",":factory:",":tokyo_tower:",":japan:",":mount_fuji:",":sunrise_over_mountains:",":sunrise:",":stars:",":statue_of_liberty:",":bridge_at_night:",":carousel_horse:",":rainbow:",":ferris_wheel:",":fountain:",":roller_coaster:",":ship:",":speedboat:",":boat:",":sailboat:",":rowboat:",":anchor:",":rocket:",":airplane:",":helicopter:",":steam_locomotive:",":tram:",":mountain_railway:",":bike:",":aerial_tramway:",":suspension_railway:",":mountain_cableway:",":tractor:",":blue_car:",":oncoming_automobile:",":car:",":red_car:",":taxi:",":oncoming_taxi:",":articulated_lorry:",":bus:",":oncoming_bus:",":rotating_light:",":police_car:",":oncoming_police_car:",":fire_engine:",":ambulance:",":minibus:",":truck:",":train:",":station:",":train2:",":bullettrain_front:",":bullettrain_side:",":light_rail:",":monorail:",":railway_car:",":trolleybus:",":ticket:",":fuelpump:",":vertical_traffic_light:",":traffic_light:",":warning:",":construction:",":beginner:",":atm:",":slot_machine:",":busstop:",":barber:",":hotsprings:",":checkered_flag:",":crossed_flags:",":izakaya_lantern:",":moyai:",":circus_tent:",":performing_arts:",":round_pushpin:",":triangular_flag_on_post:",":jp:",":kr:",":cn:",":us:",":fr:",":es:",":it:",":ru:",":gb:",":uk:",":de:",":100:",":1234:",":one:",":two:",":three:",":four:",":five:",":six:",":seven:",":eight:",":nine:",":keycap_ten:",":zero:",":hash:",":symbols:",":arrow_backward:",":arrow_down:",":arrow_forward:",":arrow_left:",":capital_abcd:",":abcd:",":abc:",":arrow_lower_left:",":arrow_lower_right:",":arrow_right:",":arrow_up:",":arrow_upper_left:",":arrow_upper_right:",":arrow_double_down:",":arrow_double_up:",":arrow_down_small:",":arrow_heading_down:",":arrow_heading_up:",":leftwards_arrow_with_hook:",":arrow_right_hook:",":left_right_arrow:",":arrow_up_down:",":arrow_up_small:",":arrows_clockwise:",":arrows_counterclockwise:",":rewind:",":fast_forward:",":information_source:",":ok:",":twisted_rightwards_arrows:",":repeat:",":repeat_one:",":new:",":top:",":up:",":cool:",":free:",":ng:",":cinema:",":koko:",":signal_strength:",":u5272:",":u5408:",":u55b6:",":u6307:",":u6708:",":u6709:",":u6e80:",":u7121:",":u7533:",":u7a7a:",":u7981:",":sa:",":restroom:",":mens:",":womens:",":baby_symbol:",":no_smoking:",":parking:",":wheelchair:",":metro:",":baggage_claim:",":accept:",":wc:",":potable_water:",":put_litter_in_its_place:",":secret:",":congratulations:",":m:",":passport_control:",":left_luggage:",":customs:",":ideograph_advantage:",":cl:",":sos:",":id:",":no_entry_sign:",":underage:",":no_mobile_phones:",":do_not_litter:",":non-potable_water:",":no_bicycles:",":no_pedestrians:",":children_crossing:",":no_entry:",":eight_spoked_asterisk:",":eight_pointed_black_star:",":heart_decoration:",":vs:",":vibration_mode:",":mobile_phone_off:",":chart:",":currency_exchange:",":aries:",":taurus:",":gemini:",":cancer:",":leo:",":virgo:",":libra:",":scorpius:",":sagittarius:",":capricorn:",":aquarius:",":pisces:",":ophiuchus:",":six_pointed_star:",":negative_squared_cross_mark:",":a:",":b:",":ab:",":o2:",":diamond_shape_with_a_dot_inside:",":recycle:",":end:",":on:",":soon:",":clock1:",":clock130:",":clock10:",":clock1030:",":clock11:",":clock1130:",":clock12:",":clock1230:",":clock2:",":clock230:",":clock3:",":clock330:",":clock4:",":clock430:",":clock5:",":clock530:",":clock6:",":clock630:",":clock7:",":clock730:",":clock8:",":clock830:",":clock9:",":clock930:",":heavy_dollar_sign:",":copyright:",":registered:",":tm:",":x:",":heavy_exclamation_mark:",":bangbang:",":interrobang:",":o:",":heavy_multiplication_x:",":heavy_plus_sign:",":heavy_minus_sign:",":heavy_division_sign:",":white_flower:",":heavy_check_mark:",":ballot_box_with_check:",":radio_button:",":link:",":curly_loop:",":wavy_dash:",":part_alternation_mark:",":trident:",":black_square:",":white_square:",":white_check_mark:",":black_square_button:",":white_square_button:",":black_circle:",":white_circle:",":red_circle:",":large_blue_circle:",":large_blue_diamond:",":large_orange_diamond:",":small_blue_diamond:",":small_orange_diamond:",":small_red_triangle:",":small_red_triangle_down:",":shipit:"],
        emojRegx          : /\:[a-z0-9_\-\+]+\:/g
    })
    .controller('wtEditorCtrl', ['$scope','wtEditorConfig', function($scope,wtEditorConfig){
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

        this.initEditor = function (id){
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
                        var _value = marked(editor.session.getValue());
                        _value = emojiFn(_value);
                        $('.markdown-body').empty().append(_value); // realtime preview
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
                                    trim           : true
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
            var _value = marked(editor.session.getValue());
            _value = emojiFn(_value);
            $('.markdown-body').empty().append(_value); // realtime preview
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
            editor.focus();
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


        this.setFullScreen = function(id,flag,editor){
            var _obj = $('#'+id);
            if(flag){
                _obj.css({
                    left:0,
                    top:0,
                    right:0,
                    bottom:0
                });
            }else{
                _obj.css({
                    width:'100%',
                    height:'100%'
                });
            }
            setTimeout(function(){
                editor.resize(true);
                editor.focus();
            },100)


        }

        var emojiFn = function(htmlstr){
            return htmlstr.replace(wtEditorConfig.emojRegx, function (match) {
                if (wtEditorConfig.emojis.indexOf(match) !== -1) {
                    var name = String(match).slice(1, -1);
                    return '<img class="emoji" title=":' + name + ':" alt="' + name + '" src="https://s.tylingsoft.com/emoji-icons/' + name + '.png" width="18" />';
                } else {
                    return match;
                }
            });
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
                    value             : scope.value, //默认显示的内容
                    emojiValue        : '', //插入表情代码
                    faValue           : ''
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
                vm.editor = controller[0].initEditor('wtEditorObj');

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
                        controller[0].setFullScreen('wtEditor',vm.isFullscreen,vm.editor);


                    }
                }


                //插入表情
                vm.insertEmoji = function(){
                    vm.emojiValue = vm.emojiValue.trim();

                    if(!/^:/.test(vm.emojiValue)){
                        vm.emojiValue = ":"+vm.emojiValue;
                    }
                    if(!/:$/.test(vm.emojiValue)){
                        vm.emojiValue = vm.emojiValue+':';
                    }
                    vm.editor.insert(vm.emojiValue);
                    vm.editor.focus();
                    vm.emojiValue = '';
                }
                //插入图标
                vm.insertFa = function(){
                    vm.faValue = vm.faValue.trim();
                    if(vm.faValue.length>0){
                        vm.editor.insert("<i class='fa fa-"+vm.faValue+"'></i>");
                        vm.editor.focus();
                        vm.faValue = '';
                    }
                }


            }
        };
    }]);