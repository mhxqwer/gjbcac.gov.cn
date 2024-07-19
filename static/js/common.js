$(document).ready(function () {
    /**
     * 解决不同版本jQuery冲突
     * 先引入jQuery相应版本的代码
     * 加入 var jQuery = $ = jQuery.noConflict(true);
     */

    // var jQuery = $ = jQuery.noConflict(true);
    /**
     * logo上下滚动 
     */
    jQuery(".logo-area").slide({
        mainCell: ".logo ul",
        autoPage: true,
        effect: "topLoop", //效果类型（其它参数top,即倒带效果）
        autoPlay: true,
        scroll: 1, //滚动个数
        vis: 1, //可视个数
        delayTime: 500, //效果速度
        mouseOverStop: true //鼠标移动到上方是否停止播放
    });

    /**
     * 导航
     */
    jQuery("#nav").slide({
        type: "menu", //效果类型，针对菜单/导航而引入的参数（其它参数slide）
        titCell: ".nLi", //鼠标触发对象
        targetCell: ".sub", //titCell里面包含的要显示/消失的对象
        effect: "fade", //targetCell下拉效果（其它参数slideDown）
        delayTime: 300, //效果时间
        triggerTime: 0, //鼠标延迟触发时间
        returnDefault: true //鼠标移走后返回默认状态，默认频道：首页
    });

    /**
     * 通栏专题 向上滚动
     */
    jQuery(".picScroll-top").slide({
        mainCell: ".picList ul",
        autoPage: true,
        effect: "topLoop",
        interTime: 8000, //延迟时间
        delayTime: 300, //效果时间
        autoPlay: true
    });

    /**
     * 正能量专题-稿件滚动展示-左
     */
    jQuery(".positivity").slide({
        mainCell: ".news-box",
        autoPage: true,
        effect: "leftLoop",
        interTime: 8000, //延迟时间
        autoPlay: true,
    });

    /**
     * 热点专题-滚动展示-左
     */
    /* jQuery(".topic-content").slide({
        mainCell: ".topic-list",
        autoPage: true,
        effect: "leftLoop",
        autoPlay: true,
        vis: 4,
        scroll: 1,
        trigger: "click"
    }); */

    /**
     * 热点专题-滚动展示-上
     */
    jQuery(".topic-content").slide({
        mainCell: ".topic-box",
        autoPage: true,
        effect: "topLoop",
        interTime: 4500,
        autoPlay: true,
    });

    /**
     * 相关链接
     */
    jQuery(".link-area").slide({
        titCell: ".link-title li",
        mainCell: ".links",
        delayTime: 0,
        defaultPlay: false //取消默认执行
    });

    /**
     * 网信政务-网络安全 | 数据治理 栏目切换
     */
    jQuery("#security").slide({
        titCell: ".news-normal-title p",
        mainCell: ".newsList",
        // targetCell: ".more a",
        effect: "fold"
    });

    /**
     * 互动服务-服务功能滚动展示-左
     */
    jQuery(".service-content").slide({
        // titCell: ".hd ul",
        mainCell: ".service-list",
        autoPage: true,
        effect: "leftLoop",
        autoPlay: true,
        vis: 4,
        scroll: 4,
        interTime: 4500,
        delayTime: 1000,
        trigger: "click"
    });

    /**
     * 互动服务-安全报告切换
     */
    jQuery(".security-report").slide({
        titCell: ".news-normal-title p",
        mainCell: ".newsList",
        // targetCell: ".more a",
        effect: "fold"
    });

    /**
     * 互动服务-互联网新闻信息服务
     */
    jQuery(".int-news-info-service").slide({
        titCell: ".news-normal-title p",
        mainCell: ".newsList",
        // targetCell: ".more a",
        effect: "fold"
    });

    /**
     * 互动服务-金融信息服务
     */
    jQuery(".financial-info-service").slide({
        titCell: ".news-normal-title p",
        mainCell: ".newsList",
        // targetCell: ".more a",
        effect: "fold"
    });


});










