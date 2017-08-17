<template>
  <div>
  	<div id="container" style="width:100%;height:300px"></div>
    <button @click="setMarker">设置打卡</button>
  </div>
</template>

<script>
	import AMap from "AMap"
  export default {
    data(){
      return {
        "map":{},
        "markerLng":0,
        "markerLat":0,
        "lng":0,
        "lat":0,
      }
    },
  	mounted:function(){
  		this.init();
  	},
  	methods:{
            vm.lng=result.position;
            vm.lat=result.position;

    				alert(address+location_type+position);
    			});
    			AMap.event.addListener(geolocation, 'complete', function(){
    				alert("定位成功");
    			});
          map.on('click', vm.getMarkPosition); 
				});
			   
  		},
      getMarkPosition:function(e){      
        this.markerLng=e.lnglat.getLng();
        this.markerLat=e.lnglat.getLat();
        console.log(this.markerLng+","+this.markerLat);
      },
      setMarker:function(){
        var marker=new AMap.Marker({
          position: new AMap.LngLat(this.markerLng,this.markerLat),
          title:"打卡点",
          map:this.map
        });
        marker.setMap(this.map);
      }
  	}
  };
</script>

<style scoped>

</style>