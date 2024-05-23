<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { userPlayListStore } from '../../stores/playlist.js'
import { showDialog } from 'vant';
const checkProject = ref('100000')
const checkGuide = ref('1')
const checkDate = ref('all')
const checkStatus = ref(0)
const statusList = [
    { text: '所有结算', value: 0 },
    { text: '未结算', value: 1 },
    { text: '结算成功', value: 2 },
    { text: '结算失败', value: 3 },
]
const projectList = [
    { text: '所有项目', value: '100000' },
    { text: '游艇', value: '100001' },
    { text: '恐龙乐园', value: '100002' },
    { text: '天地双雄', value: '100003' },
    { text: '摩天轮', value: '100004' },
]
const guideList = [
    { text: '所有导游', value: '1' },
    { text: '导游一', value: '2' },
    { text: '导游二', value: '3' },
    { text: '导游三', value: '4' },
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
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 1,
        isCheck: false,
    },
    {
        id: 1,
        guideName: '导游一',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 1,
        isCheck: false,
    },
    {
        id: 2,
        guideName: '导游一',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 1,
        isCheck: false,
    },
    {
        id: 3,
        guideName: '导游一',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 2,
        isCheck: false,
    },
    {
        id: 4,
        guideName: '导游一',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 0,
        isCheck: false,
    },
    {
        id: 5,
        guideName: '导游一',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 2,
        isCheck: false,
    },
    {
        id: 6,
        guideName: '导游一',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 0,
        isCheck: false,
    },
])
</script>
<template>
<van-dropdown-menu>
  <van-dropdown-item v-model="checkProject" :options="projectList" />
  <van-dropdown-item v-model="checkGuide" :options="guideList" />
  <van-dropdown-item v-model="checkStatus" :options="statusList" />
  <van-dropdown-item v-model="checkDate" :options="dateList" @change="dateChange" />
</van-dropdown-menu>
<van-calendar v-model:show="canlendarShow" type="range" @confirm="onConfirm" 
  allow-same-day position="top"
/>
<div class="store">
    <div v-for="item in data" :key="item.id" class="store-item">
        <div class="item-left">
            <div class="item-left-i">
                <span class="card-left">导游：</span>
                <span class="card-right">{{ item.guideName }}</span>
            </div>
            <div class="item-left-i">
                <span class="card-left">项目：</span>
                <span class="card-right">{{ item.project }}</span>
            </div>
            <div class="item-left-i">
                <span class="card-left">游玩人数：</span>
                <span class="card-right">{{ item.num }} 人</span>
            </div>
            <div class="item-left-i">
                <span class="card-left">项目费用：</span>
                <span class="card-right">{{ item.amount }} 元/人</span>
            </div>
            <div class="item-left-i">
                <span class="card-left">佣金比例：</span>
                <span class="card-right">{{ item.proportion }} %</span>
            </div>
            <div class="item-left-i">
                <span class="card-left">佣金：</span>
                <span class="card-right">{{ item.income }} 元</span>
            </div>
            <div class="item-left-i time">
                <span class="card-left">时间：</span>
                <span class="card-right">{{ item.time }}</span>
            </div>
        </div>
        <div class="item-right">
            <div class="status" v-if="item.status === 1" style="background-color: #67c23a">结算成功</div>
            <div class="status" v-if="item.status === 0" style="background-color: #E6A23C">暂未结算</div>
            <div class="status" v-if="item.status === 2" style="background-color: #f56c6c">结算失败</div>
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
    .checkbox {
        flex-shrink: 0;
        margin-right: 20px;
    }
    .item-left {
        flex-grow: 1;
    }

}

.item-left {
    width: 0;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
  }
  .item-left-i {
    width: 50%;
    font-size: 12px;
    margin-bottom: 10px;
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