<script setup>
import { ref, reactive, computed } from "vue";
import { showDialog, showConfirmDialog  } from 'vant';
const data = ref([
    {
        id: 0,
        guideName: '导游一',
        guideTeam: '靠谱导游团',
        mobile: '132 ****** 02',
        time: '2024年04月26日 12:22:30',
        status: 0,
        isCheck: false 
    },
    {
        id: 1,
        guideName: '导游1',
        guideTeam: '靠谱导游团',
        mobile: '152 ****** 02',
        time: '2024年04月26日 12:22:30',
        status: 0 ,
        isCheck: true 
    },
    {
        id: 2,
        guideName: '导游2',
        guideTeam: '靠谱导游团',
        mobile: '132 ****** 55',
        time: '2024年04月26日 12:22:30',
        status: 0 ,
        isCheck: false 
    },
    {
        id: 3,
        guideName: '导游3',
        guideTeam: '全国游导游团',
        mobile: '132 ****** 43',
        time: '2024年04月26日 12:22:30',
        status: 0 ,
        isCheck: false 
    },
    {
        id: 4,
        guideName: '导游4',
        guideTeam: '全国游导游团',
        mobile: '162 ****** 02',
        time: '2024年04月26日 12:22:30',
        status: 0 ,
        isCheck: false 
    },
    {
        id: 5,
        guideName: '导游5',
        guideTeam: '全国游导游团',
        mobile: '112 ****** 02',
        time: '2024年04月26日 12:22:30',
        status: 0,
        isCheck: false  
    },
])
const checkedAll = computed({
    get(){
        return data.value.every(el => { return el.isCheck })
    },
    set(value){
        data.value.forEach(el =>{
            el.isCheck = value
        })
    }
})

// 审核
function examine(){
    const checkList = data.value.filter(el => {
        return el.isCheck
    })
    if(!checkList.length){
        showDialog({
            title: t('tips.tips0'),
            message: '您还没有选择导游'
        })
        return false
    }
    let checkName = []
    checkList.forEach(el => {
        checkName.push(el.guideName)
    })
    showConfirmDialog({
        title: t('tips.tips0'),
        message: `这将通过您所选中的导游的申请`,
        confirmButtonText: '通过',
        cancelButtonText: '取消',
    }).then(() => {
        data.value.forEach(el => {
            if(el.isCheck){
                el.status = 1
            }
        })
    }).catch(() => {})
}
function examineno(){
    const checkList = data.value.filter(el => {
        return el.isCheck
    })
    if(!checkList.length){
        showDialog({
            title: t('tips.tips0'),
            message: '您还没有选择导游'
        })
        return false
    }
    let checkName = []
    checkList.forEach(el => {
        checkName.push(el.guideName)
    })
    showConfirmDialog({
        title: t('tips.tips0'),
        message: `这将拒绝您所选中的导游的申请!`,
        confirmButtonText: '确认',
        cancelButtonText: '取消',
    }).then(() => {
        data.value.forEach(el => {
            if(el.isCheck){
                el.status = 1
            }
        })
    }).catch(() => {})
}
</script>
<template>
<nav-bar />
<div class="store">
    <template v-for="item in data" :key="item.id" >
    <div class="store-item" v-if="item.status === 0">
        <van-checkbox v-model="item.isCheck" :name="item.id" class="checkbox"></van-checkbox>
        <div class="item-left">
            <div class="item-left-i">导游名：{{ item.guideName }}</div>
            <div class="item-left-i">所属导游团：{{ item.guideTeam }}</div>
            <div class="item-left-i">联系方式：{{ item.mobile }}</div>
            <div class="item-left-i">申请时间：{{ item.time }}</div>
        </div>
    </div>
    </template>
</div>
<div class="footer">
    <van-checkbox
        class="checkall"
        v-model="checkedAll"
    >全选
    </van-checkbox>
    <button type="button" class="btn no" @click="examineno">拒绝</button>
    <button type="button" class="btn" @click="examine">通过</button>
</div>
</template>
<style lang="scss" scoped>
.store {
    padding-top: 12px;
    padding-bottom: 70px;
    overflow: auto;
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
    .item-left-i {
        font-size: 14px;
        margin-bottom: 8px;
        color: #666666;
        &:last-child {
            margin-bottom: 0;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    .checkall {
        width: 80px;
    }
    .del {
        color: #f56c6c;
        font-size: 14px;
    }
    .btn {
        display: block;
        width: 130px;
        height: 44px;
        background-color: var(--default-color);
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 100%;
        border-radius: 30px;
    }
    .btn.no {
        color:#fff;
        background-color: #f56c6c;
        border: 1px solid #f56c6c;
    }
}
.from-item {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  align-items: center;
  font-size: 14px;
  .from-label {
    flex-shrink: 0;
    width: 80px;
  }
  .from-input {
    flex-grow: 1;
    height: 100%;
    line-height: 1;
  }
}
.popup {
    width: 80%;
    padding: 15px;
    .popuptitle {
        text-align: center;
        padding: 15px 0;
        font-size: 16px;
    }
    .btn {
        display: block;
        width: 200px;
        height: 44px;
        margin: 0 auto;
        margin-top: 20px;
        background-color: var(--default-color);
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 100%;
        border-radius: 30px;
    }
}
.merchantPopup {
    width: 90%;
    padding: 15px;
    .from-item {
        padding: 20px 0;
        height: auto;
        &.project {
            padding-bottom: 0;
        }
    }
    .from-input {
        flex-grow: 1;
        font-size: 14px;
        line-height: 1;
        height: auto;
    }
    .van-tag {
        margin-right: 10px;
        margin-bottom: 20px;
    }
}
.right-icon {  
    font-size: 20px;
    color: #666666;
}
</style>