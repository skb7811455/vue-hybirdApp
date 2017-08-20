<template>
  <div ref="bulletinWrapper" v-bind:bulletins="bulletins" class="bulletins">
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
  	       bulletins:[],
           bulletinUrl:"http://180932h3r5.51mypc.cn:26110/bulletins"
        }
    },
    props:["orgId"],
    created(){
      this.getBulletin();
    },
    watch:{
      "$route":["getBulletin"]
    },
    methods:{
      getBulletin:function(){
        var url=this.bulletinUrl+this.$route.query.orgId+".json";
        this.$http.get(url,{
          params:{
            orgId:this.$route.query.orgId
          }
        }).then(function(res){
          this.bulletins=res.data["items"];
          this.emit(this.$route.query.orgId);         
        },function(err){
            console.log(err);
        });
      },
      emit:function(data){
        this.$emit("child-say",data);
      }
    }

  };
</script>

<style scoped>
  .bulletins{
    height: 100%;
    position: relative;
  }
	.bulletin-box{
    padding: 20px 10px;
    background-color: rgba(0,0,0,0.05);
    min-height: 100%;
	}
	.bulletin-item{
    min-height: 50px;
    margin: 20px 10px;
		padding: 20px 10px;
		background: #fff;
    font-size: 0.8em;
    border-radius: 10px;
    box-shadow: 1px 2px 8px rgba(0,0,0,0.2);
	}
  .bulletin-time{
    display: block;
    float: right;
  }
  .text{
    line-height: 20px;
  }
</style>