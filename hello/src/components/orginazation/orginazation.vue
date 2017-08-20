<template>
	<div class="orginazation">
		<div class="org-wrapper">
			<div class="org-infor">
				<img src="./change.png" @click="changeOrg" class="change-org">
				<div class="img-wrapper">
					<img :src="avatar||normal">
				</div>
				<p class="org-bulletin">{{orgName}}</p>
			</div>
			<div class="org-menu">
			<router-link :to="{path:'/orginaztion/bulletins',query:{orgId:orgId}}">
				<img src="./bulletins.png">
				<span class="icon-text">公告</span>
			</router-link>
			<router-link :to="{path:'/orginaztion/members',query:{orgId:orgId}}">
				<img src="./member.png">
				<span class="icon-text">成员</span>
			</router-link>
			<router-link :to="{path:'/orginaztion/location',query:{orgId:orgId}}">
				<img src="./location.png">
				<span class="icon-text">位置</span>
			</router-link>
			</div>
		</div>
		<div class="bulletin-wrapper">
			<transition name="fade">
				<router-view  v-on:child-say="listenToChild" :orgId="orgId"></router-view>
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
				currentOrg:1,
				fullscreen:false,
				num:1,
				orgName:"",
				avatar:"",
				normal:"http://180932h3r5.51mypc.cn:26110/normal.jpg",
				orgId:43
			}
		},
		created:function(){
			if(this.userInfor.orginazations.length){
			this.num=this.userInfor.orginazations.length;
			this.orgId=this.userInfor.orginazations[0].id;
			}
			this.changeOrg();
		},
		props:["userInfor"],
		methods:{
			showLogin:function(){
				this.loginShow=true;
			},
			closeLogin:function(){
				this.loginShow=false;
			},
      		changeOrg:function(){
      			
        		if(this.currentOrg===this.num){
        			this.currentOrg%=this.num;     		        
        		}
        		this.currentOrg++;
        		var item=this.userInfor["orginazations"][this.currentOrg-1];
        		this.orgId=item.id;
        		this.avatar=item.avatar;
        		this.orgName=item.name;
        		this.$router.push({path:"/orginaztion/bulletins",query:{orgId:this.orgId}});

        		this.fullscreen=true;
        		var vm=this;
        		setTimeout(function(){
          		vm.fullscreen = false;
        		}, 1000);
      		},
      		listenToChild:function(data){
      			
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
		margin: 0 0.5em;
	}
	p{
		margin-bottom: 0.5em;
	}
	.orginazation{
		
		height: 100%;
		width: 100%;
		padding-bottom: 20px;
	}
	.org-wrapper{
		position: relative;
		text-align: center;
		z-index: 2200;
		background: #fff;	
		box-shadow: 0px 2px 8px rgba(0,0,0,0.4);	
		width: 100%;
		height: 30%;
	}
	.org-infor{
		height: 70%;
	}
	.org-menu{
		height: 30%;
		padding: 1em;
	}
	.img-wrapper{
		display: inline-block;
		margin: 1em auto;
		width:5em;
		height: 5em;
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
		height:65%;
		position:relative;
	}
	.buttonControl-wrapper{
		position: fixed;
		z-index: 200;
		right: 1em;
		bottom: 4em;
	}
	.build{
		z-index: 50;
		text-align: center;
		background: #fff;
		blur:10px;
		height: 200px;
		margin: 200px 20% 0 20%;
		border-radius: 10px;
		animation: myfirst 0.2s;
    	-webkit-animation: myfirst 0.2s;
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
		top: 0px;
		background: rgba(7,17,27,0.8);
		blur:10px; 
		z-index: 2800;
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