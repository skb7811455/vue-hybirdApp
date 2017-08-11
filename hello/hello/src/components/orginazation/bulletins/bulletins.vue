<template>
  <div ref="bulletinWrapper">
   	<ul class="bulletin-box">
   		<li v-for="item in items">
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
  		items:[
  			{
  				text:"今天在教四A201打卡,大家不要迟到,有老师来查人,记得带上作业啊啊啊啊",
  				time:"2017.8.10"
  			},
  			{
  				text:"今天在教四A201打卡",
  				time:"2017.8.10"
  			},
  			{
  				text:"今天在教四A201打卡",
  				time:"2017.8.10"
  			},
  			{
  				text:"今天在教四A201打卡",
  				time:"2017.8.10"
  			},
  			{
  				text:"今天在教四A201打卡",
  				time:"2017.8.10"
  			},
  			{
  				text:"今天在教四A201打卡",
  				time:"2017.8.10"
  			},
  			{
  				text:"今天在教四A201打卡",
  				time:"2017.8.10"
  			},
        {
          text:"今天在教四A201打卡",
          time:"2017.8.10"
        },
        {
          text:"今天在教四A201打卡",
          time:"2017.8.10"
        },
        {
          text:"今天在教四A201打卡",
          time:"2017.8.10"
        },
        {
          text:"今天在教四A201打卡",
          time:"2017.8.10"
        },
        {
          text:"今天在教四A201打卡",
          time:"2017.8.10"
        },
        {
          text:"今天在教四A201打卡",
          time:"2017.8.10"
        },
        {
          text:"今天在教四A201打卡",
          time:"2017.8.10"
        },
        {
          text:"今天在教四A201打卡",
          time:"2017.8.10"
        }
  		]
  	}
  }
  };
</script>

<style>
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