<template>
  <div>
  	<div id="container" style="width:100%;height:300px"></div>
  </div>
</template>

<script>
	import AMap from "AMap"
  export default {
    data(){
      return {
        "map":{},
        "markers":[],
        "lng":0,
        "lat":0,
      }
    },
  	mounted:function(){
  		this.init();
  	},
    watch:function(){
      "$route":["getMarkers"]
    },
  	methods:{
  		init:function(){
        var vm=this;
  			var map = new AMap.Map('container', {
   		    resizeEnable: true,
            zoom:11,
    		center: [117.144403,34.213932]        
			});
        this.map=map;
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

            vm.lng=result.position;
            vm.lat=result.position;

    				alert(address+location_type+position);
    			});
    			AMap.event.addListener(geolocation, 'complete', function(){
    				alert("定位成功");
    			});
          //map.on('click', vm.getMarkPosition); 
				});
			   
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
        this.$http.get("http://localhost:3000/api.json",{
          params:{
            currentOrg:this.$route.query.currentOrg
          }
        }).then(function(res){
          var num=res.data.orginazations.length;
          
          for(var i=0;i<num;i++){
            if(this.$route.query.currentOrg==res.data.orginazations[i].id){
              this.markers=res.data["orginazations"][i].markers;
            }
          }          
          console.log(this.markers);
        },function(err){
            console.log(err);
        });
      }
  
  }
};

</script>

<style scoped>

</style>