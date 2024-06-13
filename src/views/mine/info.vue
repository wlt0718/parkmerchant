<script setup>
import { reactive, ref } from 'vue'
import { userInfoStore } from '../../stores/user.js'
import { userOrderListStore } from '../../stores/order.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const userOrder = userOrderListStore()
function toinfo(id){
    router.push({
        path: '/orderinfo',
        query: {
          id: id
        }
    })
}
</script>
<template>
<div class="headeraaa">
  <div class="title">带客信息</div>
  <div>导游：导游一</div>
  <div>带客编号：激流勇进20240430001</div>
</div>
<div class="tips">
    详情：
</div>
<div class="list">
    <div v-for="item in userOrder.list" :key="item.id" >
      <div v-if="item.guide && item.status === '0'" class="item" @click="toinfo(item.id)" >
        <div class="header">
            <div class="status">订单状态：
              <span v-if="item.status === '0'">已下单</span>
              <span v-if="item.status === '1'">已完成</span>
            </div>
        </div>
        <div class="body">
            <img src="../../assets/jpg/dsn.jpg" alt="" />
            <div class="info">
                <div class="name">{{ item.projectName }}</div>
                <div class="desc">佣金：￥{{ item.yongjin }}</div>
                <div class="desc">数量：x {{ item.projectNum }}</div>
            </div>
            <div class="amt">
                <div>￥{{ item.jiesuan }}</div>
            </div>
        </div>  
      </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.headeraaa {
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