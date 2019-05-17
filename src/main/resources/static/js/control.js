function initTable() {
    $('#table').bootstrapTable({
        url: '/api/public/control/listControls',
        toolbar: '#toolbar',
        striped: true,                      //是否显示行间隔色
        cache: false,
        sortable: false,                    //是否启用排序
        sortOrder: "asc",                   //排序方式
        pageNumber: 1,                      //初始化加载第一页，默认第一页
        pageSize: 10,                       //每页的记录行数（*）
        pageList: [10, 25, 50, 100, 'all'], //可供选择的每页的行数（*）
        pagination: true,                   //是否显示分页（*）
        showColumns: true,                  //是否显示所有的列
        showRefresh: true,                  //是否显示刷新按钮
        clickToSelect: true,                //是否启用点击选中行
        singleSelect: true,                //设置 true 将禁止多选。
        uniqueId: "id",                     //每一行的唯一标识，一般为主键列
        showToggle: false,                  //是否显示详细视图和列表视图的切换按钮
        locale: 'zh-CN',					//中文支持
        columns: [
            {checkbox: true},
            {field: 'control_id', title: '布控任务ID'},
            {field: 'name', title: '布控任务名称'},
            {field: 'control_type', title: '布控类型'},
            {field: 'note', title: '布控备注'},
            {field: 'begin_time', title: '开始时间'},
            {field: 'end_time', title: '结束时间'}
        ]
    });

    $("#btn_add").click(function () {
        $('#modal_add').modal('show');
    });

    $("#btn_del").click(function () {
        var tobeDeleted = $("#table").bootstrapTable('getAllSelections');
        if (tobeDeleted.length != 1) {
            toastr.warning("请选择一条要删除的数据！");
            return;
        }
        $('#modal_del').modal('show');
    });


}

function addControl() {
    $.ajax({
        type: 'POST',
        url: '/ltCamera/add',
        contentType: "application/json",
        data: JSON.stringify({
            name: $("#name").val(),
            streamIP: $("#streamIP").val(),
            longitude: $("#longitude").val(),
            latitude: $("#latitude").val(),
            comment: $("#comment").val()
        }),
        success: function (data, textStatus) {
            if (textStatus === "success") {
                toastr.info('新增成功！');
                $("#table").bootstrapTable('refresh');
                cleanForm();
            }
        }
    });
}

function delCamera() {
    var tobeDeleted = $("#table").bootstrapTable('getAllSelections');
    var url = "/ltCamera/" + tobeDeleted[0].id;

    $.ajax({
        type: "DELETE",
        url: url,
        success: function (data, textStatus) {
            if (textStatus === "success") {
                toastr.info("删除成功！");
                $("#table").bootstrapTable('refresh');
            }
        }
    });
}

function cleanForm() {
    $("#name").val("");
    $("#streamIP").val("");
    $("#longitude").val("");
    $("#latitude").val("");
    $("#comment").val("");
}