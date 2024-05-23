<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { userPlayListStore } from '../../stores/playlist.js'
import { showDialog } from 'vant';
const data = ref([
  {
    id: '001',
    name: '游艇',
    amount: 40,
    bili: 10,
    yongjin: 4,
    isCheck: false
  },
  {
    id: '002',
    name: '摩天轮',
    amount: 100,
    bili: 10,
    yongjin: 10,
    isCheck: false 
  },
  {
    id: '003',
    name: '海盗船',
    amount: 60,
    bili: 5,
    yongjin: 3,
    isCheck: false 
  },
  {
    id: '004',
    name: '激情冲浪',
    amount: 80,
    bili: 10,
    yongjin: 8,
    isCheck: false 
  },
  {
    id: '005',
    name: '激情冲浪',
    amount: 80,
    bili: 10,
    yongjin: 8,
    isCheck: false 
  }
])
</script>
<template>
<div class="page">
  <div class="project-list">
    <div class="project-item" v-for="item in data" :key="item.id">
      <img src="" alt="" class="item-left" />
      <div class="item-right">
        <div>项目名称：{{ item.name }}</div>
        <div>项目费用：{{ item.amount }} 元</div>
        <div>佣金比例：{{  item.bili }} %</div>
        <div>佣金：{{ item.yongjin }} 元</div>
      </div>
    </div>
  </div>
</div>
<div class="footer">
    <button type="button" class="btn">新增项目</button>
</div>
</template>
<style lang="scss" scoped>
.page {
  margin: 12px;
  background-color: #f5f5f5;
  padding-bottom: 80px;
}
.project-item {
  padding: 12px;
  margin-bottom: 12px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666666;
  border-radius: 10px;
  background-color: #ffffff;

  .item-left {
    display: block;
    width: 130px;
    height: 100px;
    flex-shrink: 0;
    margin-right: 30px;
  }
  .item-right {
    flex-grow: 1;
    font-size: 14px;
    div {
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
.footer {
    width: 100%;
    height: 70px;
    padding: 10px 12px 18px;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    .btn {
        display: block;
        width: 100%;
        height: 44px;
        background-color: var(--default-color);
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 100%;
        border-radius: 30px;
    }
}
</style>