angular.module("wt.editor.tpl").run(["$templateCache",function(e){e.put("wt-editor/editor.html",'<div class="wt-editor {{vm.className}}" ng-class="{true: \'wt-editor-full-screen\', false: \'\'}[vm.isFullscreen]">\r    <div class="wt-editor-toobar">\r        <div class="noselect">\r            <ul class="wtEditorToolBarUl">\r                <li class="wtEditorToolBarli" ng-repeat="item in vm.toolbars" ng-class="(item.id == 0 && vm.header_action)?\'active\':\'\'">\r                    <!--自定义toolbar-->\r                    <i ng-if="item.type === \'custom\'" title="{{item.title}}" class="{{item.className}} toolbar-icon"  ng-click="item.action($event,vm)"></i>\r\r                    <i ng-if="item.type === \'headingFns\'" title="{{item.title}}" class="{{item.className}} toolbar-icon" ng-click="vm.setHeaderLi(item.id)"></i>\r\r                    <div ng-if="item.type === \'headingFns\'" ng-show="vm.header_action" class="toolbar-menu" flag="h">\r                        <ul flag="h">\r                            <li ng-repeat="n in vm.headers" ng-class="n.className" ng-click="vm.styleFn(n.name,$event)" flag="h">\r                                {{n.title}}\r                            </li>\r                        </ul>\r                    </div>\r\r                    <i ng-if="item.type === \'styleFn\'" title="{{item.title}}" class="{{item.className}} toolbar-icon"  ng-click="vm.styleFn(item.name,$event)"></i>\r                    <!--<i ng-if="item.type === \'headingFn\'" title="{{item.title}}" class="{{item.className}} toolbar-icon"  ng-click="vm.styleFn(item.name,$event)">h{{item.level}}</i>-->\r\r                    <i ng-if="item.type === \'tableFn\'" title="{{item.title}}" class="{{item.className}} toolbar-icon"\r                       ng-click="vm.styleFn(item.name,$event)"></i>\r\r\r                    <div ng-if="item.type === \'tableFn\'" ng-show="vm.table_action" class="table-menu" flag="table" ng-mouseleave="vm.tableActiveX=1;vm.tableActiveY=1;vm.table_action=false">\r                        <ul flag="table">\r                            <li flag="table" ng-repeat="n in vm.tableMenu">\r                                <i ng-repeat="s in n" flag="table" ng-click="vm.insertTable()" ng-mouseenter="vm.setTableMemu(s[0],s[1])" ng-mouseleave="" ng-class="{true: \'active\', false: \'\'}[s[0]<=vm.tableActiveX && s[1] <= vm.tableActiveY]"></i>\r                            </li>\r                        </ul>\r                    </div>\r\r\r                    <i ng-if="item.type === \'emoji\'" title="{{item.title}}" class="{{item.className}} toolbar-icon"  data-toggle="modal" data-target="#{{item.target}}"></i>\r\r                    <i ng-if="item.type === \'mathFn\'" title="{{item.title}}" class="{{item.className}} toolbar-icon"  data-sample="E = mc^2" ng-click="vm.styleFn(item.name,$event)"></i>\r                    <i ng-if="item.type === \'flowchart\'" title="{{item.title}}" class="{{item.className}} toolbar-icon" data-sample="graph LR\rA-->B" ng-click="vm.styleFn(item.name,$event)"></i>\r                    <i ng-if="item.type === \'diagram\'" title="{{item.title}}" class="{{item.className}} toolbar-icon" data-sample="sequenceDiagram\rA->>B: 你好吗?\rB->>A: 我很好!" ng-click="vm.styleFn(item.name,$event)"></i>\r                    <i ng-if="item.type === \'gantt\'" title="{{item.title}}" class="{{item.className}} toolbar-icon" data-sample="gantt\rdateFormat YYYY-MM-DD\rsection S1\rT1: 2014-01-01, 9d\rsection S2\rT2: 2014-01-11, 9d\rsection S3\rT3: 2014-01-02, 9d" ng-click="vm.styleFn(item.name,$event)"></i>\r                    <i ng-if="item.type === \'help\'" title="{{item.title}}" class="{{item.className}} toolbar-icon" data-toggle="modal" data-target="#{{item.target}}"></i>\r                    <i ng-if="item.type === \'preview\' && vm.isPreviewButton" title="{{item.title}}" class="{{item.className}} toolbar-icon" ng-click="vm.togglePreview()"></i>\r                    <i ng-if="item.type === \'expand\' && vm.isFullButton" title="{{vm.isFullscreen?item.title2:item.title}}" class="{{item.className}} toolbar-icon" ng-class="{true: \'fa-compress\', false: \'fa-expand\'}[vm.isFullscreen]" ng-click="vm.toggleFullScreen()"></i>\r                    <i ng-if="item.type === \'dividor\'" class="dividor"></i>\r                </li>\r            </ul>\r        </div>\r    </div>\r    <div class="wt-editor-container">\r        <div class="wt-editor-container-code" ng-style="vm.editorContainerCode">\r            <textarea  ng-style="vm.editorHeight" placeholder="输入内容..." class="wt-editor-textarea" ng-model="value"></textarea>\r        </div>\r        <div class="wt-editor-container-preview" ng-show="vm.isPreview">\r            <article class="markdown-body" data-open-title="Hide Preview" data-closed-title="Show Preview"></article> <!-- 实时预览 -->\r        </div>\r    </div>\r</div>\r')}]);