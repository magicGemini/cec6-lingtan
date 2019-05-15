/**
 * Created by yangzy on 2018/9/5.
 */

var defaultSetting = {
    "sidebarWidth": "184px"
}
toastr.options.positionClass = 'toast-top-center';
toastr.options.showDuration = "300";
toastr.options.hideDuration = "1000";
toastr.options.timeOut = "1000";
toastr.options.extendedTimeOut = "1000";

// 侧边栏打开
function w3_open() {
    $(".glyphicon-menu-hamburger").css("display", "none");
    $("nav").css("marginLeft", defaultSetting.sidebarWidth);
    $("#pageContent").css("marginLeft", defaultSetting.sidebarWidth);

    var sideBar = $("#sidebar");
    sideBar.css("width", defaultSetting.sidebarWidth);
    sideBar.css("display", "block");
}

// 测边栏关闭
function w3_close() {
    $(".glyphicon-menu-hamburger").css("display", "block");
    $("nav").css("marginLeft", "0");
    $("#pageContent").css("marginLeft", "0");
    $("#sidebar").css("display", "none");
}

// 加载侧边栏
function loadMenuBar() {
    var tree = [
        {
            text: "灵探",
            nodes: [
                {index: 1, text: "相机管理", href: "/camera_lt"},
                {index: 2, text: "任务关联", href: "/mission"}
            ]
        },
        {
            text: "洞鉴",
            nodes: [
                {index: 3, text: "相机管理", href: "/camera_dj"},
                {index: 4, text: "布控关联", href: "/mission"}
            ]
        }
    ];

    console.log(tree);
    $("#menuBars").treeview({
        data: tree,
        color: "#FFFFFF",
        backColor: "#000000",
        borderColor: "#000000",
        onhoverColor: "#428bca",
        showBorder: false,
        enableLinks: true
    });
    w3_open();
}
