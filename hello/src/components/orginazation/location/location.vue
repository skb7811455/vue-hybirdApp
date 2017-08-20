<template>
  <div v-loading.fullscreen.lock="fullscreen" element-loading-text="正在定位中" class="location">
  	<div id="container" style="width:100%;height:95%"></div>
  </div>
</template>

<script>
	import AMap from "AMap"
  export default {
    data:function(){
      return {
        map:{},
        markers:[],
        lng:0,
        lat:0,
        fullscreen:true,
        markersUrl:"http://180932h3r5.51mypc.cn:26110/markers"
      }
    },
  	mounted:function(){
  		this.init();
  	},

    watch:{
      "$route":["getMarkers"]
    },
    
  	methods:{
  		init:function(){
        var vm=this;
        vm.fullscreen=true;
  			var map = new AMap.Map('container', {
   		    resizeEnable: true,
            zoom:11,
    		center: [117.144403,34.213932]        
			})
        this.map=map;
			AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView','AMap.Geolocation'], function(){
        		map.addControl(new AMap.ToolBar());
        		map.addControl(new AMap.Scale());
        		map.addControl(new AMap.OverView({isOpen:true}));
        		var geolocation=new AMap.Geolocation(
            {
              enableHighAccuracy:true
            }
            );
        		map.addControl(geolocation);
    			geolocation.getCurrentPosition(function(status,result){
    				var address="定位地址:"+result.formattedAddress;
    				var location_type=" 定位方式:"+result.location_type;
    				var position=" 位置信息:"+result.position;

            vm.lng=result.position;
            vm.lat=result.position;
            vm.fullscreen=false;
    				alert(address+location_type+position);
    			});
    			AMap.event.addListener(geolocation, 'complete', function(){
    				
    			});
          //map.on('click', vm.getMarkPosition); 
				});
        this.getMarkers();

  		},
      setMarker:function(){
        var nums=this.markers.length;
        var lng;
        var lat;
        for(var j=0;j<nums;j++){
             lng=this.markers[j].markerLng;
             lat=this.markers[j].markerLat;
             var marker=new AMap.Marker({
              position: new AMap.LngLat(lng,lat),
              title:"打卡点",
              map:this.map
              });
            marker.setMap(this.map);
        }
      },
      getMarkers:function(){
        var vm=this;
        if(this.$route.query.orgId){
        var markersUrl=this.markersUrl+this.$route.query.orgId+".json";
        this.$http.get(markersUrl,{
          params:{
            orgId:this.$route.query.orgId
          }
        }).then(function(res){
          vm.markers=res.data.markers;
        
          vm.setMarker();  
          vm.fullscreen=false;     
        },function(err){
            console.log(err);
        });
      }
    }
  
  }
};

</script>

<style scoped>
  .location{
    position: relative;
    height: 100%;
    z-index: 2000;
  }

</style>