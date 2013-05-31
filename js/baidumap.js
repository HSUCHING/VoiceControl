/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 13-5-28
 * Time: 下午2:40
 * To change this template use File | Settings | File Templates.
 */
var map = new BMap.Map("container");//在container容器中创建一个地图,参数container为div的id属性;
var point = new BMap.Point(121.47004,  31.23136);//定位
var zoom_nav=new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
map.centerAndZoom(point, 15);                //将point移到浏览器中心，并且地图大小调整为15;
map.addControl(zoom_nav);
map.addControl(new BMap.MapTypeControl());
transit = new BMap.TransitRoute(map, {
    renderOptions: {map: map}
});

local = new BMap.LocalSearch(map, {
    renderOptions:{map: map}
});


//popout.children()[1].children[0].innerHTML="hello";
//$("#pop").click(function(){
//    $(this).speedoPopup(
//        {
//            effectIn: "incerto",        // The effectIn will be used as a fallback for older browsers.
//            effectOut: "slideZoom",     // The effectOut will be used as a fallback for older browsers.
//            css3Effects: "pageTop"
//        });
//});



