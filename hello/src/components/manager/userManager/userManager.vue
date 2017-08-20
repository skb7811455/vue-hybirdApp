<template>
  <div class="usermanager-wrapper">
    <el-button  @click="showApply">成员审核</el-button>
    <el-button type="primary" @click="showManager">成员管理</el-button>
    <memberApply :applyList="applyList" :showapply="showapply"></memberApply>
    <memberManage :memberList="memberList" :showapply="showapply"></memberManage>
  </div>
</template>

<script>
  import memberApply from "./memberApply/memberApply.vue";
  import memberManage from "./memberManage/memberManage.vue";
  export default {
  	data(){
  		return{
  			showapply:true,
        applyList:[],
        memberList:[],
        userlistUrl:"http://180932h3r5.51mypc.cn:26110/members.json"
  		}
  	},
    created(){
      this.getUserList();
    },
    components:{
      "memberApply":memberApply,
      "memberManage":memberManage
    },
  	methods:{
      getUserList:function(){
        this.$http.get(this.userlistUrl).then(
        function(res){
          var len=res.data["members"].length;
          for(var i=0;i<len;i++){
            if(res.data["members"][i].type===0){
              this.applyList.push(res.data["members"][i]);
            }else{
              this.memberList.push(res.data["members"][i]);
            }
          }
               
        },function(error){
          console.log(error);
        })
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


</style>
