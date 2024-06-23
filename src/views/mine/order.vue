<script setup>
import { reactive, ref } from 'vue'
import { userOrderListStore } from '../../stores/order.js'

import { showConfirmDialog } from 'vant';
import { useRouter } from 'vue-router'
const userOrder = userOrderListStore()
const router = useRouter()
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
const payModeShow = ref(false)
const id = ref('0')
function changeStatus(item){
    showConfirmDialog({
      title: '提示',
      message:
        '是否将该订单设置为已完成？',
    })
      .then(() => {
        payModeShow.value = true
        id.value = item.id
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
}
function confirmorder(){
  payModeShow.value = false
  userOrder.Set_list_status(id.value)
}
</script>
<template>
<nav-bar />
<van-sticky>
<van-dropdown-menu active-color="#ee0a24">
  <van-dropdown-item v-model="value2" :options="option2" />
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
            <van-button type="primary" size="mini" color="#5075ff" @click.stop="changeStatus(item)" v-if="item.status === '0'">订单核销</van-button>
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
<van-overlay :show="payModeShow">
<div class="paymode">
  <div class="tips">请选择该游客的支付方式</div>
  <div>
    <div class="pay-item" @click="confirmorder('0')">现金支付</div>
    <div class="pay-item" @click="confirmorder('1')">信用卡支付</div>
  </div>
</div>
</van-overlay>
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
.paymode {
  position: fixed;
  top: 45%;
  left: 0;
  right: 0;
  width: 70%;
  background-color: #ffffff;
  border-radius: 16px;
  margin: 0 auto;
  padding: 0 12px;
  font-size: 16px;
  color: #666666;
  transform: translateY(-50%);
  .tips {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .pay-item {
    padding: 20px 0;
    font-size: 14px;
    color: #666666;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>