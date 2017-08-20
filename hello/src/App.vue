<template>
  <div id="app">
    <router-view :userInfor="userInfor"></router-view>
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
      <div class="tab-item" v-show="this.showManager">
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
        userInforUrl:"http://180932h3r5.51mypc.cn:26110/user.json",
        userInfor:{},
        hasInfor:false,
        showManager:false
      }
    },
    methods:{
      checkLogin:function(){
        if(!this.getSession("token")){
          this.$router.push("/login");
          console.log("token没了");   
        }else{
          this.getUserInfor();
        }
      },
      getSession:function(session){
        if(sessionStorage.getItem(session)){
          return true;
        }
      },
      getUserInfor:function(){
        if(this.hasInfor===false){

        this.$http.get(this.userInforUrl).then(
          function(res){
            this.userInfor=res.data;
            this.hasInfor=true;
            if(this.userInfor.type===2){
            this.showManager=true;
            }
          },function(error){
            console.log(error);
          })
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
    height:6%;
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
    vertical-align: middle;
    color:#fff;
    font-weight: 700;
  }
  #app .tab .tab-item .active{
    color:rgb(0,160,220);
  }


</style>
