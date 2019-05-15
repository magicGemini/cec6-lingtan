function initTable() {
    $('#table').bootstrapTable({
        // url: '/userlist',
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
        singleSelect: false,                //设置 true 将禁止多选。
        uniqueId: "id",                     //每一行的唯一标识，一般为主键列
        showToggle: false,                  //是否显示详细视图和列表视图的切换按钮
        locale: 'zh-CN',					//中文支持
        columns: [
            {checkbox: true},
            {field: 'id', title: 'ID', visible: false},
            {field: 'name', title: '相机名称'},
            {field: 'streamIP', title: '视频流地址'},
            {field: 'longitude', title: '相机经度'},
            {field: 'latitude', title: '相机纬度'},
            {field: 'comment', title: '备注'}
        ],
        data:[
            {"id":1,"name":"相机-1","streamIP":"192.168.3.100","longitude":"33.58978","latitude":"45.21685","comment":"test"},
            {"id":2,"name":"相机-2","streamIP":"192.168.3.101","longitude":"33.58978","latitude":"45.21685","comment":"test"},
            {"id":3,"name":"相机-3","streamIP":"192.168.3.102","longitude":"33.58978","latitude":"45.21685","comment":"test"},
            {"id":4,"name":"相机-4","streamIP":"192.168.3.103","longitude":"33.58978","latitude":"45.21685","comment":"test"},
            {"id":5,"name":"相机-5","streamIP":"192.168.3.104","longitude":"33.58978","latitude":"45.21685","comment":"test"},
            {"id":6,"name":"相机-6","streamIP":"192.168.3.105","longitude":"33.58978","latitude":"45.21685","comment":"test"},
            {"id":7,"name":"相机-7","streamIP":"192.168.3.106","longitude":"33.58978","latitude":"45.21685","comment":"test"}
        ]
    });

    $("#btn_add").click(function () {
        $('#modal_add').modal('show');
    });

}