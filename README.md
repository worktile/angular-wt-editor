wt-editor angular markdown editor
=================

angular markdown editor


## 安装步骤

1. 安装 Node.js、git 客户端

1. 执行 `git clone https://github.com/worktile/angular-wt-editor`

1. 执行 `npm install gulp -g` 和 `npm install bower -g`

1. 执行 `npm install` 和 `bower install`

1. 执行 `bower install https://github.com/WorktileTech/marked.git`

1. 执行 `gulp` 生成js，打开 demo.html 即可

##demo示例


<wt-editor ng-model="content" config="{}"></wt-editor>

config可以设置的参数:

1. type [String,编辑器toolbar类型 'simple':简易版, 'all':全部按钮]

2. fontSize [String, markdown代码字体大小，默认为16px]

3. isPreviewButton [Boolean, 是否显示预览按钮,默认为true]

4. width [String, 编辑器宽度]

5. height [String, 编辑器高度]

6. isFullButton [Boolean, 是否显示最大化按钮]

7. hideButtons [隐藏的toolbar按钮,元素为按钮的id, id见下面]

8. replaceButtons [替换默认的图标,{id:17,title:'插入图片',className:'fa fa-file-image-o',type:'custom',action:imageFn}]

9. additionalButtons [扩展的图标,{title:'扩展',className:'fa fa-music',type:'custom',action:musicFn,before:2}]

10. onShow [显示编辑器的时候调用]

11. onPreview [预览的时候调用]

12.onChange [内容变化时调用]

13.toolbar 按钮id [粗体:1],[斜体:2],[删除线:3],[标题1:4],[标题2:5],[标题3:6],[标题4:7],[标题5:8],[标题6:9],[横线:10],[引用:11],[无序列表:12],[有序列表:13],[未完成任务列表:14],
   [已完成任务列表:15],[链接:16],[图片:17],[代码:18],[表格:19],[Emoji 图标:20],[Font Awesome 图标:21],[数学公式:22],[流程图:23],[顺序图:24],[甘特图:25],[帮助:26],[预览:27],[最大化:28]
