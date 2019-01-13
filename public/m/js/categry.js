/**
 * Created by lijian on 2019/1/13.
 */
;$(function ($) {
    getFirstCategoryDate(function (data) {
        console.log(data)
        //渲染一级分类
        $(".lt-cateLeft").find("ul").html(template("firstCategory", data));
        //渲染二级分类
        getSecondCategoryDate({id: data.rows[0].id}, function (data) {
            console.log(data);
            $(".lt-cateRight").find("ul").html(template("secondCategory", data));
        })
    });
    //给相应的以及分类绑定点击事件
    $(".lt-cateLeft").on("click", "ul li", function () {
        $(".lt-cateLeft").find("li").removeClass("now");
        $(this).addClass("now");
        //获取当前分类显示
        getSecondCategoryDate({id:$(this).data("id")}, function (data) {
            $(".lt-cateRight").find("ul").html(template("secondCategory", data));
        })
    })

});
//获取一级分类数据ajax函数
function getFirstCategoryDate(callback) {
    $.ajax({
        type: "get",
        url: "/category/queryTopCategory",
        data: {},
        dataType: "json",
        success: function (data) {
            callback && callback(data);
        }
    });
}
//获取二级分类数据ajax函数
function getSecondCategoryDate(params, callback) {
    $.ajax({
        type: "get",
        url: "/category/querySecondCategory",
        data: params,
        dataType: "json",
        success: function (data) {
            callback && callback(data);
        }
    });
}