<template>
  <div class="usermanager-wrapper">
    <el-button  @click="showApply">成员审核</el-button>
    <el-button type="primary" @click="showManager">成员管理</el-button>
    <memberApply :showapply="showapply"></memberApply>
    <memberManage :showapply="showapply"></memberManage>
  </div>
</template>

<script>
  import memberApply from "./memberApply/memberApply.vue";
  import memberManage from "./memberManage/memberManage.vue";
  export default {
  	data(){
  		return{
  			showapply:true,

  		}
  	},
    components:{
      "memberApply":memberApply,
      "memberManage":memberManage
    },
  	methods:{
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
