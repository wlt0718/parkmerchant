<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { userMyPorjectStore } from '../../stores/project.js'
import { useRouter } from 'vue-router'
import { showConfirmDialog } from 'vant';
const router = useRouter()
const userMyPorject = userMyPorjectStore()
// 新增项目
function addProject(){
  router.push({
    path: '/addProject',
    query: {
      type: '0'
    }
  })
}
// 修改项目
function toaddProject(item) {
  router.push({
    path: '/addProject',
    query: {
      type: '1',
      id: item.id
    }
  })
}
// 全选
const checkedResult = ref([])
const isCheckAll = ref(false)
const isIndeterminate = ref(false);
function checkAllChange(val){
  const list = userMyPorject.list.map(el => {
    return el.id
  })
  checkedResult.value = val ? list : []
  isIndeterminate.value = false
}
function checkedResultChange(value){
  const checkedCount = value.length
  isCheckAll.value = checkedCount === userMyPorject.list.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < userMyPorject.list.length
}

// 删除
function delExamine(id){
  userMyPorject.SET_list_del(id)
}
// 批量删除
function alldelExamine(){
  if(checkedResult.value.length){
    let tips = ''
    checkedResult.value.forEach(el =>{
      tips = tips + el.name + '、'
    })
    showConfirmDialog({
      title: '提示',
      confirmButtonColor: '#5075ff',
      message:
        `确认删除您选择的项目？`,
    }).then(() => {
      checkedResult.value.forEach(el =>{
        userMyPorject.SET_list_del(el)
      })
    }).catch(() => {});
  }
}
</script>
<template>
<nav-bar />
<div class="page">
  <div class="project-list">
    <van-checkbox-group v-model="checkedResult" @change="checkedResultChange">
      <van-swipe-cell class="project-item" v-for="item in userMyPorject.list" :key="item.id">
        <div class="pitem">
          <van-checkbox :name="item.id" class="checkbox"></van-checkbox>
          <img src="" alt="" class="item-left" />
          <div class="item-right">
            <div>项目名称：{{ item.name }}</div>
            <div>项目费用：{{ item.amount }} 元</div>
            <div>佣金比例：{{  item.bili }} %</div>
            <div>佣金：{{ item.yongjin }} 元</div>
          </div>
        </div>
        <template #right>
          <van-button square text="修改" type="warning" class="delete-button" @click="toaddProject(item)" />
          <van-button square text="删除" type="danger" class="delete-button" @click="delExamine(item.id)"/>
        </template>
      </van-swipe-cell>
    </van-checkbox-group>
  </div>
</div>
<div class="footer-box"></div>
<div class="footer">
  <div class="footer-left">
    <van-checkbox
        class="checkall"
        v-model="isCheckAll"
        :indeterminate="isIndeterminate"
        @change="checkAllChange"
    >全选
    </van-checkbox>
    <div class="del" @click="alldelExamine">批量删除</div>
  </div>
  <div class="footer-btn">
    <van-button color="#5075ff" @click="addProject" round block>新增项目</van-button>
  </div>
</div>
</template>
<style lang="scss" scoped>
.page {
  margin: 12px;
  background-color: #f5f5f5;
  padding-bottom: 80px;
}
.project-item {
  padding: 0 12px;
  padding-right: 0;
  margin-bottom: 12px;
  font-size: 14px;
  color: #666666;
  border-radius: 10px;
  background-color: #ffffff;
  .pitem {
    padding: 10px 0;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .checkbox {
        flex-shrink: 0;
        margin-right: 10px;
      }
  .item-left {
    display: block;
    width: 90px;
    height: 70px;
    flex-shrink: 0;
    margin-right: 10px;
  }
  .item-right {
    display: inline-block;
    font-size: 12px;
    div {
      margin-bottom: 6px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .delete-button {
    height: 100%;
  }
}
.footer-box {
  height: 70px;
}
.footer {
  width: 100%;
  height: 60px;
  padding: 0 12px;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footer-btn {
    flex-shrink: 0;
    width: 130px;
  }
  .footer-left {
    flex-grow: 1;
    display: flex;
    align-items: center;
    .del {
      color: #f56c6c;
      font-size: 14px;
    }
  }
  .checkall {
    font-size: 14px;
    margin-right: 15px;
  }
}
</style>