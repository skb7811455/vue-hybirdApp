<template>
  <div ref="bulletinWrapper" v-bind:members="members" class="members">
    <ul class="bulletin-box">
      <li v-for="item in members">
        <div class="bulletin-item">
          <div class="bulletin-content">
            <p class="text">{{item.name}}</p>
          </div>
          <div class="bulletin-infor">
            <span class="bulletin-time">{{item.tel}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data:function(){

     return{
           members:[],
           membersUrl:"http://180932h3r5.51mypc.cn:26110/members"+this.$route.query.orgId+".json"
        }
    },
    created(){
      this.getMembers();
    },
    watch:{
      "$route":["getMembers"]
    },
    methods:{
      getMembers:function(){
        this.$http.get(this.membersUrl,{
          params:{
            orgId:this.$route.query.orgId
          }
        }).then(function(res){
          var item;
          for(var i=0;i<res.data.members.length;i++){
            item=res.data.members[i];
            if(item.type!==0){
              this.members.push(item);
            }
          }
        },function(err){
            console.log(err);
        });
      }
    }

  };
</script>

<style scoped>
  .members{
    position: relative;
    height: 100%;
  }
  .bulletin-box{
    margin: 0 20px;
    height: 100%;
  }
  .bulletin-item{
    padding: 20px 10px;
    border-bottom: 1px solid rgb(217,221,225);
    font-size: 0.8em;
  }
  .bulletin-time{
    display: block;
    float: right;
  }
  .text{
    line-height: 20px;
  }
</style>


