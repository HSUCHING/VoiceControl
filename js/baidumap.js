/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 13-5-28
 * Time: 下午2:40
 * To change this template use File | Settings | File Templates.
 */
var map = new BMap.Map("container");//在container容器中创建一个地图,参数container为div的id属性;
var point = new BMap.Point(121.47004,  31.23136);//定位
map.centerAndZoom(point, 15);                //将point移到浏览器中心，并且地图大小调整为15;
transit = new BMap.TransitRoute(map, {
    renderOptions: {map: map}
});


$("#pop").click(function(){
    var aa=$(this).speedoPopup(
        {
            effectIn: "incerto",        // The effectIn will be used as a fallback for older browsers.
            effectOut: "slideZoom",     // The effectOut will be used as a fallback for older browsers.
            css3Effects: "pageTop"
        });

    console.log(aa);
});

