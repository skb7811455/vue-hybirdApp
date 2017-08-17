<template>
  <div ref="bulletinWrapper" v-bind:bulletins="bulletins">
   	<ul class="bulletin-box">
   		<li v-for="item in bulletins">
   			<div class="bulletin-item">
   				<div class="bulletin-content">
   					<p class="text">{{item.text}}</p>
   				</div>
   				<div class="bulletin-infor">
   					<span class="bulletin-time">{{item.time}}</span>
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
  	       bulletins:[]
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
              this.bulletins=res.data["orginazations"][i].items;
              console.log(1);
            }
          }
          
          console.log(this.orgInfor);
        },function(err){
            console.log(err);
        });
      }
    }

  };
</script>

<style scoped>
	.bulletin-box{
    padding: 20px 20px;
    background-color: rgba(0,0,0,0.05);
	}
	.bulletin-item{
    margin: 20px 10px;
		padding: 20px 10px;
		background: #fff;
    font-size: 0.8em;
    border-radius: 20px;
    box-shadow: 0 5px 5px rgba(0,0,0,0.05);
	}
  .bulletin-time{
    display: block;
    float: right;
  }
  .text{
    line-height: 20px;
  }
</style>