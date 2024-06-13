<script setup>
import { reactive, ref } from 'vue'
import { userOrderListStore } from '../../stores/order.js'

import { showConfirmDialog } from 'vant';
import { useRouter } from 'vue-router'
const userOrder = userOrderListStore()
const router = useRouter()
const value1 = ref(0);
const value2 = ref('a');
const value3 = ref('z');
const checkDate = ref('date')
const canlendarShow = ref(false)
const customDate = ref('')
function onConfirm(value){
  canlendarShow.value = false
  const state = value[0].getMonth() + 1 + '月'+value[0].getDate() + '日' 
  const end = value[1].getMonth() + 1 + '月'+value[1].getDate() + '日' 
  customDate.value = state + '-' + end
}
const dateChange = (value) =>{
  console.log(value)
  if(value === 'custom'){
    canlendarShow.value = true
  }
}
const dateList = ref([
  { text: '今日', value: 'date' },
  { text: '本周', value: 'week' },
  { text: '本月', value: 'month' },
  { text: `自定义时间${customDate.value}`, value: 'custom' },
])
const option1 = [
  { text: '全部导游', value: 0 },
  { text: '导游一', value: 1 },
  { text: '导游二', value: 2 },
];
const option2 = [
  { text: '全部项目', value: 'a' },
  { text: '项目二', value: 'b' },
  { text: '项目三', value: 'c' },
];
const option3 = [
  { text: '全部状态', value: 'z' },
  { text: '已下单', value: 'x' },
  { text: '已完成', value: 'c' },
];
function toinfo(id){
    router.push({
        path: '/orderinfo',
        query: {
          id: id
        }
    })
}
function changeStatus(item){
    showConfirmDialog({
      title: '提示',
      message:
        '是否将该订单设置为已完成？',
    })
      .then(() => {
        userOrder.Set_list_status(item.id)
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
}
</script>
<template>
<van-sticky>
<van-dropdown-menu active-color="#ee0a24">
  <van-dropdown-item v-model="value2" :options="option2" />
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="checkDate" :options="dateList" @change="dateChange" />
  <van-dropdown-item v-model="value3" :options="option3" />
</van-dropdown-menu>
</van-sticky>
<!-- 日期区间 -->
<van-calendar v-model:show="canlendarShow" type="range" @confirm="onConfirm" 
color="#ee0a24" allow-same-day position="top"
/>
<div class="list">
    <div class="item" v-for="item in userOrder.list" :key="item.id" @click="toinfo(item.id)">
        <div class="header">
            <div class="status">订单状态：
              <span v-if="item.status === '0'">已下单</span>
              <span v-if="item.status === '1'">已完成</span>
            </div>
            <van-button type="primary" size="mini" color="#5075ff" @click="changeStatus(item)" v-if="item.status === '0'">修改为完成</van-button>
        </div>
        <div class="body">
            <img src="../../assets/jpg/dsn.jpg" alt="" />
            <div class="info">
                <div class="name">{{ item.projectName }}</div>
                <div class="desc">价格：￥{{ item.projectjiage }}/ 位</div>
                <div class="desc">下单人：{{ item.person }}</div>
                <div class="desc">数量：x {{ item.projectNum }}</div>
            </div>
            <div class="amt">
                <div>￥{{ item.allAmount }}</div>
            </div>
        </div>  
    </div>
</div>
</template>
<style lang="scss" scoped>
.list {
    margin: 12px;
}
.item {
  padding: 10px;
  background-color: #ffffff;
  box-shadow:0 0 4px 0 rgba(0,0,0,0.1);
  border-radius: 6px;
  margin-bottom: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .header-left {
        flex-grow: 1;
        display: flex;
        font-size: 16px;
        color: #333;
        font-weight: 600;
        .name {
            margin-right: 6px;
        }
    }
    .status {
        font-size: 14px;
        color: #666;
    }
  }
  .body {
    display: flex;
    align-items: flex-start;
  }
  img {
    flex-shrink: 0;
    width: 80px;
    height: 70px;
    margin-right: 12px;
    border-radius: 6px;
    display: block;
  }
  .info {
    flex-grow: 1;
    font-size: 12px;
    color: #333333;
    .name {
        font-size: 14px;
        margin-bottom: 6px;
    }
    .desc {
        color: #999999;
        margin-bottom: 6px;
    }
  }
  .amt {
    height: 60px;
    color: #333333;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: flex-start;
  }
}
</style>