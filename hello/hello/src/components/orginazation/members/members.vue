<template>
  <div ref="bulletinWrapper" v-bind:members="members">
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
           members:{}
        }
    },
    created(){
      this.getBulletin();
    },
    watch:{
      "$route":["getBulletin"]
    },
    methods:{
      getBulletin:function(){
        this.$http.get("http://localhost:3000/api.json",{
          params:{
            currentOrg:this.$route.query.currentOrg
          }
        }).then(function(res){
          var num=res.data.orginazations.length;
          
          for(var i=0;i<num;i++){
            if(this.$route.query.currentOrg==res.data.orginazations[i].id){
              this.members=res.data["orginazations"][i].members;
              console.log(1);
            }
          }
          
          console.log(this.members);
        },function(err){
            console.log(err);
        });
      }
    }

  };
</script>

<style scoped>
  .bulletin-box{
    margin: 0 20px;

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


