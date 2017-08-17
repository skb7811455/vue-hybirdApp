<template>
	<div class="orginazation">
		<div class="org-wrapper">
			<img src="./change.png" v-on:click="changeOrg" class="change-org">      	
			<div class="img-wrapper">
				<img src="./user1.jpg">
			</div>
			<p class="org-bulletin">15级计科三班</p>
			<div>
			<router-link :to="{path:'/orginaztion/bulletins',query:{currentOrg:currentOrg}}">
				<img src="./bulletins.png">
				<span class="icon-text">公告</span>
			</router-link>
			<router-link :to="{path:'/orginaztion/members',query:{currentOrg:currentOrg}}">
				<img src="./members.png">
				<span class="icon-text">成员</span>
			</router-link>
			<router-link :to="{path:'/orginaztion/location',query:{currentOrg:currentOrg}}">
				<img src="./location.png">
				<span class="icon-text">位置</span>
			</router-link>
			</div>
		</div>
		<div class="bulletin-wrapper">
			<transition name="fade">
				<router-view v-bind:orgInfor="orgInfor"></router-view>
			</transition>
		</div>
		<div class="build-wrapper" v-show="loginShow" v-on:click="closeLogin">
		<div class="build" v-on:click.stop>
			<form method="post" id="build">
				<span>组织名</span>
				<input type="text" name="org-name" class="org-name"></input><br>
				<span>真实姓名</span>
				<input type="text" name="manager" class="manager"></input>
				<input type="submit" class="submit" value="新建组织">
			</form>
		</div>
		</div>
		<div class="buttonControl-wrapper"   id="add-button">
			<img src="./add.png" v-on:click="showLogin" >
		</div>		
	</div>
</template>

<script>
	

	export default {
		
		data() {
			return {
				loginShow:false,
				currentOrg:"1",
				num:3,
				fullscreen:false,
				orgInfor:222
				}  
		},
		methods:{
			showLogin:function(){
				this.loginShow=true;
			},
			closeLogin:function(){
				this.loginShow=false;
			},
      		changeOrg:function(){
        		if(this.currentOrg===3){
        			this.currentOrg%=3;
        		}
        		this.currentOrg++;       		
        		this.$router.push({path:"/orginaztion/bulletins",query:{ currentOrg: this.currentOrg}});
        		this.fullscreen=true;
        		var vm=this;
        		setTimeout(function(){
          		vm.fullscreen = false;
        		}, 1000);
      		}
		}
	};
</script>

<style scoped>
	body{
		overflow: hidden;
	}
	a{
		text-decoration: none;
	}
	.orginazation{
		display: flex;
		display: -webkit-flex;
		flex-direction:column;
		height: 100%;
		width: 100%;
		padding-bottom: 20px;
	}
	.org-wrapper{
		position: relative;
		text-align: center;
		padding-bottom: 20px;
		background: #fff;
		box-shadow: 0px 2px 8px rgba(0,0,0,0.4);
		width: 100%;
	}
	.img-wrapper{
		display: inline-block;
		margin: 20px auto;
		width:100px;
		height: 100px;
		border-radius: 50%;
		background: #fff;
	}
	.img-wrapper img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.bulletin-wrapper{
		background: #fff;
		overflow-y: scroll;
		height: 450px;
	}
	.buttonControl-wrapper{
		position: fixed;
		z-index: 200;
		right: 20px;
		bottom: 60px;
	}
	.build{
		z-index: 50;
		text-align: center;
		background: #fff;
		blur:10px;
		bottom: 200px;
		height: 200px;
		margin: 200px 20% 0 20%;
		border-radius: 10px;
		animation: myfirst 0.5s;
    	-webkit-animation: myfirst 0.5s;
	}
	@keyframes myfirst
	{
	10% {opacity: 0.1; margin-top: 20px;}
	30%   {opacity: 0.2; margin-top: 60px;}
	50%   {opacity: 0.2; margin-top: 100px;}
	70% {opacity: 0.5; margin-top: 140px;}
	100%{opacity: 1;  margin-top: 200px;}
	}
	@-webkit-keyframes myfirst /* Safari 与 Chrome */
	{
	10% {opacity: 0.1; margin-top: 20px;}
	30%   {opacity: 0.2; margin-top: 60px;}
	50%   {opacity: 0.3; margin-top: 100px;}
	70% {opacity: 0.5; margin-top: 140px;}
	100%{opacity: 1;  margin-top: 200px;}
	}
	.build-wrapper{
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(7,17,27,0.8);
		blur:10px; 
	}
	.org-name{
		margin: 60px auto 5px auto;
		width: 50%;
		line-height:20px;
		border: 1px solid rgba(7,17,27,0.2);
	}
	.submit{
		margin: 20px auto;
		display: block;
		width: 80%;
		border-radius: 5px;
		line-height:30px;
		background-color: rgb(0,160,220);
		color: rgba(255,255,255,0.8);
		font-weight: 500;
	}
	.manager{
		width: 50%;
		margin:20px auto 5px auto;
		line-height:20px;
		border: 1px solid rgba(7,17,27,0.2);
	}
	.icon-add_circle{
		color: rgb(0,160,220);
	}
	.icon-location{
		color:rgb(240,20,20);
	}
	.icon-text{
		font-size: 15px;
		width: 15px;
		font-weight:600;
	}
	.fade-enter-active, .fade-leave-active {
  		transition: opacity .5s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  		opacity: 0
	}
	.change-org{
		position: absolute;
		top: 20px;
		right: 20px;

	}
</style>