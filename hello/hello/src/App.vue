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
        <router-link to="/manager">
        <img src="./reportmanager.png">
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
    data(){
      return {
        
      }
    },
    methods:{
      checkLogin:function(){
        if(!this.getSession("token")){
          this.$router.push("/login");
          console.log("token没了");   
        }

      },
      getSession:function(session){
        if(sessionStorage.getItem(session)){
          return true;
        }
      }
    },
    created:function(){
      this.checkLogin();
    },
    watch:{
      "$route":"checkLogin"
    },
    mouted:function(){
      this.checkLogin();     
    }
}
</script>

<style>
  @import '/static/css/reset.css';
  body,html{
  height: 100%;
  line-height:1;
  font-weight:200;
  font-family:"PingFang SC","STHeitiSC-Light","Helvetica-Light";
  }
  #app{
    position: fixed;
    width: 100%;
    height: 100%;
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
