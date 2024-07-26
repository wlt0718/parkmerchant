<script setup>
import { ref, reactive, computed } from "vue";
import { showDialog, showConfirmDialog  } from 'vant';
const data = ref([
    {
        id: 0,
        guideName: '王天真',
        guideTeam: '靠谱导游团',
        mobile: '132 ****** 02',
        time: '2024年04月26日 12:22:30',
        status: 0,
        isCheck: false 
    },
    {
        id: 1,
        guideName: '赵童童',
        guideTeam: '靠谱导游团',
        mobile: '152 ****** 02',
        time: '2024年04月26日 12:22:30',
        status: 0 ,
        isCheck: true 
    },
    {
        id: 2,
        guideName: '崔一',
        guideTeam: '靠谱导游团',
        mobile: '132 ****** 55',
        time: '2024年04月26日 12:22:30',
        status: 0 ,
        isCheck: false 
    },
    {
        id: 3,
        guideName: '樊无忌',
        guideTeam: '全国游导游团',
        mobile: '132 ****** 43',
        time: '2024年04月26日 12:22:30',
        status: 0 ,
        isCheck: false 
    },
    {
        id: 4,
        guideName: '赵国庆',
        guideTeam: '全国游导游团',
        mobile: '162 ****** 02',
        time: '2024年04月26日 12:22:30',
        status: 0 ,
        isCheck: false 
    },
])
// 全选
const checkedResult = ref([])
const isCheckAll = ref(false)
const isIndeterminate = ref(false)
function checkAllChange(val){
  const list = data.value.map(el => {
    return el.id
  })
  checkedResult.value = val ? list : []
  isIndeterminate.value = false
}
function checkedResultChange(value){
  const checkedCount = value.length
  isCheckAll.value = checkedCount === data.value.length && checkedCount > 0
  isIndeterminate.value = checkedCount > 0 && checkedCount < data.value.length
}
// 解除导游
function releaseGuide(){
    showConfirmDialog({
        title: t('tips.tips0'),
        message: `确认和您选择的导游解除关系？`,
        confirmButtonText: '确认',
        cancelButtonText: '取消',
    }).then(() => {
        checkedResult.value.forEach(el => {
            const index = data.value.findIndex( ele => {
                return ele.id === el
            })
            data.value.splice(index, 1)
            checkedResult.value = []
        })
    }).catch(() => {})
}
</script>
<template>
<nav-bar />
<div class="header">
    <div class="guide-num">导游共计：<span>{{ data.length }}</span> 位</div>
</div>
<div class="store">
    <van-checkbox-group v-model="checkedResult" @change="checkedResultChange">
        <template v-for="item in data" :key="item.id" >
        <div class="store-item" v-if="item.status === 0">
            <van-checkbox :name="item.id" class="checkbox"></van-checkbox>
            <div class="item-left">
                <div class="item-left-i">导游名：{{ item.guideName }}</div>
                <div class="item-left-i">所属导游团：{{ item.guideTeam }}</div>
                <div class="item-left-i">联系方式：{{ item.mobile }}</div>
                <div class="item-left-i">申请时间：{{ item.time }}</div>
                <div class="item-left-i">状态：正常</div>
            </div>
        </div>
        </template>
    </van-checkbox-group>
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
  </div>
  <div class="footer-btn">
    <van-button color="#f56c6c" @click="releaseGuide" round block>解除导游</van-button>
  </div>
</div>
</template>
<style lang="scss" scoped>
.header {
    padding: 12px;
    background-color: #ffffff;
}
.guide-num {
    color: #999999;
    font-size: 14px;
    span {
        color: #333333;
        font-size: 16px;
    }
}
.store {
    margin-top: 12px;
    padding-bottom: 70px;
    overflow: auto;
}
.store-item {
    margin: 0 12px 10px;
    padding: 12px;
    background-color: #ffffff;
    border-radius: 6px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    line-height: 1;
    border-radius: 8px;
    box-shadow: 0px 0px 5px 0px rgba($color: #000000, $alpha: 0.1);
    .checkbox {
        flex-shrink: 0;
        margin-right: 15px;
    }
    .item-left {
        flex-grow: 1;
    }
    .item-left-i {
        font-size: 14px;
        margin-bottom: 7px;
        color: #999999;
        &:last-child {
            margin-bottom: 0;
        }
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