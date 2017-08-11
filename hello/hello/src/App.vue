<template>
  <div id="app">
    <router-view></router-view>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/home">
        <img src="./home.png">
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/orginazation">
        <img src="./orginazation.png">
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/information">
        <img src="./account.png">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created:function(){
   /*navigator.geolocation.getCurrentPosition(function(position){
    alert('Latitude: '          + position.coords.latitude          + '\n' +
         'Longitude: '         + position.coords.longitude         + '\n' +
         'Altitude: '          + position.coords.altitude          + '\n' +
         'Accuracy: '          + position.coords.accuracy          + '\n' +
         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         'Heading: '           + position.coords.heading           + '\n' +
         'Speed: '             + position.coords.speed             + '\n' +
         'Timestamp: '         + position.timestamp                + '\n');
   }, function(error){
    alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   },{
      maximumAge: 3600000,
      timeout: 30000,
      enableHighAccuracy: true
   });*/
     
     /*
       .user-login{
    position: absolute;
    z-index: 1200;
    width: 100%;
    height: 100%;
  }
  .login-img{
    position: absolute;
    z-index: 1200;
    width: 100%;
    height: 100%;
  }
  <div class="user-login">
    <img src="./login.jpg" class="login-img">
  </div>
     */ 
  }

}
</script>

<style>
  @import '/static/css/style.css';
  @import '/static/css/reset.css';
  body,html{
  line-height:1;
  font-weight:200;
  font-family:"PingFang SC","STHeitiSC-Light","Helvetica-Light";
  }
  
  #app .tab{
    position: fixed;
    left: 0;
    bottom: 0;
    display:flex;
    z-index: 999;
    width:100%;
    height:40px;
    line-height:40px;
    border-top:2px solid rgba(7,17,21,0.1);
    font-weight: 700;
    background-color: rgb(7, 17,27);
  }
  #app .tab .tab-item{
    flex:1;
    text-align:center;
  }
  #app .tab .tab-item a{
    display:block;
    text-decoration:none;
    
    color:#fff;
    font-weight: 700;
  }
  #app .tab .tab-item .active{
    color:rgb(0,160,220);
  }


</style>
