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
    <div v-for="item in data" :key="item.id" class="store-item">
        <div class="item-left">
            <div class="item-left-i">导游名：{{ item.guideName }}</div>
            <div class="item-left-i">所属导游团：{{ item.guideTeam }}</div>
            <div class="item-left-i">联系方式：{{ item.mobile }}</div>
            <div class="item-left-i">申请时间：{{ item.time }}</div>
        </div>
        <div class="item-right">
            <div class="status" v-if="item.status === 1" style="background-color: #67c23a">审核通过</div>
            <div class="status" v-if="item.status === 0" style="background-color: #E6A23C">暂未审核</div>
            <div class="status" v-if="item.status === 2" style="background-color: #f56c6c">审核拒绝</div>
        </div>
    </div>
</div>
</template>
<style scoped lang="scss">
.store {
    padding-top: 10px;
    padding-bottom: 70px;
}
.store-item {
    margin: 0 12px 12px;
    padding: 12px;
    background-color: #ffffff;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
    border-radius: 10px;
    box-shadow: 2px 2px 5px 1px rgba($color: #000000, $alpha: 0.2);
    .item-left {
        flex-grow: 1;
    }

}

.item-left {
    width: 0;
    flex-grow: 1;
    font-size: 12px;
  }
  .item-left-i {
        font-size: 14px;
        margin-bottom: 8px;
        color: #666666;
        &:last-child {
            margin-bottom: 0;
        }
    }
  .item-left-i.time {
    width: 100%;
    margin-bottom: 0;
  }
  .item-right {
    flex-shrink: 0;
    width: 70px;
    font-size: 12px;
    text-align: center;
  }
  .status {
    padding: 6px 8px;
    color: #fff;
    background-color: aqua;
    border-radius: 6px;
  }
</style>