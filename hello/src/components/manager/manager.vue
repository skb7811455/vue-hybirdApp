<template>
	<div class="manager">
		<div class="manager-menu"> 
			<div class="orgId">
				<span>组织ID</span>
			</div>
			<div>
			<router-link to="/manager/userManager">
				<img src="./manager.png">				
			</router-link>
			<router-link to="/manager/search">
				<img src="./search.png">				
			</router-link>
			<router-link to="/manager/setLocation">
				<img src="./setLocation.png">				
			</router-link>
			<router-link to="/manager/addBulletins">
				<img src="./addBulletins.png">				
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
		height: 10%;
		text-align: center;
		box-shadow: 0px 2px 8px rgba(0,0,0,0.4);
		
	}
	.manager-menu a{

		margin: 1em 1em;
	}
	.orgId{
		padding: 10px ;
		
	}

	.manager-wrapper{
		position: relative;
		margin: 10% 0 0 0;
		overflow-y:scroll;
		overflow-x:hidden;
		height: 80%;		
	}
	@media screen and (max-width: 450px) {
    .manager-wrapper{
       margin: 20% 0 0 0;
    	}
	}


</style>
