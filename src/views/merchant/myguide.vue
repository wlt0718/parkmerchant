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
</script>
<template>
<div class="store">
    <template v-for="item in data" :key="item.id" >
    <div class="store-item" v-if="item.status === 0">
        <van-checkbox v-model="item.isCheck" :name="item.id" class="checkbox"></van-checkbox>
        <div class="item-left">
            <div class="item-left-i">导游名：{{ item.guideName }}</div>
            <div class="item-left-i">所属导游团：{{ item.guideTeam }}</div>
            <div class="item-left-i">联系方式：{{ item.mobile }}</div>
            <div class="item-left-i">申请时间：{{ item.time }}</div>
            <div class="item-left-i">状态：正常</div>
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
    <button type="button" class="btn">解除导游</button>
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
        width: 200px;
        height: 44px;
        background-color: #f56c6c;
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 100%;
        border-radius: 30px;
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