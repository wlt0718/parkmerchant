<script setup>
import { reactive, ref } from 'vue'
import { userOrderListStore } from '../../stores/order.js'
import { showConfirmDialog } from 'vant';
import { useRoute } from 'vue-router'
const userOrder = userOrderListStore()
const route = useRoute()

const id = route.query.id
const data = userOrder.list.find(el => {
  return el.id === id
})
</script>
<template>
<nav-bar />
<div class="header">
    <van-icon name="passed" />
    <span style="margin-left: 10px;">订单状态：
      <span v-if="data.status === '0'">已下单</span>
      <span v-if="data.status === '1'">已完成</span>
    </span>
</div>
<div class="item">
  <div class="bodys">
      <img src="../../assets/jpg/dsn.jpg" alt="" />
      <div class="info">
          <div class="info-head">
              <div class="name">{{ data.projectName }}</div>
          </div>
          <div class="info-num">价格：￥{{ data.projectjiage }} / 位</div>
          <div class="desc">数量：x {{ data.projectNum }}</div> 
      </div>
  </div>
  <div class="yh">
      <div class="label">总计</div>
      <div class="amt">￥{{ data.allAmount }}</div>
  </div>
  <div class="yh">
      <div class="label">订单号</div>
      <div class="time">{{data.ddh}}</div>
  </div>
  <div class="yh">
      <div class="label">下单人</div>
      <div class="time">￥{{ data.person }}</div>
  </div>
  <div class="yh">
      <div class="label">下单时间</div>
      <div class="time">{{data.orderTime}}</div>
  </div>
  <div class="yh" v-if="data.successTime">
      <div class="label">完成时间</div>
      <div class="time">{{data.successTime}}</div>
  </div>
  <div class="yh" v-if="data.guide">
      <div class="label">项目佣金比例</div>
      <div class="time">{{ data.bili }} %</div>
  </div>
  <div class="yh" v-if="data.guide">
      <div class="label">项目佣金</div>
      <div class="time">￥{{ data.yongjin }}</div>
  </div>
  <div class="yh" v-if="data.guide">
      <div class="label">导游</div>
      <div class="time">{{ data.guide }}</div>
  </div>
  <div class="yh" v-if="data.guide">
      <div class="label">需结算金额</div>
      <div class="time">￥{{ data.jiesuan }}</div>
  </div>
  <div class="yh" v-if="data.guide">
      <div class="label">带客游玩批次</div>
      <div class="time">￥{{ data.guideOrder }}</div>
  </div>
</div>
</template>
<style lang="scss" scoped>
.header {
    margin: 20px 12px;
    font-size: 16px;
    color: #333333;
    font-weight: 600;
    display: flex;
    align-items: center;
    .van-icon {
        color: #333333;
        font-size: 26px;
    }
}
.item {
  margin: 0 12px;
  padding: 12px;
  background-color: #ffffff;
  border-radius: 6px;
  .headera {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 7px;

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
  .guide {
    font-size: 14px;
    color: #333333;
    margin-bottom: 7px;
    padding-bottom: 7px;
    border-bottom: 1px solid #f0f0f0;
  }
  .bodys {
    padding: 0 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    &:last-child {
        margin-bottom: 0;
    }
  }
  img {
    flex-shrink: 0;
    width: 80px;
    height: 60px;
    margin-right: 12px;
    border-radius: 6px;
    display: block;
  }
  .info {
    flex-grow: 1;
    font-size: 12px;
    color: #666666;
    .info-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 14px;
        font-weight: 600;
        color: #333333;
        margin-bottom: 8px;
    }
    .info-num {
        margin-bottom: 6px;
    }
  }
  .all {
    font-size: 14px;
    color: #666666;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    .amount {
        font-size: 16px;
        color: #333333;
        margin-left: 5px;
        font-weight: 600;
    }
  }
}
.yh {
    margin-top: 15px;
    font-size: 14px;
    color: #333333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .amt {
        font-weight: 600;
        font-size: 16px;
        &.c {
            font-weight: 500;
            color: #ee0a24;
        }
    }
}
</style>