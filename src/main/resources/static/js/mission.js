function initTable() {
    $('#table').bootstrapTable({
        url: '/api/public/device/listDevices',
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
            {field: 'device_id', title: '设备ID'},
            {field: 'device_type', title: '设备类型'},
            {field: 'device_no', title: '国标ID'},
            {field: 'name', title: '设备名称'},
            {field: 'note', title: '设备备注'},
            {field: 'lon', title: '设备经度'},
            {field: 'lat', title: '设备纬度'},
            {field: 'position', title: '地址描述'},
            {field: 'org_no', title: '部门编号'},
            {field: 'auth_type', title: '相机权限'}
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
