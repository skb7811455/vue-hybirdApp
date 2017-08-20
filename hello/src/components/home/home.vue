<template>
  <div class="home">
  	<div class="img-wrapper" @click="">
    <img src="./button.jpg">
	</div>
  </div>
</template>

<script>
  export default {
  	
  };
</script>

<style>
	.el-icon-circle-check{
		font-size: 180px;
	}
	.home{
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.05);
	}
	.img-wrapper{
		margin:200px auto;
		text-align: center;
	}
	.home img{
		width: 200px;
		border-radius: 50%;	
	}
</style>
