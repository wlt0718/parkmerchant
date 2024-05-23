<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { userPlayListStore } from '../../stores/playlist.js'
import { showDialog } from 'vant';
const playListStore = userPlayListStore()
const dataProject = reactive([
    {
        id: 0,
        merchantName: '上海欢乐谷',
        project: [
          {
            id: '100001',
            name: '上海欢乐谷游艇',
            amounts: 60,
            proportion: 5
          },
          {
            id: '100002',
            name: '上海欢乐谷摩天轮',
            amounts: 60,
            proportion: 10
          },
          {
            id: '100003',
            name: '上海欢乐谷恐龙乐园',
            amounts: 40,
            proportion: 5
          },
          {
            id: '100004',
            name: '上海欢乐谷天地双雄',
            amounts: 40,
            proportion: 5
          },
        ]
    },
    {
        merchantName: '上海市方特世界',
        id: 5,
        project: [{
            id: '200001',
            name: '上海市方特世界游艇',
            amounts: 60,
            proportion: 5
          },
          {
            id: '200002',
            name: '上海市方特世界摩天轮',
            amounts: 60,
            proportion: 10
          },
          {
            id: '200003',
            name: '上海市方特世界恐龙乐园',
            amounts: 40,
            proportion: 5.5
          },
          {
            id: '200004',
            name: '上海市方特世界天地双雄',
            amounts: 40,
            proportion: 5
          },]
    },
    {
        merchantName: '上海市环球港',
        id: 6,
        project: [{
            id: '300001',
            name: '上海市环球港游艇',
            amounts: 60,
            proportion: 5
          },
          {
            id: '300002',
            name: '上海市环球港摩天轮',
            amounts: 60,
            proportion: 10
          },
          {
            id: '300003',
            name: '上海市环球港恐龙乐园',
            amounts: 40,
            proportion: 5
          },
          {
            id: '300004',
            name: '上海市环球港天地双雄',
            amounts: 40,
            proportion: 5
          },]
    }
])
const checkMerchant = ref(-1)
const checkProject = ref('100000')
const checkDate = ref('date')
const checkBalance = ref('allbanlace')
console.log(checkProject.value)
const merchantList = computed(() =>{
  const list = [
    { text: '所有商家', value: -1 }
  ]
  dataProject.forEach(el =>{
    const data = { text: el.merchantName, value: el.id }
    list.push(data)
  })
  return list
})
console.log(merchantList)
// 所有项目
const projectList = ref([
  { text: '所有项目', value: '100000' }
])
watch(checkMerchant, (newValue, oldValue) =>{
  checkProject.value = '100000'
  const list = [
    { text: '所有项目', value: '100000' }
  ]
  const check = merchantList.value.find(el =>{
    return el.value === newValue
  })
  console.log(check)
  if(newValue !== -1) {
    const data = dataProject.find(el => {
      return el.id === check.value
    })
    data.project.forEach(el =>{
      const pushData = { text: el.name, value: el.id }
      list.push(pushData)
    })
  }
  projectList.value = list
})
/* 选择日期区间 */
const canlendarShow = ref(false)
const customDate = ref('')
function onConfirm(value){
  canlendarShow.value = false
  const state = value[0].getMonth() + 1 + '月'+value[0].getDate() + '日' 
  const end = value[1].getMonth() + 1 + '月'+value[1].getDate() + '日' 
  customDate.value = state + '-' + end
}
const dateList = ref([
  { text: '今日', value: 'date' },
  { text: '本周', value: 'week' },
  { text: '本月', value: 'month' },
  { text: `自定义时间${customDate.value}`, value: 'custom' },
])
const dateChange = (value) =>{
  console.log(value)
  if(value === 'custom'){
    canlendarShow.value = true
  }
}
const banlaceList = ref([
  { text: '所有结算', value: 'allbanlace' },
  { text: '已结算', value: 'sucessbanlace' },
  { text: '未结算', value: 'nobanlace' },
  { text: '结算失败', value: 'failbanlance' },
])
const data = ref([
{
        id: 1,
        name: '上海欢乐谷',
        project: '欢乐谷游艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 60,
        time: '2024年04月29日 11:30:30',
        status: 1,
        failText: ''
    },
    {
        id: 2,
        name: '上海欢乐谷',
        project: '欢乐谷游艇',
        num: 10,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 0,
    },
    {
        id: 3,
        name: '上海欢乐谷',
        project: '欢乐谷游艇',
        num: 10,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 0,
    },
    {
        id: 4,
        name: '上海欢乐谷',
        project: '欢乐谷游艇',
        num: 10,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 2,
    },
])
const looka = () =>{
    showDialog({
        title: '提示',
        message: '这里是失败原因'
    })
}
</script>
<template>
<van-dropdown-menu>
  <van-dropdown-item v-model="checkBalance" :options="banlaceList" />
  <van-dropdown-item v-model="checkMerchant" :options="merchantList" />
  <van-dropdown-item v-model="checkProject" :options="projectList" />
  <van-dropdown-item v-model="checkDate" :options="dateList" @change="dateChange" />
</van-dropdown-menu>
<div class="playlist">
  <div class="list-item" v-for="item in data" :key="item.id">
    <div class="item-left">
      <div class="item-left-i">
        <span class="card-left">商家：</span>
        <span class="card-right">{{ item.name }}</span>
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
        <span class="card-left">结算金额：</span>
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
      <div class="failtext" v-if="item.status === 2" style="color: #f56c6c" @click="looka">查看原因</div>
    </div>
  </div>
</div>
<van-calendar v-model:show="canlendarShow" type="range" @confirm="onConfirm" 
  allow-same-day position="top"
/>
</template>
<style lang="scss" scoped>
.playlist {
  margin: 12px;
}
.list-item {
  padding: 12px;
  background-color: #fff;
  margin-bottom: 12px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 0 4px 1px rgba(0,0,0,0.1);
  color: #666666;
  .item-right {
    flex-shrink: 0;
    width: 72px;
    text-align: center;
  }
  .status {
    padding: 6px 8px;
    color: #fff;
    background-color: aqua;
    border-radius: 6px;
  }
  .failtext {
    margin-top: 10px;
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
    margin-bottom: 10px;
  }
  .item-left-i.time {
    width: 100%;
    margin-bottom: 0;
  }
}
</style>