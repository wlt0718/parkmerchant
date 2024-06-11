<script setup>
import { reactive, ref } from 'vue'
import { userInfoStore } from '../../stores/user.js'
import { useRouter } from 'vue-router'
const router = useRouter()

function toinfo(){
    router.push({
        name: 'orderinfo',
    })
}
const active = ref(2)
</script>
<template>
<div class="header">
  <div>带客流程</div>
  <van-steps :active="active">
    <van-step>导游下单</van-step>
    <van-step>游客入场</van-step>
    <van-step>商家审核</van-step>
    <van-step>结算成功</van-step>
  </van-steps>
  <div class="title">带客信息</div>
  <div>导游：导游一</div>
  <div>项目：激流勇进</div>
  <div>项目费用：60元/次</div>
  <div>佣金比例：5%</div>
  <div>带客人次：12次</div>
  <div>佣金：4.5元</div>
  <div>带客编号：激流勇进20240430001</div>
</div>
<div class="tips">
    详情：
</div>
<div class="playlist">
  <div class="list-item">
    <div class="item-left">
      <div class="item-left-i">
        <span class="card-left">下单人：</span>
        <span class="card-right">游客一</span>
      </div>
      <div class="item-left-i">
        <span class="card-left">游玩人次：</span>
        <span class="card-right">3 次</span>
      </div>
      <div class="item-left-i">
        <span class="card-left">结算金额：</span>
        <span class="card-right weight">1.5 元</span>
      </div>
      <div class="item-left-i time">
        <span class="card-left">时间：</span>
        <span class="card-right">2024年04月29日 11:30:30</span>
      </div>
    </div>
    <div class="item-right">
      <div class="status" style="color: #67c23a">已完成</div>
      <!-- <div class="status" style="color: #E6A23C">已下单</div> -->
    </div>
  </div>
  <div class="list-item">
    <div class="item-left">
      <div class="item-left-i">
        <span class="card-left">下单人：</span>
        <span class="card-right">游客二</span>
      </div>
      <div class="item-left-i">
        <span class="card-left">游玩人次：</span>
        <span class="card-right">3 次</span>
      </div>
      <div class="item-left-i">
        <span class="card-left">结算金额：</span>
        <span class="card-right weight">1.5 元</span>
      </div>
      <div class="item-left-i time">
        <span class="card-left">时间：</span>
        <span class="card-right">2024年04月29日 11:30:30</span>
      </div>
    </div>
    <div class="item-right">
      <div class="status" style="color: #67c23a">已完成</div>
      <!-- <div class="status" style="color: #E6A23C">已下单</div> -->
    </div>
  </div>
  <div class="list-item">
    <div class="item-left">
      <div class="item-left-i">
        <span class="card-left">下单人：</span>
        <span class="card-right">游客三</span>
      </div>
      <div class="item-left-i">
        <span class="card-left">游玩人次：</span>
        <span class="card-right">3 次</span>
      </div>
      <div class="item-left-i">
        <span class="card-left">结算金额：</span>
        <span class="card-right weight">1.5 元</span>
      </div>
      <div class="item-left-i time">
        <span class="card-left">时间：</span>
        <span class="card-right">2024年04月29日 11:30:30</span>
      </div>
    </div>
    <div class="item-right">
      <div class="status" style="color: #67c23a">已完成</div>
      <!-- <div class="status" style="color: #E6A23C">已下单</div> -->
    </div>
  </div>
  <div class="list-item">
    <div class="item-left">
      <div class="item-left-i">
        <span class="card-left">下单人：</span>
        <span class="card-right">游客四</span>
      </div>
      <div class="item-left-i">
        <span class="card-left">游玩人次：</span>
        <span class="card-right">3 次</span>
      </div>
      <div class="item-left-i">
        <span class="card-left">结算金额：</span>
        <span class="card-right weight">1.5 元</span>
      </div>
      <div class="item-left-i time">
        <span class="card-left">时间：</span>
        <span class="card-right">2024年04月29日 11:30:30</span>
      </div>
    </div>
    <div class="item-right">
      <div class="status" style="color: #67c23a">已完成</div>
      <!-- <div class="status" style="color: #E6A23C">已下单</div> -->
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
.header {
    background-color: #fff;
    padding: 12px;
    font-size: 14px;
    color: #666666;
    .title {
        font-weight: 600;
        color: #333333;
    }
    div {
        margin-bottom: 7px;
    }
}
.tips {
    font-size: 14px;
    color: #666666;
    margin: 12px 12px 0;
}
.playlist {
  margin: 12px;
}
.list-item {
  padding: 12px;
  padding-bottom: 0;
  background-color: #fff;
  margin-bottom: 12px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 6px;
  box-shadow: 0 0 4px 1px rgba(0,0,0,0.1);
  color: #666666;
  .item-right {
    flex-shrink: 0;
    text-align: center;
  }
  .status {
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
    margin-bottom: 8px;
  }
  .item-left-i.time{
    width: 100%;
  }
  .card-right.weight {
    font-weight: 600;
  }
}
</style>