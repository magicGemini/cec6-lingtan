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
    // $.get("/menu/menuBars", function (data) {

    // });

    var tree = [
        {id: 1, text: "菜单1"},
        {id: 2, text: "菜单2"},
        {id: 3, text: "菜单3"},
        {id: 4, text: "菜单4"},
        {id: 5, text: "菜单5"},
        {id: 6, text: "菜单6"}
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
