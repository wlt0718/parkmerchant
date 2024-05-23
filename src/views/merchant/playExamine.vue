<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { userPlayListStore } from '../../stores/playlist.js'
import { showDialog } from 'vant';
const checkProject = ref('100000')
const checkGuide = ref('1')
const checkDate = ref('date')
const projectList = [
    { text: '所有项目', value: '100000' },
    { text: '游艇', value: '100001' },
    { text: '恐龙乐园', value: '100002' },
    { text: '天地双雄', value: '100003' },
    { text: '摩天轮', value: '100004' },
]
const guideList = [
    { text: '所有导游', value: '1' },
    { text: '导游一', value: '2' },
    { text: '导游二', value: '3' },
    { text: '导游三', value: '4' },
]
const dateList = ref([
  { text: '今日', value: 'date' },
  { text: '本周', value: 'week' },
  { text: '本月', value: 'month' },
  { text: `自定义时间`, value: 'custom' },
])
const dateChange = (value) =>{
  if(value === 'custom'){
    canlendarShow.value = true
  }
}
const canlendarShow = ref(false)
const customDate = ref('')
function onConfirm(value){
  canlendarShow.value = false
  const state = value[0].getMonth() + 1 + '月'+value[0].getDate() + '日' 
  const end = value[1].getMonth() + 1 + '月'+value[1].getDate() + '日' 
  customDate.value = state + '-' + end
}
const data = ref([
    {
        id: 0,
        guideName: '导游一',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 0,
        isCheck: false,
    },
    {
        id: 1,
        guideName: '导游一',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 0,
        isCheck: false,
    },
    {
        id: 2,
        guideName: '导游一',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 0,
        isCheck: false,
    },
    {
        id: 3,
        guideName: '导游一',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 0,
        isCheck: false,
    },
    {
        id: 4,
        guideName: '导游一',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 0,
        isCheck: false,
    },
    {
        id: 5,
        guideName: '导游一',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 0,
        isCheck: false,
    },
    {
        id: 6,
        guideName: '导游一',
        project: '快艇',
        num: 20,
        amount: 60,
        proportion: 5,
        income: 30,
        time: '2024年04月29日 11:30:30',
        status: 0,
        isCheck: false,
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
function examine(){
    const checkList = data.value.filter(el => {
        return el.isCheck
    })
    if(!checkList.length){
        showDialog({
            title: '提示',
            message: '您还没有选择游玩列表'
        })
        return false
    }
    let checkName = []
    checkList.forEach(el => {
        checkName.push(el.guideName)
    })
    showConfirmDialog({
        title: '提示',
        message: `这将通过您所选中的游玩列表申请`,
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
            title: '提示',
            message: '您还没有选择游玩列表'
        })
        return false
    }
    let checkName = []
    checkList.forEach(el => {
        checkName.push(el.guideName)
    })
    showConfirmDialog({
        title: '提示',
        message: `这将拒绝您所选中的游玩列表申请!`,
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
<van-dropdown-menu>
  <van-dropdown-item v-model="checkProject" :options="projectList" />
  <van-dropdown-item v-model="checkGuide" :options="guideList" />
  <van-dropdown-item v-model="checkDate" :options="dateList" @change="dateChange" />
</van-dropdown-menu>
<van-calendar v-model:show="canlendarShow" type="range" @confirm="onConfirm" 
  allow-same-day position="top"
/>
<div class="store">
    <template v-for="item in data" :key="item.id" >
    <div class="store-item" v-if="item.status === 0">
        <van-checkbox v-model="item.isCheck" :name="item.id" class="checkbox"></van-checkbox>
        <div class="item-left">
            <div class="item-left-i">
                <span class="card-left">导游：</span>
                <span class="card-right">{{ item.guideName }}</span>
            </div>
            <div class="item-left-i">
                <span class="card-left">项目：</span>
                <span class="card-right">{{ item.project }}</span>
            </div>
            <div class="item-left-i">
                <span class="card-left">游玩人数：</span>
                <span class="card-right">{{ item.num }} 人</span>
            </div>
            <div class="item-left-i">
                <span class="card-left">项目费用：</span>
                <span class="card-right">{{ item.amount }} 元/人</span>
            </div>
            <div class="item-left-i">
                <span class="card-left">佣金比例：</span>
                <span class="card-right">{{ item.proportion }} %</span>
            </div>
            <div class="item-left-i">
                <span class="card-left">结算金额：</span>
                <span class="card-right">{{ item.income }} 元</span>
            </div>
            <div class="item-left-i time">
                <span class="card-left">时间：</span>
                <span class="card-right">{{ item.time }}</span>
            </div>
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
<style scoped lang="scss">
.store {
    padding-top: 10px;
    padding-bottom: 70px;
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
.item-left {
    width: 0;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
  }
  .item-left-i {
    width: 50%;
    margin-bottom: 10px;
  }
  .item-left-i.time {
    width: 100%;
    margin-bottom: 0;
  }
</style>