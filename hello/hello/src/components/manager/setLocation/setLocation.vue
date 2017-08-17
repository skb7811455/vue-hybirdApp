<template>
  <div class="setLocation" >
  	<div class="map-wrapper">
      <div class="location-menu">
        <el-dropdown trigger="click" @command="clickhandle">
        
        <img src="./reportmanager.png">

        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>新增打卡点</el-dropdown-item>
        <el-dropdown-item>修改打卡点</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
      </div>
  		<div id="setLocation"></div>
  	</div>
    <div class="confirm-button">
  	<el-button type="success" size="large" v-on:click="setMarkers">成功按钮</el-button>
    </div>
    <div class="mask" @click="closeMask" v-show="showTimepicker">
      <div class="timepicker-wrapper">
      <timepicker></timepicker>
       </div>
    </div>
  </div>
</template>

<script>
  import AMap from "AMap";
  import timepicker from "./timepicker.vue";
  export default {
  	components:{
  		timepicker:timepicker,
  	},
    data(){
      return {
        showTimepicker:false,
        map:{},
        markers:[],
        marker:{
          markerLng:0,
          markerLat:0
        }
      }
    },
  	mounted:function(){
  		this.init();
  	},
  	methods:{
  		init:function(){
        var vm=this;
  			var map = new AMap.Map('setLocation', {
   		    resizeEnable: true,
            zoom:11,
    		center: [117.144403,34.213932]        
			})
        this.map=map;
		AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView','AMap.Geolocation'], function(){
        		map.addControl(new AMap.ToolBar());
        		map.addControl(new AMap.Scale());
        		map.addControl(new AMap.OverView({isOpen:true}));
        		var geolocation=new AMap.Geolocation();
        		map.addControl(geolocation);
    	});
		},
    showTime:function(){
      this.showTimepicker=true;
    },
    closeMask:function(){
      this.showTimepicker=false;
    },
    setMarkers:function(){
        this.addMarker();
        var nums=this.markers.length;
        var lng;
        var lat;
        for(var j=0;j<nums;j++){
             lng=this.markers[j].markerLng;
             lat=this.markers[j].markerLat;
             var marker=new AMap.Marker({
              position: new AMap.LngLat(lng,lat),
              map:this.map
              });
             console.log(this.markers);
            marker.setMap(this.map);
        }
    },
    clickhandle:function(){
      this.map.on('click', this.getMarkPosition);
    },
    getMarkPosition:function(e){
        this.marker.markerLng=e.lnglat.getLng();
        this.marker.markerLat=e.lnglat.getLat();
        console.log(this.marker.markerLng+","+this.marker.markerLat);
    },
    addMarker:function(){      
      this.markers.push(this.marker);
    }
  }
};
</script>

<style>
	.setLocation{
		width: 100%;
		margin: 0px 0;
		height: 450px;
	}
	#setLocation{
		width:100%;
		height:450px;
	}
	.timepicker-wrapper{
		position: absolute;
		top: 200px;
	  margin: 0 10%;
	  width: 80%;
	  padding: 20px 0;
    z-index: 2000;
	  background-color: #fff;
	  border-radius: 20px;
	}
  .location-menu{
    position: absolute;
    z-index:800;
    top: -30px;
    left: 30px;
  }
  .mask{
    position: absolute;
    top: -80px;
    right: 0;
    z-index:900 ;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
  }
  .confirm-button{
    
    right: 100px;
    z-index: 800;
  }
</style>
