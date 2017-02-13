var wtEditor = angular.module("wt-editor", ["wt.editor.tpl",'ui.bootstrap','monospaced.elastic']);

// Some browsers don't support repeat, for example, Safari
String.prototype.repeat = function (i) {
    return new Array(i + 1).join(this);
}
angular.module("wt-editor")
    .constant('wtEditorConfig', {
        fontSize         : '16px',
        theme            : 'kuroir',
        maxHeight        : 600,
        className        : '',
        autofocus        : true, //默认聚焦
        //width            : '100%', //宽度
        //height           : '100%',  //高度
        type             : 'all', //toolbar按钮显示的类型 ［simple:简易, all:全部按钮］
        typeArray        : {
            hs     : ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            simple : ['bold', 'italic', 'link', 'divider', 'hr', 'quote', 'list', 'list-2'],
            complex: ['heading', 'bold', 'italic', 'underline', 'strikethrough', 'divider', 'hr', 'quote', 'list', 'list-2', 'square', 'check-square', 'divider', 'link', 'image', 'code', 'table', 'divider', 'math', 'diagram', 'gantt', 'divider', 'preview'],
            all    : ['heading', 'bold', 'italic', 'underline', 'strikethrough', 'divider', 'hr', 'quote', 'list', 'list-2', 'square', 'check-square', 'divider', 'link', 'image', 'code', 'table', 'divider', 'math', 'diagram', 'gantt', 'divider', 'preview', 'expand']
        },
        allButtons       : {
            "heading"      : {
                id       : 0,
                title    : '标题',
                className: 'fa fa-header',
                type     : 'headingFns',
                name     : 'heading'
            },
            "bold"         : {
                id       : 1,
                title    : '粗体',
                className: 'fa fa-bold',
                modifier : '**',
                type     : 'styleFn',
                name     : 'bold'
            },
            "italic"       : {
                id       : 2,
                title    : '斜体',
                className: 'fa fa-italic',
                modifier : '*',
                type     : 'styleFn',
                name     : 'italic'
            },
            "underline"    : {
                id       : 3,
                title    : '下划线',
                className: 'fa fa-underline',
                modifier : 'u',
                type     : 'styleFn',
                name     : 'underline'
            },
            "strikethrough": {
                id       : 4,
                title    : '删除线',
                className: 'fa fa-strikethrough',
                modifier : '~~',
                type     : 'styleFn',
                name     : 'strikethrough'
            },
            "h1"           : {
                id       : 5,
                title    : '标题 1',
                className: 'h1',
                level    : '1',
                type     : 'headingFn',
                name     : 'h1'
            },
            "h2"           : {
                id       : 6,
                title    : '标题 2',
                className: 'h2',
                level    : '2',
                type     : 'headingFn',
                name     : 'h2'
            },
            "h3"           : {
                id       : 7,
                title    : '标题 3',
                className: 'h3',
                level    : '3',
                type     : 'headingFn',
                name     : 'h3'
            },
            "h4"           : {
                id       : 8,
                title    : '标题 4',
                className: 'h4',
                level    : '4',
                type     : 'headingFn',
                name     : 'h4'
            },
            "h5"           : {
                id       : 9,
                title    : '标题 5',
                className: 'h5',
                level    : '5',
                type     : 'headingFn',
                name     : 'h5'
            },
            "h6"           : {
                id       : 10,
                title    : '标题 6',
                className: 'h6',
                level    : '6',
                type     : 'headingFn',
                name     : 'h6'
            },
            "hr"           : {
                id       : 11,
                title    : '横线',
                className: 'fa fa-minus',
                type     : 'styleFn',
                name     : 'hr'
            },
            "quote"        : {
                id       : 12,
                title    : '引用',
                className: 'fa fa-quote-left',
                prefix   : '> ',
                type     : 'styleFn',
                name     : 'quote'
            },
            "list"         : {
                id       : 13,
                title    : '无序列表',
                className: 'fa fa-list-ul',
                prefix   : '- ',
                type     : 'styleFn',
                name     : 'list'
            },
            "list-2"       : {
                id       : 14,
                title    : '有序列表',
                className: 'fa fa-list-ol',
                prefix   : '1. ',
                type     : 'styleFn',
                name     : 'list-2'
            },
            "square"       : {
                id       : 15,
                title    : '未完成任务列表',
                className: 'fa fa-square-o',
                prefix   : '- [ ] ',
                type     : 'styleFn',
                name     : 'square'
            },
            "check-square" : {
                id       : 16,
                title    : '已完成任务列表',
                className: 'fa fa-check-square-o',
                prefix   : '- [x] ',
                type     : 'styleFn',
                name     : 'check-square'
            },
            "link"         : {
                id       : 17,
                title    : '链接',
                className: 'fa fa-link',
                text     : '链接文字',
                url      : 'http://example.com',
                type     : 'styleFn',
                name     : 'link'
            },
            "image"        : {
                id       : 18,
                title    : '图片',
                className: 'fa fa-image',
                text     : '图片描述',
                url      : 'http://example.com/example.png',
                type     : 'styleFn',
                name     : 'image'
            },
            "code"         : {
                id       : 19,
                title    : '代码',
                className: 'fa fa-code',
                type     : 'styleFn',
                name     : 'code'
            },
            "table"        : {
                id       : 20,
                title    : '表格',
                className: 'fa fa-table',
                type     : 'tableFn',
                name     : 'table'
            },
            "emoji"        : {
                id       : 21,
                title    : 'Emoji 图标',
                className: 'fa fa-smile-o',
                target   : 'emoji-modal',
                type     : 'emoji'
            },
            "math"         : {
                id       : 22,
                title    : '数学公式',
                className: 'fa fa-superscript',
                sample   : 'E = mc^2',
                type     : 'mathFn',
                name     : 'math'
            },
            "flow"         : {
                id       : 23,
                title    : '流程图',
                className: 'fa fa-long-arrow-right',
                type     : 'flowchart',
                name     : 'flow'
            },
            "diagram"      : {
                id       : 24,
                title    : '顺序图',
                className: 'fa fa-exchange',
                type     : 'diagram',
                name     : 'diagram'
            },
            "gantt"        : {
                id       : 25,
                title    : '甘特图',
                className: 'fa fa-sliders',
                type     : 'gantt',
                name     : 'gantt'
            },
            "preview"      : {
                id       : 27,
                title    : '预览',
                className: 'fa fa-columns',
                type     : 'preview'
            },
            "expand"       : {
                id       : 28,
                title    : '最大化',
                title2   : '还原',
                className: 'fa fa-expand',
                type     : 'expand'
            },
            "divider"      : {
                id  : parseInt(Math.random() * 1000000),
                type: 'divider'
            }
        },
        extendButtons    : {}, //初始化扩展的图标
        quickSearch      : {},
        hideButtons      : [],//要不显示的图标[]
        additionalButtons: [],//扩展的图标 {title:'扩展',className:'fa fa-music',type:'custom',action:musicFn,before:2}
        replaceButtons   : [],//替换默认的图标 {title:'插入图片',className:'fa fa-file-image-o',type:'custom',action:imageFn,id:17}
        locale           : 'zh-cn',//国际化设置[未]
        language         : {
            'en-us': {
                'heading'      : 'H1',
                'bold'         : 'Bold',
                'italic'       : 'Italic',
                'underline'    : 'Underline',
                'strikethrough': 'Strike through',
                'h1'           : 'H1',
                'h2'           : 'H2',
                'h3'           : 'H3',
                'h4'           : 'H4',
                'h5'           : 'H5',
                'h6'           : 'H6',
                'hr'           : 'Hr',
                'quote'        : 'Quote',
                'list'         : 'Ul',
                'list-2'       : 'Ol',
                'square'       : 'Unfinished',
                'check-square' : 'Completed',
                'link'         : 'Link',
                'link-text'    : 'Link',
                'image'        : 'Image',
                'image-text'   : 'Description',
                'code'         : 'Code',
                'table'        : 'Table',
                'emoji'        : 'Emoji',
                'math'         : 'Math',
                'flow'         : 'Flow',
                'diagram'      : 'Flowchart',
                'gantt'        : 'Gantt',
                'preview'      : 'Preview',
                'max'          : 'Max',
                'original'     : 'Reduction',
                'col'          : 'col',
                'row'          : 'row',
                'diagram'      : 'sequenceDiagram\nA->>B: How are you?\nB->>A: I am fine!',
                'placeholder'  : 'Content ...'
            },
            'zh-cn': {
                'heading'      : '标题',
                'bold'         : '粗体',
                'italic'       : '斜体',
                'underline'    : '下划线',
                'strikethrough': '删除线',
                'h1'           : '标题 1',
                'h2'           : '标题 2',
                'h3'           : '标题 3',
                'h4'           : '标题 4',
                'h5'           : '标题 5',
                'h6'           : '标题 6',
                'hr'           : '横线',
                'quote'        : '引用',
                'list'         : '无序列表',
                'list-2'       : '有序列表',
                'square'       : '未完成任务列表',
                'check-square' : '已完成任务列表',
                'link'         : '链接',
                'link-text'    : '链接文字',
                'image'        : '图片',
                'image-text'   : '图片描述',
                'code'         : '代码',
                'table'        : '表格',
                'emoji'        : 'Emoji 图标',
                'math'         : '数学公式',
                'flow'         : '流程图',
                'diagram'      : '顺序图',
                'gantt'        : '甘特图',
                'preview'      : '预览',
                'max'          : '最大化',
                'original'     : '还原',
                'col'          : '列',
                'row'          : '行',
                'diagram'      : 'sequenceDiagram\nA->>B: 你好吗?\nB->>A: 我很好3!',
                'placeholder'  : '输入内容...'
            },
            'zh-tw': {
                'heading'      : '標題',
                'bold'         : '粗體',
                'italic'       : '斜體',
                'underline'    : '下劃線',
                'strikethrough': '刪除線',
                'h1'           : '標題 1',
                'h2'           : '標題 2',
                'h3'           : '標題 3',
                'h4'           : '標題 4',
                'h5'           : '標題 5',
                'h6'           : '標題 6',
                'hr'           : '橫線',
                'quote'        : '引用',
                'list'         : '無序列表',
                'list-2'       : '有序列表',
                'square'       : '未完成任務列表',
                'check-square' : '已完成任務列表',
                'link'         : '鏈接',
                'link-text'    : '鏈接文字',
                'image'        : '圖片',
                'image-text'   : '圖片描述',
                'code'         : '代碼',
                'table'        : '表格',
                'emoji'        : 'Emoji 圖標',
                'math'         : '數學公式',
                'flow'         : '流程圖',
                'diagram'      : '順序圖',
                'gantt'        : '甘特圖',
                'preview'      : '預覽',
                'max'          : '最大化',
                'original'     : '還原',
                'col'          : '列',
                'row'          : '行',
                'diagram'      : 'sequenceDiagram\nA->>B: 你好嗎?\nB->>A: 我很好!',
                'placeholder'  : '輸入內容...'
            },
            'ja-jp': {
                'heading'      : '标题',
                'bold'         : '粗体',
                'italic'       : '斜体',
                'underline'    : '下划线',
                'strikethrough': '删除线',
                'h1'           : '标题 1',
                'h2'           : '标题 2',
                'h3'           : '标题 3',
                'h4'           : '标题 4',
                'h5'           : '标题 5',
                'h6'           : '标题 6',
                'hr'           : '横线',
                'quote'        : '引用',
                'list'         : '无序列表',
                'list-2'       : '有序列表',
                'square'       : '未完成任务列表',
                'check-square' : '已完成任务列表',
                'link'         : '链接',
                'link-text'    : '链接文字',
                'image'        : '图片',
                'image-text'   : '图片描述',
                'code'         : '代码',
                'table'        : '表格',
                'emoji'        : 'Emoji 图标',
                'math'         : '数学公式',
                'flow'         : '流程图',
                'diagram'      : '顺序图',
                'gantt'        : '甘特图',
                'preview'      : '预览',
                'max'          : '最大化',
                'original'     : '还原',
                'col'          : '列',
                'row'          : '行',
                'diagram'      : 'sequenceDiagram\nA->>B: 你好吗?\nB->>A: 我很好3!',
                'placeholder'  : '输入内容...'
            }
        },
        onShow           : null,//显示编辑器的时候调用
        onPreview        : null,//渲染的时候调用
        onChange         : null,//内容变化时调用
        emojis           : [":blush:", ":scream:", ":smirk:", ":smiley:", ":stuck_out_tongue_closed_eyes:", ":stuck_out_tongue_winking_eye:", ":rage:", ":disappointed:", ":sob:", ":kissing_heart:", ":wink:", ":pensive:", ":confounded:", ":flushed:", ":relaxed:", ":mask:", ":heart:", ":broken_heart:", ":sunny:", ":umbrella:", ":cloud:", ":snowflake:", ":snowman:", ":zap:", ":cyclone:", ":foggy:", ":ocean:", ":cat:", ":dog:", ":mouse:", ":hamster:", ":rabbit:", ":wolf:", ":frog:", ":tiger:", ":koala:", ":bear:", ":pig:", ":pig_nose:", ":cow:", ":boar:", ":monkey_face:", ":monkey:", ":horse:", ":racehorse:", ":camel:", ":sheep:", ":elephant:", ":panda_face:", ":snake:", ":bird:", ":baby_chick:", ":hatched_chick:", ":hatching_chick:", ":chicken:", ":penguin:", ":turtle:", ":bug:", ":honeybee:", ":ant:", ":beetle:", ":snail:", ":octopus:", ":tropical_fish:", ":fish:", ":whale:", ":whale2:", ":dolphin:", ":cow2:", ":ram:", ":rat:", ":water_buffalo:", ":tiger2:", ":rabbit2:", ":dragon:", ":goat:", ":rooster:", ":dog2:", ":pig2:", ":mouse2:", ":ox:", ":dragon_face:", ":blowfish:", ":crocodile:", ":dromedary_camel:", ":leopard:", ":cat2:", ":poodle:", ":paw_prints:", ":bouquet:", ":cherry_blossom:", ":tulip:", ":four_leaf_clover:", ":rose:", ":sunflower:", ":hibiscus:", ":maple_leaf:", ":leaves:", ":fallen_leaf:", ":herb:", ":mushroom:", ":cactus:", ":palm_tree:", ":evergreen_tree:", ":deciduous_tree:", ":chestnut:", ":seedling:", ":blossom:", ":ear_of_rice:", ":shell:", ":globe_with_meridians:", ":sun_with_face:", ":full_moon_with_face:", ":new_moon_with_face:", ":new_moon:", ":waxing_crescent_moon:", ":first_quarter_moon:", ":waxing_gibbous_moon:", ":full_moon:", ":waning_gibbous_moon:", ":last_quarter_moon:", ":waning_crescent_moon:", ":last_quarter_moon_with_face:", ":first_quarter_moon_with_face:", ":moon:", ":earth_africa:", ":earth_americas:", ":earth_asia:", ":volcano:", ":milky_way:", ":partly_sunny:", ":octocat:", ":squirrel:", ":bamboo:", ":gift_heart:", ":dolls:", ":school_satchel:", ":mortar_board:", ":flags:", ":fireworks:", ":sparkler:", ":wind_chime:", ":rice_scene:", ":jack_o_lantern:", ":ghost:", ":santa:", ":christmas_tree:", ":gift:", ":bell:", ":no_bell:", ":tanabata_tree:", ":tada:", ":confetti_ball:", ":balloon:", ":crystal_ball:", ":cd:", ":dvd:", ":floppy_disk:", ":camera:", ":video_camera:", ":movie_camera:", ":computer:", ":tv:", ":iphone:", ":phone:", ":telephone:", ":telephone_receiver:", ":pager:", ":fax:", ":minidisc:", ":vhs:", ":sound:", ":speaker:", ":mute:", ":loudspeaker:", ":mega:", ":hourglass:", ":hourglass_flowing_sand:", ":alarm_clock:", ":watch:", ":radio:", ":satellite:", ":loop:", ":mag:", ":mag_right:", ":unlock:", ":lock:", ":lock_with_ink_pen:", ":closed_lock_with_key:", ":key:", ":bulb:", ":flashlight:", ":high_brightness:", ":low_brightness:", ":electric_plug:", ":battery:", ":calling:", ":email:", ":mailbox:", ":postbox:", ":bath:", ":bathtub:", ":shower:", ":toilet:", ":wrench:", ":nut_and_bolt:", ":hammer:", ":seat:", ":moneybag:", ":yen:", ":dollar:", ":pound:", ":euro:", ":credit_card:", ":money_with_wings:", ":e-mail:", ":inbox_tray:", ":outbox_tray:", ":envelope:", ":incoming_envelope:", ":postal_horn:", ":mailbox_closed:", ":mailbox_with_mail:", ":mailbox_with_no_mail:", ":door:", ":smoking:", ":bomb:", ":gun:", ":hocho:", ":pill:", ":syringe:", ":page_facing_up:", ":page_with_curl:", ":bookmark_tabs:", ":bar_chart:", ":chart_with_upwards_trend:", ":chart_with_downwards_trend:", ":scroll:", ":clipboard:", ":calendar:", ":date:", ":card_index:", ":file_folder:", ":open_file_folder:", ":scissors:", ":pushpin:", ":paperclip:", ":black_nib:", ":pencil2:", ":straight_ruler:", ":triangular_ruler:", ":closed_book:", ":green_book:", ":blue_book:", ":orange_book:", ":notebook:", ":notebook_with_decorative_cover:", ":ledger:", ":books:", ":bookmark:", ":name_badge:", ":microscope:", ":telescope:", ":newspaper:", ":football:", ":basketball:", ":soccer:", ":baseball:", ":tennis:", ":8ball:", ":rugby_football:", ":bowling:", ":golf:", ":mountain_bicyclist:", ":bicyclist:", ":horse_racing:", ":snowboarder:", ":swimmer:", ":surfer:", ":ski:", ":spades:", ":hearts:", ":clubs:", ":diamonds:", ":gem:", ":ring:", ":trophy:", ":musical_score:", ":musical_keyboard:", ":violin:", ":space_invader:", ":video_game:", ":black_joker:", ":flower_playing_cards:", ":game_die:", ":dart:", ":mahjong:", ":clapper:", ":memo:", ":pencil:", ":book:", ":art:", ":microphone:", ":headphones:", ":trumpet:", ":saxophone:", ":guitar:", ":shoe:", ":sandal:", ":high_heel:", ":lipstick:", ":boot:", ":shirt:", ":tshirt:", ":necktie:", ":womans_clothes:", ":dress:", ":running_shirt_with_sash:", ":jeans:", ":kimono:", ":bikini:", ":ribbon:", ":tophat:", ":crown:", ":womans_hat:", ":mans_shoe:", ":closed_umbrella:", ":briefcase:", ":handbag:", ":pouch:", ":purse:", ":eyeglasses:", ":fishing_pole_and_fish:", ":coffee:", ":tea:", ":sake:", ":baby_bottle:", ":beer:", ":beers:", ":cocktail:", ":tropical_drink:", ":wine_glass:", ":fork_and_knife:", ":pizza:", ":hamburger:", ":fries:", ":poultry_leg:", ":meat_on_bone:", ":spaghetti:", ":curry:", ":fried_shrimp:", ":bento:", ":sushi:", ":fish_cake:", ":rice_ball:", ":rice_cracker:", ":rice:", ":ramen:", ":stew:", ":oden:", ":dango:", ":egg:", ":bread:", ":doughnut:", ":custard:", ":icecream:", ":ice_cream:", ":shaved_ice:", ":birthday:", ":cake:", ":cookie:", ":chocolate_bar:", ":candy:", ":lollipop:", ":honey_pot:", ":apple:", ":green_apple:", ":tangerine:", ":lemon:", ":cherries:", ":grapes:", ":watermelon:", ":strawberry:", ":peach:", ":melon:", ":banana:", ":pear:", ":pineapple:", ":sweet_potato:", ":eggplant:", ":tomato:", ":corn:", ":alien:", ":angel:", ":anger:", ":angry:", ":anguished:", ":astonished:", ":baby:", ":blue_heart:", ":blush:", ":boom:", ":bow:", ":bowtie:", ":boy:", ":bride_with_veil:", ":broken_heart:", ":bust_in_silhouette:", ":busts_in_silhouette:", ":clap:", ":cold_sweat:", ":collision:", ":confounded:", ":confused:", ":construction_worker:", ":cop:", ":couple_with_heart:", ":couple:", ":couplekiss:", ":cry:", ":crying_cat_face:", ":cupid:", ":dancer:", ":dancers:", ":dash:", ":disappointed:", ":dizzy_face:", ":dizzy:", ":droplet:", ":ear:", ":exclamation:", ":expressionless:", ":eyes:", ":facepunch:", ":family:", ":fearful:", ":feelsgood:", ":feet:", ":finnadie:", ":fire:", ":fist:", ":flushed:", ":frowning:", ":girl:", ":goberserk:", ":godmode:", ":green_heart:", ":grey_exclamation:", ":grey_question:", ":grimacing:", ":grin:", ":grinning:", ":guardsman:", ":haircut:", ":hand:", ":hankey:", ":hear_no_evil:", ":heart_eyes_cat:", ":heart_eyes:", ":heart:", ":heartbeat:", ":heartpulse:", ":hurtrealbad:", ":hushed:", ":imp:", ":information_desk_person:", ":innocent:", ":japanese_goblin:", ":japanese_ogre:", ":joy_cat:", ":joy:", ":kiss:", ":kissing_cat:", ":kissing_closed_eyes:", ":kissing_heart:", ":kissing_smiling_eyes:", ":kissing:", ":laughing:", ":lips:", ":love_letter:", ":man_with_gua_pi_mao:", ":man_with_turban:", ":man:", ":mask:", ":massage:", ":metal:", ":muscle:", ":musical_note:", ":nail_care:", ":neckbeard:", ":neutral_face:", ":no_good:", ":no_mouth:", ":nose:", ":notes:", ":ok_hand:", ":ok_woman:", ":older_man:", ":older_woman:", ":open_hands:", ":open_mouth:", ":pensive:", ":persevere:", ":person_frowning:", ":person_with_blond_hair:", ":person_with_pouting_face:", ":point_down:", ":point_left:", ":point_right:", ":point_up_2:", ":point_up:", ":poop:", ":pouting_cat:", ":pray:", ":princess:", ":punch:", ":purple_heart:", ":question:", ":rage:", ":rage1:", ":rage2:", ":rage3:", ":rage4:", ":raised_hand:", ":raised_hands:", ":relaxed:", ":relieved:", ":revolving_hearts:", ":runner:", ":running:", ":satisfied:", ":scream_cat:", ":scream:", ":see_no_evil:", ":shit:", ":skull:", ":sleeping:", ":sleepy:", ":smile_cat:", ":smile:", ":smiley_cat:", ":smiley:", ":smiling_imp:", ":smirk_cat:", ":smirk:", ":sob:", ":sparkling_heart:", ":sparkles:", ":speak_no_evil:", ":speech_balloon:", ":star:", ":star2:", ":stuck_out_tongue_closed_eyes:", ":stuck_out_tongue_winking_eye:", ":stuck_out_tongue:", ":sunglasses:", ":suspect:", ":sweat_drops:", ":sweat_smile:", ":sweat:", ":thought_balloon:", ":-1:", ":thumbsdown:", ":thumbsup:", ":+1:", ":tired_face:", ":tongue:", ":triumph:", ":trollface:", ":two_hearts:", ":two_men_holding_hands:", ":two_women_holding_hands:", ":unamused:", ":v:", ":walking:", ":wave:", ":weary:", ":wink2:", ":wink:", ":woman:", ":worried:", ":yellow_heart:", ":yum:", ":zzz:", ":109:", ":house:", ":house_with_garden:", ":school:", ":office:", ":post_office:", ":hospital:", ":bank:", ":convenience_store:", ":love_hotel:", ":hotel:", ":wedding:", ":church:", ":department_store:", ":european_post_office:", ":city_sunrise:", ":city_sunset:", ":japanese_castle:", ":european_castle:", ":tent:", ":factory:", ":tokyo_tower:", ":japan:", ":mount_fuji:", ":sunrise_over_mountains:", ":sunrise:", ":stars:", ":statue_of_liberty:", ":bridge_at_night:", ":carousel_horse:", ":rainbow:", ":ferris_wheel:", ":fountain:", ":roller_coaster:", ":ship:", ":speedboat:", ":boat:", ":sailboat:", ":rowboat:", ":anchor:", ":rocket:", ":airplane:", ":helicopter:", ":steam_locomotive:", ":tram:", ":mountain_railway:", ":bike:", ":aerial_tramway:", ":suspension_railway:", ":mountain_cableway:", ":tractor:", ":blue_car:", ":oncoming_automobile:", ":car:", ":red_car:", ":taxi:", ":oncoming_taxi:", ":articulated_lorry:", ":bus:", ":oncoming_bus:", ":rotating_light:", ":police_car:", ":oncoming_police_car:", ":fire_engine:", ":ambulance:", ":minibus:", ":truck:", ":train:", ":station:", ":train2:", ":bullettrain_front:", ":bullettrain_side:", ":light_rail:", ":monorail:", ":railway_car:", ":trolleybus:", ":ticket:", ":fuelpump:", ":vertical_traffic_light:", ":traffic_light:", ":warning:", ":construction:", ":beginner:", ":atm:", ":slot_machine:", ":busstop:", ":barber:", ":hotsprings:", ":checkered_flag:", ":crossed_flags:", ":izakaya_lantern:", ":moyai:", ":circus_tent:", ":performing_arts:", ":round_pushpin:", ":triangular_flag_on_post:", ":jp:", ":kr:", ":cn:", ":us:", ":fr:", ":es:", ":it:", ":ru:", ":gb:", ":uk:", ":de:", ":100:", ":1234:", ":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:", ":keycap_ten:", ":zero:", ":hash:", ":symbols:", ":arrow_backward:", ":arrow_down:", ":arrow_forward:", ":arrow_left:", ":capital_abcd:", ":abcd:", ":abc:", ":arrow_lower_left:", ":arrow_lower_right:", ":arrow_right:", ":arrow_up:", ":arrow_upper_left:", ":arrow_upper_right:", ":arrow_double_down:", ":arrow_double_up:", ":arrow_down_small:", ":arrow_heading_down:", ":arrow_heading_up:", ":leftwards_arrow_with_hook:", ":arrow_right_hook:", ":left_right_arrow:", ":arrow_up_down:", ":arrow_up_small:", ":arrows_clockwise:", ":arrows_counterclockwise:", ":rewind:", ":fast_forward:", ":information_source:", ":ok:", ":twisted_rightwards_arrows:", ":repeat:", ":repeat_one:", ":new:", ":top:", ":up:", ":cool:", ":free:", ":ng:", ":cinema:", ":koko:", ":signal_strength:", ":u5272:", ":u5408:", ":u55b6:", ":u6307:", ":u6708:", ":u6709:", ":u6e80:", ":u7121:", ":u7533:", ":u7a7a:", ":u7981:", ":sa:", ":restroom:", ":mens:", ":womens:", ":baby_symbol:", ":no_smoking:", ":parking:", ":wheelchair:", ":metro:", ":baggage_claim:", ":accept:", ":wc:", ":potable_water:", ":put_litter_in_its_place:", ":secret:", ":congratulations:", ":m:", ":passport_control:", ":left_luggage:", ":customs:", ":ideograph_advantage:", ":cl:", ":sos:", ":id:", ":no_entry_sign:", ":underage:", ":no_mobile_phones:", ":do_not_litter:", ":non-potable_water:", ":no_bicycles:", ":no_pedestrians:", ":children_crossing:", ":no_entry:", ":eight_spoked_asterisk:", ":eight_pointed_black_star:", ":heart_decoration:", ":vs:", ":vibration_mode:", ":mobile_phone_off:", ":chart:", ":currency_exchange:", ":aries:", ":taurus:", ":gemini:", ":cancer:", ":leo:", ":virgo:", ":libra:", ":scorpius:", ":sagittarius:", ":capricorn:", ":aquarius:", ":pisces:", ":ophiuchus:", ":six_pointed_star:", ":negative_squared_cross_mark:", ":a:", ":b:", ":ab:", ":o2:", ":diamond_shape_with_a_dot_inside:", ":recycle:", ":end:", ":on:", ":soon:", ":clock1:", ":clock130:", ":clock10:", ":clock1030:", ":clock11:", ":clock1130:", ":clock12:", ":clock1230:", ":clock2:", ":clock230:", ":clock3:", ":clock330:", ":clock4:", ":clock430:", ":clock5:", ":clock530:", ":clock6:", ":clock630:", ":clock7:", ":clock730:", ":clock8:", ":clock830:", ":clock9:", ":clock930:", ":heavy_dollar_sign:", ":copyright:", ":registered:", ":tm:", ":x:", ":heavy_exclamation_mark:", ":bangbang:", ":interrobang:", ":o:", ":heavy_multiplication_x:", ":heavy_plus_sign:", ":heavy_minus_sign:", ":heavy_division_sign:", ":white_flower:", ":heavy_check_mark:", ":ballot_box_with_check:", ":radio_button:", ":link:", ":curly_loop:", ":wavy_dash:", ":part_alternation_mark:", ":trident:", ":black_square:", ":white_square:", ":white_check_mark:", ":black_square_button:", ":white_square_button:", ":black_circle:", ":white_circle:", ":red_circle:", ":large_blue_circle:", ":large_blue_diamond:", ":large_orange_diamond:", ":small_blue_diamond:", ":small_orange_diamond:", ":small_red_triangle:", ":small_red_triangle_down:", ":shipit:"],
        emojRegx         : /\:[a-z0-9_\-\+]+\:/g
    })
    .controller('wtEditorCtrl', ['$scope', '$timeout', 'wtEditorConfig', 'wtEditorService', function ($scope, $timeout, wtEditorConfig, wtEditorService) {
        //初始化甘特图
        this.initGantt = function () {
            wtEditorService.initGantt();
        };

        //初始解析器
        this.initMarked = function () {
            wtEditorService.initMarked();
        }

        //设置全屏显示
        this.setFullScreen = function (flag, editor) {
            var _obj = $($scope.vm.element);
            if (flag) {
                _obj.css({
                    left  : 0,
                    top   : 0,
                    right : 0,
                    bottom: 0
                });
            } else {
                _obj.css({
                    width : '100%',
                    height: '100%'
                });
            }
            $timeout(function () {
                $scope.vm.editorHeight.height = $($scope.vm.element).find('.wt-editor-container-code').height() + 'px';
            });
        }

        //表情转换
        var emojiFn = function (htmlstr) {
            return htmlstr.replace(wtEditorConfig.emojRegx, function (match) {
                if (wtEditorConfig.emojis.indexOf(match) !== -1) {
                    var name = String(match).slice(1, -1);
                    return '<img class="emoji" title=":' + name + ':" alt="' + name + '" src="https://s.tylingsoft.com/emoji-icons/' + name + '.png" width="18" />';
                } else {
                    return match;
                }
            });
        }

        //是否有选择内容
        this.hasSelection = function () {
            var ta = $scope.vm.editor;

            if (ta.selectionStart === ta.selectionEnd) {
                return false
            } else {
                return true;
            }
        };

        //获取选择内容
        this.getSelection = function () {
            var ta = $scope.vm.editor;
            return {
                target: ta,
                start : ta.selectionStart,
                end   : ta.selectionEnd,
                text  : ta.value.substring(ta.selectionStart, ta.selectionEnd)
            };
        };

        //插入加工后的选择文字
        this.insertText = function (text, start, end) {
            var ta = $scope.vm.editor;
            ta.focus();
            var leftText = ta.value.substring(0, start);
            var rightText = ta.value.substring(end);
            //ta.value = leftText + text + rightText;
            $scope.value = leftText + text + rightText;
        };

        this.clearSelection = function () {
            $scope.vm.editor.selectionStart = $scope.vm.editor.selectionEnd
        }

        //定位光标
        this.setFocus = function (star, end) {
            $timeout(function () {
                $scope.vm.editor.selectionStart = star;
                $scope.vm.editor.selectionEnd = end;
            });
        }

        //是否是行首
        this.isRowFirst = function (start) {
            var ta = $scope.vm.editor;
            //获取光标前的内容，index是光标的位置
            var val = ta.value.substr(0, start);
            //获取光标所在行的信息
            var _text = val.substr(val.lastIndexOf("\n") + 1);
            if (_text.length === 0) {
                return true;
            }
            return false;
        }

        //获取光标所在行信息
        this.getRowText = function (start) {
            var ta = $scope.vm.editor;
            //获取光标前的内容，index是光标的位置
            var val = ta.value.substr(0, start);
            //获取光标所在行的信息
            var _text = val.substr(val.lastIndexOf("\n") + 1);
            return _text;
        }

        //预览解析
        this.previewHTML = function () {
            var _value = wtEditorService.parseMarked($scope.vm.editor.value);
            _value = emojiFn(_value);
            this.setHeight();
            $($scope.vm.element).find('.markdown-body').empty().append(_value); // realtime preview
            wtEditorService.parseMermaid();
            if (wtEditorConfig.onPreview) {
                wtEditorConfig.onPreview();
            }
            $scope.vm.editor.focus();
        }

        //同步
        this.setPriviewScroll = function () {
        }

        //插入内容
        this.replaceContent = function (content,sel) {
            this.insertText(content, sel.start, sel.end);
            $scope.vm.editor.focus();
        };
        //插入内容
        this.insertContent = function (content) {
            var sel = this.getSelection();
            this.insertText(content, sel.start, sel.end);
            $scope.vm.editor.focus();
        };
        //插入内容
        this.insertQuickSearch = function (content,qs) {
            var sel = this.getSelection();
            this.insertText(content, (sel.start-qs.length), sel.end);
            //$scope.vm.editor.focus();
            this.setFocus(sel.start-qs.length+content.length,sel.start-qs.length+content.length);
        };
        //获取内容
        this.getContent = function () {
            return $scope.vm.editor.value;
        }
        //获取国际化文字
        this.getLocaleText = function(key){
            var _locale = wtEditorConfig.language[wtEditorConfig.locale];
            if(_locale){
                var _text = _locale[key];
                if(_text){
                    return _text;
                }else{
                    console.log('text '+key+' none!');
                }
            }else{
                console.log('locale '+wtEditorConfig.locale+' none!');
                _locale = wtEditorConfig.language['zh-cn'];
                var _text = _locale[key];
                if(_text){
                    return _text;
                }else{
                    console.log('text '+key+' none!');
                }
            }

        }

        this.setHeight = function(){
            if($scope.vm.autoHeight){
                $scope.vm.editorHeight.height = ($($scope.vm.element).find('.wt-editor-container-code').height()) + 'px';
            }
        }


    }])
    .directive("wtEditor", ['wtEditorConfig', '$timeout', '$compile', '$rootScope', '$controller', function (wtEditorConfig, $timeout, $compile, $rootScope, $controller) {
        return {
            require    : ["wtEditor", 'ngModel'],
            replace    : true,
            scope      : {
                value : '=ngModel',
                config: '='
            },
            controller : 'wtEditorCtrl',
            templateUrl: "wt-editor/editor.html",
            link       : function (scope, element, attrs, controller) {
                scope.maxHeight = wtEditorConfig.maxHeight;
                var vm = scope.vm = {
                    element            : element,
                    value              : scope.value, //默认显示的内容
                    emojiValue         : '', //插入表情代码
                    faValue            : '',
                    toolbars           : [],
                    headers            : [],
                    editorHeight       : {},
                    header_action      : false,
                    table_action       : false,
                    tableMenu          : [
                        [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5]],
                        [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5]],
                        [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5]],
                        [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5]],
                        [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5]]
                    ],
                    tableActiveX       : 1,
                    tableActiveY       : 1,
                    autoHeight         : scope.config.autoHeight || false,
                    className          : scope.config.className
                };
                //继承设置
                wtEditorConfig.replaceButtons = [];
                wtEditorConfig.additionalButtons = [];
                wtEditorConfig.hideButtons = [];
                angular.extend(wtEditorConfig, scope.config);

                $(wtEditorConfig.typeArray[wtEditorConfig.type]).each(function (index, value) {
                    var _tempBtn = wtEditorConfig.allButtons[value];
                    if (!_tempBtn) {
                        _tempBtn = wtEditorConfig.extendButtons[value];
                    }
                    if (_tempBtn) {
                        vm.toolbars[vm.toolbars.length] = _tempBtn;
                    }
                });

                $(wtEditorConfig.typeArray['hs']).each(function (index, value) {
                    var _tempBtn = wtEditorConfig.allButtons[value];
                    if (_tempBtn) {
                        vm.headers[vm.headers.length] = _tempBtn;
                    }
                });

                //隐藏个性化按钮
                _.remove(vm.toolbars, function (n) {
                    if (n.id) {
                        return _.indexOf(wtEditorConfig.hideButtons, n.id) !== -1;
                    }
                });

                //替换图标
                if (wtEditorConfig.replaceButtons.length > 0) {
                    $(wtEditorConfig.replaceButtons).each(function (n) {
                        var _temp = wtEditorConfig.replaceButtons[n];
                        if (_temp.id) {
                            var _index = _.findLastIndex(vm.toolbars, function (n) {
                                return n.id === _temp.id;
                            })
                            vm.toolbars.splice(_index, 1, _temp);
                        }
                    });
                }

                //插入元素
                if (wtEditorConfig.additionalButtons.length > 0) {
                    $(wtEditorConfig.additionalButtons).each(function (n) {
                        var _temp = wtEditorConfig.additionalButtons[n];
                        if (_temp.before) {
                            var _index = _.findLastIndex(vm.toolbars, function (n) {
                                return n.id === _temp.before;
                            })
                            vm.toolbars.splice(_index, 0, _temp);
                        } else {
                            vm.toolbars.push(_temp);
                        }
                    });
                }


                vm.editor = $(element).find('.wt-editor-textarea')[0];
                try{
                    vm.editor.setAttribute('placeholder',controller[0].getLocaleText('placeholder'));
                }catch(e){}

                //插入方法
                function insert(flag, title, sel, keepSelection, search, replace) {
                    //有序列表和无序列表选择统一添加
                    if (sel.text.indexOf('\n') != -1 && keepSelection && search && replace) {
                        if (sel.text.length > 0) {
                            sel = controller[0].getSelection();
                        }
                        var replaceStr = sel.text.replace(search, replace);
                        var ss = controller[0].getRowText(sel.start);
                        controller[0].insertText(replaceStr, sel.start - ss.length, sel.end);
                        controller[0].setFocus(sel.start + replaceStr.length, sel.start + replaceStr.length);
                    } else {
                        if (sel.text.length > 0) {
                            controller[0].clearSelection();
                            sel = controller[0].getSelection();
                        }
                        var ss = controller[0].getRowText(sel.start);
                        controller[0].insertText(flag + ' ' + ss, sel.start - ss.length, sel.end);
                        controller[0].setFocus(sel.start + flag.length + 1, sel.start + flag.length + 1);
                    }
                }

                //插入markdown
                vm.styleFn = function (param, $event) {
                    var sel = controller[0].getSelection();
                    switch (param) {
                        case "bold":
                            if (controller[0].hasSelection()) {
                                if (sel.text.indexOf('\n') != -1) {
                                    sel = controller[0].getSelection();
                                    var replaceStr = sel.text.replace(/([^\n]+)([\n\s]*)/g, "**$1**$2");
                                    var ss = controller[0].getRowText(sel.start);
                                    controller[0].insertText(replaceStr, sel.start - ss.length, sel.end);
                                    controller[0].setFocus(sel.start + replaceStr.length, sel.start + replaceStr.length);
                                } else {
                                    controller[0].insertText(" **" + sel.text + "** ", sel.start, sel.end);
                                    controller[0].setFocus(sel.start, sel.start + 6 + sel.text.length);
                                }

                            } else {
                                var ss = controller[0].getRowText(sel.start);
                                if (ss.length > 0) {
                                    controller[0].insertText(" **** ", sel.start, sel.end);
                                    controller[0].setFocus(sel.start + 3, sel.start + 3);
                                } else {
                                    controller[0].insertText("****", sel.start, sel.end);
                                    controller[0].setFocus(sel.start + 2, sel.start + 2);
                                }
                            }
                            break;
                        case "italic":
                            if (controller[0].hasSelection()) {
                                if (sel.text.indexOf('\n') != -1) {
                                    sel = controller[0].getSelection();
                                    var replaceStr = sel.text.replace(/([^\n]+)([\n\s]*)/g, "_$1_$2");
                                    var ss = controller[0].getRowText(sel.start);
                                    controller[0].insertText(replaceStr, sel.start - ss.length, sel.end);
                                    controller[0].setFocus(sel.start + replaceStr.length, sel.start + replaceStr.length);
                                } else {
                                    controller[0].insertText(" _" + sel.text + "_ ", sel.start, sel.end);
                                    controller[0].setFocus(sel.start, sel.start + 4 + sel.text.length);
                                }
                            } else {
                                var ss = controller[0].getRowText(sel.start);
                                if (ss.length > 0) {
                                    controller[0].insertText(" __ ", sel.start, sel.end, 2, 2);
                                    controller[0].setFocus(sel.start + 2, sel.start + 2);
                                } else {
                                    controller[0].insertText("__", sel.start, sel.end, 1, 1);
                                    controller[0].setFocus(sel.start + 1, sel.start + 1);
                                }
                            }
                            break;
                        case "underline":
                            if (controller[0].hasSelection()) {
                                if (sel.text.indexOf('\n') != -1) {
                                    sel = controller[0].getSelection();
                                    var replaceStr = sel.text.replace(/([^\n]+)([\n\s]*)/g, "<u>$1</u>$2");
                                    var ss = controller[0].getRowText(sel.start);
                                    controller[0].insertText(replaceStr, sel.start - ss.length, sel.end);
                                    controller[0].setFocus(sel.start + replaceStr.length, sel.start + replaceStr.length);
                                } else {
                                    controller[0].insertText("<u>" + sel.text + "</u>", sel.start, sel.end);
                                    controller[0].setFocus(sel.start, sel.start + 7 + sel.text.length);
                                }
                            } else {
                                controller[0].insertText("<u></u>", sel.start, sel.end, 3, 4);
                                controller[0].setFocus(sel.start + 3, sel.start + 3);
                            }
                            break;
                        case "strikethrough":
                            if (controller[0].hasSelection()) {
                                if (sel.text.indexOf('\n') != -1) {
                                    sel = controller[0].getSelection();
                                    var replaceStr = sel.text.replace(/([^\n]+)([\n\s]*)/g, " ~~$1~~ $2");
                                    var ss = controller[0].getRowText(sel.start);
                                    controller[0].insertText(replaceStr, sel.start - ss.length, sel.end);
                                    controller[0].setFocus(sel.start + replaceStr.length, sel.start + replaceStr.length);
                                } else {
                                    controller[0].insertText(" ~~" + sel.text + "~~ ", sel.start, sel.end);
                                    controller[0].setFocus(sel.start, sel.start + 6 + sel.text.length);
                                }
                            } else {
                                var ss = controller[0].getRowText(sel.start);
                                if (ss.length > 0) {
                                    controller[0].insertText(" ~~~~ ", sel.start, sel.end);
                                    controller[0].setFocus(sel.start + 3, sel.start + 3);
                                } else {
                                    controller[0].insertText("~~~~", sel.start, sel.end);
                                    controller[0].setFocus(sel.start + 2, sel.start + 2);
                                }
                            }
                            break;
                        case "h1":
                            insert("#", "", sel, true, /(.+)([\n]?)/g, "\n# $1$2\n");
                            vm.header_action = false;
                            break;
                        case "h2":
                            insert("##", "", sel, true, /(.+)([\n]?)/g, "\n## $1$2\n");
                            vm.header_action = false;
                            break;
                        case "h3":
                            insert("###", "", sel, true, /(.+)([\n]?)/g, "\n### $1$2\n");
                            vm.header_action = false;
                            break;
                        case "h4":
                            insert("####", "", sel, true, /(.+)([\n]?)/g, "\n#### $1$2\n");
                            vm.header_action = false;
                            break;
                        case "h5":
                            insert("#####", "", sel, true, /(.+)([\n]?)/g, "\n##### $1$2\n");
                            vm.header_action = false;
                            break;
                        case "h6":
                            insert("######", "", sel, true, /(.+)([\n]?)/g, "\n###### $1$2\n");
                            vm.header_action = false;
                            break;
                        case "hr":
                            if (sel.text.length > 0) {
                                controller[0].clearSelection();
                                sel = controller[0].getSelection();
                            }
                            controller[0].insertText("\n---\n", sel.start, sel.end);
                            controller[0].setFocus(sel.start + 5, sel.start + 5);
                            break;
                        case "quote":
                            insert(">", "", sel, true, /(.+)([\n]?)/g, "\n> $1$2");
                            break;
                        case "list":
                            insert("-", "", sel, true, /(.+)([\n]?)/g, '\n- $1$2');
                            break;
                        case "list-2":
                            insert("1.", "", sel, true, /(.+)([\n]?)/g, "\n1. $1$2");
                            break;

                        case "square":
                            insert("- [ ] ", "", sel, true, /(.+)([\n]?)/g, "- [ ] $1$2");
                            break;
                        case "check-square":
                            insert("- [x] ", "", sel, true, /(.+)([\n]?)/g, "- [x] $1$2");
                            break;

                        case "link":
                            var iUrl = "http://xxx.com";
                            var _text = controller[0].getLocaleText('link-text');//链接文字
                            if (sel.text.length > 0) {
                                if (sel.text.indexOf('http') != -1) {
                                    iUrl = sel.text;
                                } else {
                                    _text = sel.text;
                                }
                            }
                            var aUrl = "[" + _text + "](" + iUrl + ")";
                            controller[0].insertText(aUrl, sel.start, sel.end);
                            controller[0].setFocus(sel.start + aUrl.length, sel.start + aUrl.length);

                            break;
                        case "image":
                            var _text = controller[0].getLocaleText('image-text');//"图片描述";
                            var iUrl = "http://lesschat.com/x.png";
                            if (sel.text.length > 0) {
                                if (sel.text.indexOf('http') != -1) {
                                    iUrl = sel.text;
                                } else {
                                    _text = sel.text;
                                }
                            }
                            var aUrl = "![" + _text + "](" + iUrl + ")";
                            controller[0].insertText(aUrl, sel.start, sel.end);
                            controller[0].setFocus(sel.start + aUrl.length, sel.start + aUrl.length);
                            break;
                        case "code":
                            if (sel.text.length === 0) {
                                controller[0].insertText("\n```\n  \n```\n", sel.start, sel.end);
                                controller[0].setFocus(sel.start + 6, sel.start + 6);
                            } else {
                                controller[0].insertText("`" + sel.text + "`", sel.start, sel.end);
                                controller[0].setFocus(sel.start + 2 + sel.text.length, sel.start + 2 + sel.text.length);
                            }
                            break;
                        case "table":
                            vm.table_action = true
                            break;
                        case "math":
                            var text = sel.text;
                            if (text.length == 0) {
                                text = 'E = mc^2';
                            }
                            controller[0].insertText('\n```math\n' + text + '\n```\n', sel.start, sel.end);
                            controller[0].setFocus(sel.start + text.length + 14, sel.start + text.length + 14);
                            break;
                        case "flow":
                            var text = sel.text;
                            if (text.length == 0) {
                                text = 'graph LR\nA-->B';
                            }
                            controller[0].insertText('\n```\n' + text + '\n```\n', sel.start, sel.end);
                            controller[0].setFocus(sel.start + text.length + 10, sel.start + text.length + 10);
                            break;
                        case "diagram":
                            var text = sel.text;
                            if (text.length == 0) {
                                //text = 'sequenceDiagram\nA->>B: 你好吗?\nB->>A: 我很好3!';
                                text = controller[0].getLocaleText('diagram');
                            }
                            controller[0].insertText('\n```\n' + text + '\n```\n', sel.start, sel.end);
                            controller[0].setFocus(sel.start + text.length + 10, sel.start + text.length + 10);
                            break;
                        case "gantt":
                            var text = sel.text;
                            if (text.length == 0) {
                                //text = $($event.target).data('sample');
                                text  = 'gantt\n';
                                text += 'dateFormat YYYY-MM-DD\n';
                                text += 'section S1\n';
                                text += 'T1: 2014-01-01, 9d\n';
                                text += 'section S2\n';
                                text += 'T2: 2014-01-11, 9d';
                                text += 'section S3\n';
                                text += 'T3: 2014-01-02, 9d'
                            }
                            controller[0].insertText('\n```\n' + text + '\n```\n', sel.start, sel.end);
                            controller[0].setFocus(sel.start + text.length + 10, sel.start + text.length + 10);
                            break;
                    }
                };

                //设置甘特图
                controller[0].initGantt();
                //设置markdown
                vm.renderer = controller[0].initMarked();

                //preview
                vm.togglePreview = function () {
                    vm.isPreview = !vm.isPreview;
                    if (vm.isPreview === true) {
                        $timeout(function () {
                            controller[0].previewHTML();
                        }, 50);
                    }
                }
                //full screen
                vm.toggleFullScreen = function () {
                    vm.isFullscreen = !vm.isFullscreen;
                    if (vm.isPreview === true) {
                        vm.togglePreview();
                    }
                    controller[0].setFullScreen(vm.isFullscreen, vm.editor);
                }
                //插入表情
                vm.insertEmoji = function () {
                    vm.emojiValue = vm.emojiValue.trim();

                    if (!/^:/.test(vm.emojiValue)) {
                        vm.emojiValue = ":" + vm.emojiValue;
                    }
                    if (!/:$/.test(vm.emojiValue)) {
                        vm.emojiValue = vm.emojiValue + ':';
                    }
                    var sel = controller[0].getSelection();
                    controller[0].insertText(vm.emojiValue, sel.start, sel.end);
                    vm.editor.focus();
                    //controller[0].setFocus(sel.start+vm.emojiValue.length,sel.start+vm.emojiValue.length);
                    vm.emojiValue = '';
                }
                //插入图标
                vm.insertFa = function () {
                    vm.faValue = vm.faValue.trim();
                    if (vm.faValue.length > 0) {
                        var sel = controller[0].getSelection();
                        var _str = "<i class='fa fa-" + vm.faValue + "'></i>";
                        controller[0].insertText(_str, sel.start, sel.end);
                        vm.editor.focus();
                        //controller[0].setFocus(sel.start+_str.length,sel.start+_str.length);
                        vm.faValue = '';
                    }
                }

                //vm.keyUpFn = _.debounce(function(event){
                /////#(t|task|T|Task|TASK)+(:)+(\S+)$/
                //    if(!vm.editor){
                //        return;
                //    }
                //    var __value = vm.editor.value;
                //    if(wtEditorConfig.quickSearch && wtEditorConfig.quickSearch.regs){
                //        if(event.keyCode === 38 || event.keyCode === 40){
                //            return;
                //        }
                //        _.forEach(wtEditorConfig.quickSearch.regs,function(n){
                //            (function(tag,_value,_editor,_quickSearch,_controller){
                //                var cap = n.reg.exec(_value);
                //                if(cap){
                //                    var _obj = _.find(_quickSearch.options,{"action":n.action});
                //                    if(_obj){
                //                        _obj.controller(_controller,{
                //                            target:_editor
                //                        },cap);
                //                    }else{
                //                        if(_quickSearch.noMathAction){
                //                            _quickSearch.noMathAction(_controller,{
                //                                target:_editor
                //                            });
                //                        }
                //                    }
                //                }else{
                //                    if(_quickSearch.noMathAction){
                //                        _quickSearch.noMathAction(_controller,{
                //                            target:_editor
                //                        });
                //                    }
                //                }
                //            })(n,__value,vm.editor,wtEditorConfig.quickSearch,controller[0]);
                //        });
                //    }
                //
                //
                //    if (wtEditorConfig.onChange) {
                //        wtEditorConfig.onChange(__value);
                //    }
                //    if (vm.isPreview === true) {
                //        $timeout(function () {
                //            controller[0].previewHTML();
                //        }, 128);
                //    }
                //
                //},300,{
                //    trailing:true
                //});
                //监控modal变化
                scope.$watch('value', function (newValue, oldValue) {
                    if(!vm.editor || !newValue){
                        return;
                    }
                    var __value = vm.editor.value;
                    if (wtEditorConfig.onChange) {
                        wtEditorConfig.onChange(__value);
                    }
                    if (vm.isPreview === true) {
                        $timeout(function () {
                            controller[0].previewHTML();
                        }, 128);
                    }
                });

                scope.$watch('config.autofocus', function (newValue, oldValue) {
                    if(newValue){
                        vm.editor.focus();
                    }
                });

                //初始化完调用显示函数
                if (wtEditorConfig.onShow) {
                    wtEditorConfig.onShow();
                }


                //设置header bg
                vm.setHeaderLi = function (id) {
                    vm.header_action = !vm.header_action;
                }


                vm.setTableMemu = function (x, y) {
                    vm.tableActiveX = x
                    vm.tableActiveY = y == 0 ? 1 : y
                }

                vm.insertTable = function () {
                    var cols = vm.tableActiveY;
                    var rows = vm.tableActiveX + 1;
                    var _header = controller[0].getLocaleText('col');
                    var _header_hr = "---";
                    var _row = controller[0].getLocaleText('row');

                    for (var i = 0; i < cols; i++) {
                        _header += "| "+controller[0].getLocaleText('col')+" ";
                        _header_hr += "| --- ";
                        _row += "| "+controller[0].getLocaleText('row')+" ";
                    }
                    var _str = "";
                    for (var i = 0; i < rows; i++) {
                        _str += _row + "\n";
                    }

                    var sample = _header + "\n" + _header_hr + "\n" + _str;
                    var sel = controller[0].getSelection();
                    if (sel.text.length > 0) {
                        controller[0].clearSelection();
                        sel = controller[0].getSelection();
                    }
                    if (controller[0].isRowFirst(sel.start)) {
                        controller[0].insertText('\n' + sample + '\n\n', sel.start, sel.end);
                        controller[0].setFocus(sel.start + sample.length + 2, sel.start + sample.length + 2);
                    } else {
                        controller[0].insertText('\n\n' + sample + '\n\n', sel.start, sel.end);
                        controller[0].setFocus(sel.start + sample.length + 4, sel.start + sample.length + 4);
                    }

                    vm.table_action = false;

                }

                //$('#wtEditorObj').bind('scroll', function (e) {
                //    controller[0].setPriviewScroll()
                //});
                if(_.find(vm.toolbars,{id:0}) || _.find(vm.toolbars,{id:20})) {
                    $(document).click(function (ev) {
                        var _obj = $(ev.target);
                        scope.$apply(function () {
                            if (!_obj.hasClass('fa-header') && _obj.attr('flag') != 'h') {
                                vm.header_action = false;
                            }
                            if (!_obj.hasClass('fa-table') && _obj.attr('flag') != 'table') {
                                vm.table_action = false;
                            }


                        });
                    });
                }
                $(window).on('resize', _.throttle(function () {
                    $timeout(function () {
                        vm.editorHeight.height = ($(element).find('.wt-editor-container-code').height()) + 'px';
                    }, 50);
                }, 150));

                $(vm.editor).on("paste", function (e) {
                    e.stopPropagation();
                    var $files = [];
                    var theClipboardData = e.originalEvent.clipboardData;
                    if (!theClipboardData.items) {
                        return
                    }
                    for (var i = 0; i < theClipboardData.items.length; i++) {
                        if (theClipboardData.items[i].kind == "file" && theClipboardData.items[i].type == "image/png") {
                            // get the blob
                            var imageFile = theClipboardData.items[i].getAsFile();
                            imageFile.name = "[" + $rootScope.global.me.display_name + "] " +"upload"+ " - " + moment().format("YYYY-MM-DD HH:mm ss") + ".png";
                            $files.push(imageFile);
                            e.preventDefault();
                            break;
                        }
                    }
                    if(wtEditorConfig.parseImgUpload){
                        wtEditorConfig.parseImgUpload($files,controller[0]);
                    }
                });
                $timeout(function () {
                    _.forEach(wtEditorConfig.extendButtons, function (obj, key) {
                        var _dom = $(element).find("[name=" + obj.name + "]");
                        if (_dom.size() > 0) {
                            //_dom.html(obj.template);
                            var _scope = _dom.scope().$new();
                            if (obj.controller) {
                                var ctrlLocals = {};
                                ctrlLocals.$scope = _scope;
                                ctrlLocals.editorInstance = controller[0];
                                $controller(obj.controller, ctrlLocals);
                                _dom.html($compile(obj.template)(_scope));

                            }
                        }
                    });
                    vm.editorHeight.height = $(element).find('.wt-editor-container-code').height()+'px';
                    if(!vm.autoHeight){
                        scope.maxHeight = parseInt(vm.editorHeight.height)>30?(parseInt(vm.editorHeight.height)-30):null;
                    }else{
                        scope.maxHeight = wtEditorConfig.maxHeight;
                    }

                    if(wtEditorConfig.quickSearch && wtEditorConfig.quickSearch.bindAtWho){
                        wtEditorConfig.quickSearch.bindAtWho(vm.editor);
                    }

                }, 128);
            }
        };
    }])
    .service("wtEditorService", ["wtEditorConfig",
        function (wtEditorConfig) {
            //初始化甘特图
            this.initGantt = function () {
                if (window.mermaid) {
                    mermaid.parseError = function (err, hash) {
                        mermaid.error = err;
                    };
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
            };

            //初始解析器
            this.initMarked = function () {
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
                        if (window.mermaid && mermaid.parse(code)) {
                            return '<div class="mermaid" data-line="' + line_number + '">' + code + '</div>';
                        } else {
                            if (window.mermaid && mermaid.error) {
                                return '<pre data-line="' + line_number + '">' + mermaid.error + '</pre>';
                            }
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
                    breaks     : true,
                    pedantic   : false,
                    sanitize   : false,
                    smartLists : true,
                    smartypants: true
                });
            };

            this.parseMarked = function (value) {
                return marked(value);
            };

            this.parseMermaid = function () {
                if (window.mermaid) {
                    mermaid.init();
                }
            };
            /**
             * param:json array
             *[{
                    "template":{
                        type:'template',
                        template:'<div>ww</div>',
                        controller:[function(){
                        }]
                    }
                }];
             * **/
            this.setEditorExtendButtons = function (json) {
                if (json) {
                    wtEditorConfig.extendButtons = json;
                }
            };
            this.setEditorQuickSearch = function (json) {
                if (json) {
                    wtEditorConfig.quickSearch = json;
                }
            };
            this.setEditorParseImgUpload = function(fn){
                if(fn){
                    wtEditorConfig.parseImgUpload = fn;
                }
            };
            this.setEditorTypes = function (json) {
                if (json) {
                    angular.extend(wtEditorConfig.typeArray, json);
                }
            };
            this.getEditorType = function(){
                return wtEditorConfig.type;
            };
            this.setLocale = function(_locale){
                if(!_locale){return};
                wtEditorConfig.locale = _locale;
                if(_locale != 'zh-cn'){
                    _.forEach(wtEditorConfig.allButtons, function(value, key) {
                        var _language = wtEditorConfig.language[wtEditorConfig.locale];
                        if(_language){
                            var _valLang = _language[key];
                            if(_valLang){
                                value.title = _valLang;
                            }
                            if(value.text){
                                var _valText = _language[key+'-text'];
                                if(_valText){
                                    value.text = _valText;
                                }
                            }
                        }
                    });
                }
            };
            this.addLocale = function(json){
                if (json) {
                    angular.extend(wtEditorConfig.language, json);
                }
            },
            this.setMaxHeight = function(_max){
                if(!_max){return};
                wtEditorConfig.maxHeight = _max;
            }

        }]);
