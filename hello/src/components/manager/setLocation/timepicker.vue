<template>
  <div class="timepicker">
  <div class="time-wrapper">
  <span class="time-text">打卡名称</span>
  <input type="text" class="time-input"></input>
  </div>
  <div class="time-wrapper">
  <span class="time-text">打卡日期</span>
  <select class="time-input">
    <OPTION value="星期一">星期一</OPTION>
    <OPTION value="星期二">星期二</OPTION>
    <OPTION value="星期三">星期三</OPTION>
    <OPTION value="星期四">星期四</OPTION>
    <OPTION value="星期五">星期五</OPTION>
    <OPTION value="星期六">星期六</OPTION>
    <OPTION value="星期天">星期天</OPTION>
  </select>
  </div>
  <el-time-select
    placeholder="起始时间"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }" class="time-wrapper">
  </el-time-select>
  <el-time-select
    placeholder="结束时间"
    v-model="endTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
  </el-time-select>
  <el-button type="primary"  class="build-location">创建打卡点</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        startTime: '',
        endTime: '',
        week:""
      };
    }
  }
</script>
<style>
  
  .time-text{
    width: 20%;
  }
  .time-input{
    width: 30%;
    border:1px solid rgba(0,0,0,0.2);
  }
  .time-wrapper{
    width: 100%;
    margin-bottom: 10px;
  }
  .build-location{
    display: block;
    margin: 10px auto;
  }
  
</style>