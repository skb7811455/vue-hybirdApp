<template>
  <div>
    <span @click="logout">注销</span>
  </div>
</template>

<script>
  export default {
  	methods:{
  		logout:function(){
  			this.delSession("token");
        console.log(sessionStorage.getItem("token"));
  			this.$router.push("/login");
  		},
  		delSession:function(session){
  			sessionStorage.removeItem(session);
  		}
  	}
  };
</script>

<style>
	
</style>