angular.module("wt.editor.tpl", []).run(["$templateCache", function($templateCache) {$templateCache.put("wt-editor/editor.html","<div class=\"wt-editor {{vm.className}}\" ng-class=\"{true: \'wt-editor-full-screen\', false: \'\'}[vm.isFullscreen]\">\r    <div class=\"wt-editor-toobar\">\r        <div class=\"noselect\">\r            <ul class=\"wtEditorToolBarUl\">\r                <li class=\"wtEditorToolBarli\" ng-repeat=\"item in vm.toolbars track by $index\" name=\"{{item.name}}\" ng-class=\"(item.id == 0 && vm.header_action)?\'active\':\'\'\">\r                    <!--自定义toolbar-->\r                    <i ng-if=\"item.type === \'custom\'\" title=\"{{item.title}}\" class=\"{{item.className}} toolbar-icon\"  ng-click=\"item.action($event,vm)\"></i>\r\r                    <i ng-if=\"item.type === \'headingFns\'\" title=\"{{item.title}}\" class=\"{{item.className}} toolbar-icon\" ng-click=\"vm.setHeaderLi(item.id)\"></i>\r\r                    <div ng-if=\"item.type === \'headingFns\'\" ng-show=\"vm.header_action\" class=\"toolbar-menu\" flag=\"h\">\r                        <ul flag=\"h\">\r                            <li ng-repeat=\"n in vm.headers\" ng-class=\"n.className\" ng-click=\"vm.styleFn(n.name,$event)\" flag=\"h\">\r                                {{n.title}}\r                            </li>\r                        </ul>\r                    </div>\r\r                    <i ng-if=\"item.type === \'styleFn\'\" title=\"{{item.title}}\" class=\"{{item.className}} toolbar-icon\"  ng-click=\"vm.styleFn(item.name,$event)\"></i>\r                    <!--<i ng-if=\"item.type === \'headingFn\'\" title=\"{{item.title}}\" class=\"{{item.className}} toolbar-icon\"  ng-click=\"vm.styleFn(item.name,$event)\">h{{item.level}}</i>-->\r\r                    <i ng-if=\"item.type === \'tableFn\'\" title=\"{{item.title}}\" class=\"{{item.className}} toolbar-icon\"\r                       ng-click=\"vm.styleFn(item.name,$event)\"></i>\r\r\r                    <div ng-if=\"item.type === \'tableFn\'\" ng-show=\"vm.table_action\" class=\"table-menu\" flag=\"table\" ng-mouseleave=\"vm.tableActiveX=1;vm.tableActiveY=1;vm.table_action=false\">\r                        <ul flag=\"table\">\r                            <li flag=\"table\" ng-repeat=\"n in vm.tableMenu\">\r                                <i ng-repeat=\"s in n\" flag=\"table\" ng-click=\"vm.insertTable()\" ng-mouseenter=\"vm.setTableMemu(s[0],s[1])\" ng-mouseleave=\"\" ng-class=\"{true: \'active\', false: \'\'}[s[0]<=vm.tableActiveX && s[1] <= vm.tableActiveY]\"></i>\r                            </li>\r                        </ul>\r                    </div>\r\r\r                    <i ng-if=\"item.type === \'emoji\'\" title=\"{{item.title}}\" class=\"{{item.className}} toolbar-icon\"  data-toggle=\"modal\" data-target=\"#{{item.target}}\"></i>\r\r                    <i ng-if=\"item.type === \'mathFn\'\" title=\"{{item.title}}\" class=\"{{item.className}} toolbar-icon\" ng-click=\"vm.styleFn(item.name,$event)\"></i>\r                    <i ng-if=\"item.type === \'flowchart\'\" title=\"{{item.title}}\" class=\"{{item.className}} toolbar-icon\" ng-click=\"vm.styleFn(item.name,$event)\"></i>\r                    <i ng-if=\"item.type === \'diagram\'\" title=\"{{item.title}}\" class=\"{{item.className}} toolbar-icon\" ng-click=\"vm.styleFn(item.name,$event)\"></i>\r                    <i ng-if=\"item.type === \'gantt\'\" title=\"{{item.title}}\" class=\"{{item.className}} toolbar-icon\" ng-click=\"vm.styleFn(item.name,$event)\"></i>\r                    <i ng-if=\"item.type === \'help\'\" title=\"{{item.title}}\" class=\"{{item.className}} toolbar-icon\" data-toggle=\"modal\" data-target=\"#{{item.target}}\"></i>\r                    <i ng-if=\"item.type === \'preview\'\" title=\"{{item.title}}\" class=\"{{item.className}} toolbar-icon\" ng-click=\"vm.togglePreview()\"></i>\r                    <i ng-if=\"item.type === \'expand\'\" title=\"{{vm.isFullscreen?item.title2:item.title}}\" class=\"{{item.className}} toolbar-icon\" ng-class=\"{true: \'fa-compress\', false: \'fa-expand\'}[vm.isFullscreen]\" ng-click=\"vm.toggleFullScreen()\"></i>\r                    <i ng-if=\"item.type === \'divider\'\" class=\"divider\"></i>\r                </li>\r            </ul>\r        </div>\r    </div>\r    <div class=\"wt-editor-container\" ng-class=\"{true:\'height-auto\',false:\'\'}[vm.autoHeight]\">\r        <div class=\"wt-editor-container-code\">\r            <textarea class=\"wt-editor-textarea\" msd-elastic ng-model=\"value\" max-height=\"maxHeight\"></textarea>\r        </div>\r        <div class=\"wt-editor-container-preview\" ng-style=\"vm.editorHeight\" ng-show=\"vm.isPreview\">\r            <article class=\"markdown-body\" data-open-title=\"Hide Preview\" data-closed-title=\"Show Preview\"></article> <!-- 实时预览 -->\r        </div>\r    </div>\r</div>\r");}]);