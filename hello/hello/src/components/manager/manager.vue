<template>
	<div class="manager">
		<div class="manager-menu"> 

			<div class="orgId">
				<span>组织ID</span>
			</div>
			<div>
			<router-link to="/manager/userManager">
				<i class="el-icon-view"></i>
				
			</router-link>
			<router-link to="/manager/search">
				<i class="el-icon-view"></i>
				
			</router-link>
			<router-link to="/manager/setLocation">
				<i class="el-icon-view"></i>
				
			</router-link>
			<router-link to="/manager/addBulletins">
				<i class="el-icon-date"></i>
				
			</router-link>
			</div>
		</div>
		<div class="manager-wrapper">
			<transition name="fade">
				<router-view ></router-view>
			</transition>
		</div>		
	</div>
</template>

<script>
  
  export default {
  	
  };
</script>

<style>
	.manager{
		position: relative;
		height: 100%;
		width: 100%;
	}
	.manager-menu{
		position: fixed;
		width: 100%;
		top: 0;
		height: 80px;
		text-align: center;
		box-shadow: 0px 2px 8px rgba(0,0,0,0.4);
		background: #D3DCE6;
	}
	.manager-menu a{

		margin: 20px 10px;
	}
	.orgId{
		padding: 20px ;
	}
	.manager-wrapper{
		margin: 80px 0 0 0;
		overflow-y:scroll;
		overflow-x:hidden;
		height: 80%;		
	}

</style>
