/**
 * Created by lijian on 2019/1/12.
 */

;$(function () {
    //区域滚动
    mui('.mui-scroll-wrapper').scroll({
        indicators: false //不显示滚动条
    });
    //轮播图
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval:3000//自动轮播周期，若为0则不自动播放，默认为0；
    });


});
