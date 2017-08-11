<template>
  <div>
  	<div id="container" style="width:100%;height:300px"></div>   
  </div>
</template>

<script>
	import AMap from "AMap"
  export default {
  	mounted:function(){
  		this.init();
  	},
  	methods:{
  		init:function(){
  			var map = new AMap.Map('container', {
   		    resizeEnable: true,
            zoom:11,
    		center: [117.144403,34.213932]        
			});
			AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView','AMap.Geolocation'], function(){
        		map.addControl(new AMap.ToolBar());

        		map.addControl(new AMap.Scale());

        		map.addControl(new AMap.OverView({isOpen:true}));

        		var geolocation=new AMap.Geolocation();
        		 map.addControl(geolocation);
    			geolocation.getCurrentPosition(function(status,result){
    				var address="定位地址:"+result.formattedAddress;
    				var location_type=" 定位方式:"+result.location_type;
    				var position=" 位置信息:"+result.position;
    				alert(address+location_type+position);
    			});
    			AMap.event.addListener(geolocation, 'complete', function(){
    				alert("定位成功");
    			});
				});
			
  		}
  	}
  };
</script>

<style>

</style>