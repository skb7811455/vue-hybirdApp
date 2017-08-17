<template>
    <div v-if="showapply" class="user-apply">
    <h2 class="headline"><el-tag type="primary">成员审核</el-tag></h2>
    <ul>
      <li v-for="(user,index) in users" @touchend="touchEnd(index)">
        <div class="user-box" @touchstart="startTouch()">  
          <div class="name-box" @touchmove="touchMove(index)" ref="namebox">        
          <span class="username">{{user.name}}</span>
          </div>
          <div class="hide-box" ref="hidebox" style="right:-195px">
            <div class="pop-text remind" ref="popbox" @click="deleteList(index)"><span class="text">允许</span></div>
            <div class="hide-text" @click="deleteList(index)"><span class="text">删除</span></div>        
          </div>
          
        </div>
      </li>
    </ul>
    </div>
</template>

<script>
  export default {
    props:["showapply"]
    ,
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
  		}
  	},
  	methods:{
  		startTouch:function(){
  			this.startX=event.touches[0].clientX;
  			this.startY=event.touches[0].clientY;
        this.distance=0;
  		},
  		touchMove:function(index){

  			if(this.startX>event.touches[0].clientX){
  				var distance=this.startX-event.touches[0].clientX;
          this.distance=distance;
          if(distance>88){
            this.$refs.hidebox[index].style.right=0+"px";
            this.$refs.namebox[index].style.left=-88+"px";
            this.$refs.popbox[index].style.width=88+"px";
            if(!this.showapply){
              this.$refs.popbox2[index].style.width=88+"px";
            }
            
            this.distance=88;
          }else if(this.distance<0){
            this.$refs.hidebox[index].style.right=-98+"px";
            this.$refs.namebox[index].style.left=0+"px";
            this.$refs.popbox[index].style.width=0+"px";
            if(!this.showapply){
              this.$refs.popbox2[index].style.width=0+"px";
            }
            
          }else{
            this.$refs.hidebox[index].style.right=-88+distance+"px";
            this.$refs.namebox[index].style.left=0-distance+"px";
            this.$refs.popbox[index].style.width=distance+"px";
            if(!this.showapply){
              this.$refs.popbox2[index].style.width=distance+"px";
            }
            
          }
  			}
  		},
      touchEnd:function(index){
        if(this.distance<44){
          this.$refs.hidebox[index].style.right=-98+"px";
          this.$refs.namebox[index].style.left=0+"px";
          this.$refs.popbox[index].style.width=0+"px";
          if(!this.showapply){
           this.$refs.popbox2[index].style.width=0+"px"; 
          }
          
        }else if(this.distance>44){
          this.$refs.hidebox[index].style.right=-10+"px";
          this.$refs.namebox[index].style.left=-88+"px";
          this.$refs.popbox[index].style.width=88+"px";
          if(!this.showapply){
            this.$refs.popbox2[index].style.width=88+"px";
          }
          
       
        }
      },
      back:function(index){
        this.$refs.hidebox[index].style.right=-198+"px";
        this.$refs.namebox[index].style.left=0+"px";
        this.$refs.popbox[index].style.width=0+"px";
        if(!this.showapply){
          this.$refs.popbox2[index].style.width=0+"px";
        }

      },
      deleteList:function(index){
        this.isActive=true;
        this.users.splice(index,1);
        this.back(index);
      }
  	}
};
</script>
<style scoped>
  .username{
    margin: 20px;
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
    top:0px; 
    display: inline-block;
    background: red;

  }
  li{   
    position: relative;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    margin-left: 10px;
  }
  .pop-text{
    position: relative;
    width: 0px;
    height: 50px;
    display: inline-block;
    transition:width 1s;
    text-align: center;
    color: #fff;
  }
  .warn{
    background: #F7BA2A;
  }
  .remind{
    background: #99A9BF;
  }
  .hide-text{
    position: relative;
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
    left: 30%;
  }
  .deletelist{
    height: 0px;
  }
  
  .operation{
    padding: 0 10px;
    font-size: 10px;   
  }
</style>
