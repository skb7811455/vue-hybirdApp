<template>
  <div class="usermanager-wrapper">
    <el-button  @click="showApply">成员审核</el-button>
    <el-button type="primary" @click="showManager">成员管理</el-button>
    <div v-if="showapply" class="user-apply">
    <h2 class="headline"><el-tag type="primary">成员审核</el-tag></h2>
    <ul>
    	<li v-for="(user,index) in users" @touchend="touchEnd(index)">
    		<div class="user-box" @touchstart="startTouch()">  
    			<div class="name-box" @touchmove="touchMove(index)" ref="namebox" style="0px">  			
    			<span class="username">{{user.name}}</span>
    			</div>
    			<div class="hide-box" ref="hidebox" style="right:-195px">
            <div class="pop-text" ref="popbox" @click="deleteList(index)"><span class="text">允许</span></div>
    			  <div class="hide-text" @click="deleteList(index)"><span class="text">删除</span></div>   			
    			</div>
          
    		</div>
    	</li>
	  </ul>
    </div>
    <div v-if="!showapply"class="member-manage">
    <h2 class="headline"><el-tag>成员管理</el-tag></h2>
    <ul>
      <li v-for="(member,index) in members">
        <div class="user-box">  
          <div class="name-box">        
          <span class="username">{{member.name}}</span>
          </div>
          <span class="operation"><i class="el-icon-star-off"></i>提醒</span>
          <span class="operation"><i class="el-icon-warning"></i>警告</span>
          <span class="operation"><i class="el-icon-circle-cross"></i>踢出</span>    
        </div>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
  export default {
  	data(){
  		return{
  			users:[
  			{
  				name:"黄小明"
  			},
  			{
  				name:"红小明"
  			},
        {
          name:"黄小明"
        },
        {
          name:"红小明"
        },
        {
          name:"黄小明"
        },
        {
          name:"黄小明"
        },
        {
          name:"红小明"
        },
        {
          name:"黄小明"
        },
        {
          name:"黄小明"
        },
        {
          name:"红小明"
        },
        {
          name:"黄小明"
        },
        {
          name:"红小明"
        },
        {
          name:"红小明"
        },
        {
          name:"红小明"
        },
        {
          name:"黄小明"
        }
  			],
        members:[
        {
          name:"黄小明"
        },
        {
          name:"红小明"
        },
        {
          name:"黄小明"
        },
        {
          name:"红小明"
        },
        {
          name:"黄小明"
        },
        {
          name:"红小明"
        },
        {
          name:"黄小明"
        },
        {
          name:"红小明"
        },
        {
          name:"黄小明"
        },
        {
          name:"红小明"
        },
        {
          name:"黄小明"
        },
        {
          name:"红小明"
        },
        {
          name:"黄小明"
        },
        {
          name:"红小明"
        },
        {
          name:"黄小明"
        },
        {
          name:"红小明"
        }
        ],
  			startX:0,
  			startY:0,
  			distance:0,
        sign:false,
        isActive:false,
        showapply:true     
  		}
  	},
  	methods:{
  		startTouch:function(){
  			this.startX=event.touches[0].clientX;
  			this.startY=event.touches[0].clientY;
        this.distance=0;
  		},
  		touchMove:function(index){

  			if(this.startX>event.touches[0].clientX||this.sign==true){
  				var distance=this.startX-event.touches[0].clientX;
          this.distance=distance;
          if(distance>88){
            this.$refs.hidebox[index].style.right=0+"px";
            this.$refs.namebox[index].style.left=-88+"px";
            this.$refs.popbox[index].style.width=88+"px";
            this.distance=88;
          }else if(this.distance<0){
            this.$refs.hidebox[index].style.right=-98+"px";
            this.$refs.namebox[index].style.left=0+"px";
            this.$refs.popbox[index].style.width=0+"px";
          }else{
            this.$refs.hidebox[index].style.right=-88+distance+"px";
            this.$refs.namebox[index].style.left=0-distance+"px";
            this.$refs.popbox[index].style.width=distance+"px";
          }
  			}
  		},
      touchEnd:function(index){
        if(this.distance<44){
          this.$refs.hidebox[index].style.right=-98+"px";
          this.$refs.namebox[index].style.left=0+"px";
          this.$refs.popbox[index].style.width=0+"px";
        }else if(this.distance>44){
          this.$refs.hidebox[index].style.right=-10+"px";
          this.$refs.namebox[index].style.left=-88+"px";
          this.$refs.popbox[index].style.width=88+"px";
          this.sign=true;
        }
      },
      back:function(index){
        this.$refs.hidebox[index].style.right=-98+"px";
        this.$refs.namebox[index].style.left=0+"px";
        this.$refs.popbox[index].style.width=0+"px";
      },
      deleteList:function(index){
        this.isActive=true;
        this.users.splice(index,1);
        this.back(index);
      },
      getUserList:function(){

      },
      getApplyList:function(){

      },
      showApply:function(){
        this.showapply=true;
      },
      showManager:function(){
        this.showapply=false;
      }
  	}
  };
</script>

<style scoped>
	.username{
		margin: 20px;
	}
	.hide-box{
		display: inline-block;
    background: #FF4949;	
	}
	.headline{
		line-height: 40px;
		padding-left: 20px;
    font-weight:700px;
	}
	.user-box{
		display: flex;
		height: 50px;
		line-height: 50px;
    z-index: 1200;

	}
	.name-box{	
    position: relative;	
		flex:2 1 0;
    transition:left 0.2s;
    left: 0px;
	}
	.hide-box{
		flex:0 0 200px;
		position: absolute;
		transition:right 0.2s;
    height: 50px;    
	}
	li{		
		border-bottom: 1px solid rgba(0,0,0,0.2);
		margin-left: 10px;
	}
  .pop-text{
    width: 0px;
    height: 50px;
    display: inline-block;
    background-color: #8492A6;
    transition:width 1s;
    text-align: center;
    color: #fff;
  }
  .hide-text{
    display: inline-block;
    width: 88px;
    text-align: center;
    margin: 0px;
    height: 50px;
    background-color: red;
    color: #fff;
  }
  .text{
    position: absolute;

  }
  .deletelist{
    height: 0px;
  }
  .member-manage{
    overflow-y: scroll;
   height: 500px;
  }
  .operation{
    padding: 0 10px;
    font-size: 10px;   
  }

</style>
