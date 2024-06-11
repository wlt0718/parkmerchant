<script setup>
import { ref, reactive, computed, watch } from 'vue';
const checkDate = ref('all')
const checkStatus = ref(0)
const statusList = [
    { text: '所有审核', value: 0 },
    { text: '未审核', value: 1 },
    { text: '审核通过', value: 2 },
    { text: '审核拒绝', value: 3 },
]
const dateList = ref([
  { text: '所有时间', value: 'all' },
  { text: '今日', value: 'date' },
  { text: '本周', value: 'week' },
  { text: '本月', value: 'month' },
  { text: `自定义时间`, value: 'custom' },
])
const dateChange = (value) =>{
  if(value === 'custom'){
    canlendarShow.value = true
  }
}
const canlendarShow = ref(false)
const customDate = ref('')
function onConfirm(value){
  canlendarShow.value = false
  const state = value[0].getMonth() + 1 + '月'+value[0].getDate() + '日' 
  const end = value[1].getMonth() + 1 + '月'+value[1].getDate() + '日' 
  customDate.value = state + '-' + end
}
const data = ref([
{
        id: 0,
        guideName: '导游一',
        guideTeam: '靠谱导游团',
        mobile: '132 ****** 02',
        time: '2024年04月26日 12:22:30',
        status: 0,
        isCheck: false 
    },
    {
        id: 1,
        guideName: '导游1',
        guideTeam: '靠谱导游团',
        mobile: '152 ****** 02',
        time: '2024年04月26日 12:22:30',
        status: 0 ,
        isCheck: true 
    },
    {
        id: 2,
        guideName: '导游2',
        guideTeam: '靠谱导游团',
        mobile: '132 ****** 55',
        time: '2024年04月26日 12:22:30',
        status: 1,
        isCheck: false 
    },
    {
        id: 3,
        guideName: '导游3',
        guideTeam: '全国游导游团',
        mobile: '132 ****** 43',
        time: '2024年04月26日 12:22:30',
        status: 1 ,
        isCheck: false 
    },
    {
        id: 4,
        guideName: '导游4',
        guideTeam: '全国游导游团',
        mobile: '162 ****** 02',
        time: '2024年04月26日 12:22:30',
        status: 2 ,
        isCheck: false 
    },
    {
        id: 5,
        guideName: '导游5',
        guideTeam: '全国游导游团',
        mobile: '112 ****** 02',
        time: '2024年04月26日 12:22:30',
        status: 2,
        isCheck: false  
    },
])
</script>
<template>
<van-dropdown-menu>
  <van-dropdown-item v-model="checkStatus" :options="statusList" />
  <van-dropdown-item v-model="checkDate" :options="dateList" @change="dateChange" />
</van-dropdown-menu>
<van-calendar v-model:show="canlendarShow" type="range" @confirm="onConfirm" 
  allow-same-day position="top"
/>
<div class="store">
  <page-hisbody v-for="item in data" :key="item.id">
    <div class="item name">导游名：<span>{{ item.guideName }}</span></div> 
    <div class="item">所属导游团：{{ item.guideTeam }}</div>
    <div class="item">联系方式：{{ item.mobile }}</div>
    <div class="item">申请时间：{{ item.time }}</div>
    <template #right>
      <page-label radius type="success" v-if="item.status === 1">审核通过</page-label>
      <page-label radius type="warning" v-if="item.status === 0">暂未审核</page-label>
      <page-label radius type="danger" v-if="item.status === 2">审核失败</page-label>
    </template>
  </page-hisbody>
</div>
<page-button type="primary" disabled>申请</page-button>
</template>
<style scoped lang="scss">
.store {
  padding-top: 10px;
  padding-bottom: 70px;
}
.item {
  font-size: 12px;
  margin-bottom: 8px;
  color: #666666;
  &.name {
    font-size: 14px;
    span {
      color: #303030;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>