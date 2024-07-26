<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { userPlayListStore } from '../../stores/playlist.js'
import { showDialog } from 'vant';
import { useRouter } from 'vue-router';
const router = useRouter()
const checkGuide = ref('1')
const checkDate = ref('date')
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
        guideName: '王天真',
        num: 20,
        amount: 40,
        proportion: 5,
        income: 30,
        time: '2024年04月29日',
        status: 0,
        pici: '100120240430001',
    },
    {
        id: 1,
        guideName: '赵童童',
        num: 20,
        amount: 33,
        proportion: 5,
        income: 30,
        time: '2024年04月29日',
        status: 0,
        pici: '100220240430001',
    },
    {
        id: 2,
        guideName: '赵童童',
        num: 20,
        amount: 105,
        proportion: 5,
        income: 30,
        time: '2024年04月29日',
        status: 0,
        pici: '100220240430002',
    },
    {
        id: 3,
        guideName: '崔一',
        num: 20,
        amount: 19,
        proportion: 5,
        income: 30,
        time: '2024年04月29日',
        status: 0,
        pici: '100320240430001',
    },
    {
        id: 4,
        guideName: '王天真',
        num: 20,
        amount: 25,
        proportion: 5,
        income: 30,
        time: '2024年04月29日',
        status: 0,
        pici: '100120240430002',
    },
    {
        id: 5,
        guideName: '王天真',
        num: 20,
        amount: 10,
        proportion: 5,
        income: 30,
        time: '2024年04月29日',
        status: 0,
        pici: '100120240430003',
    },
    {
        id: 6,
        guideName: '崔一',
        num: 20,
        amount: 30,
        proportion: 5,
        income: 30,
        time: '2024年04月29日',
        status: 0,
        pici: '100320240430002',
    },
])
function toinfo(){
    router.push({
        name: 'info'
    })
}
// 全选
const checkedResult = ref([])
const isCheckAll = ref(false)
const isIndeterminate = ref(false);
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

// 选择结算后底部的总计导游数 和 金额数
// 选择的数组
const allWei = computed(() => {
    const arr = checkedResult.value.map(el => {
        const check = data.value.find(secondEl => {
            return secondEl.id === el
        })
        return check.guideName
    })
    const newArr = []
    arr.forEach(el => {
        if (newArr.indexOf(el) === -1) {
            newArr.push(el)
        }
    })
    return newArr.length
})
// 总计金额
const allAmt = computed(() => {
    if (checkedResult.value.length === 0) {
        return ''
    }
    const arr = checkedResult.value.map(el => {
        const check = data.value.find(secondEl => {
            return secondEl.id === el
        })
        return check
    })
    let amt = 0
    arr.forEach( el => {
        amt = amt + el.amount
    })
    return amt
})
const popupShow = ref(false)
const jiesuanObj = reactive({
    weiObj: {}
})
// 立即结算
function examine(){
    if(!checkedResult.value.length){
        showDialog({
            title: t('tips.tips0'),
            message: '您还没有选择结算列表'
        })
        return false
    }
    const arr = checkedResult.value.map(el => {
        const check = data.value.find(secondEl => {
            return secondEl.id === el
        })
        return check
    })
    let weiObj = {}
    arr.forEach(el => {
        if (!weiObj.hasOwnProperty(el.guideName)) {
            weiObj[el.guideName] = 0 + el.amount
        } else {
            weiObj[el.guideName] = weiObj[el.guideName] + el.amount
        }
    })
    jiesuanObj.weiObj = weiObj 
    popupShow.value = true
}
function confirmExamine(){
    checkedResult.value.forEach(el => {
        const index = data.value.findIndex(ele => {
            return ele.id === el
        })
        data.value.splice(index, 1)
    })
    popupShow.value = false
    checkedResult.value = []
}
</script>
<template>
<nav-bar />
<van-sticky>
    <van-dropdown-menu>
        <van-dropdown-item v-model="checkGuide" :options="guideList" />
        <van-dropdown-item v-model="checkDate" :options="dateList" @change="dateChange" />
    </van-dropdown-menu>
</van-sticky>
<van-calendar v-model:show="canlendarShow" type="range" @confirm="onConfirm" 
  allow-same-day position="top"
/>
<div class="store">
    <van-checkbox-group v-model="checkedResult" @change="checkedResultChange">
        <template v-for="item in data" :key="item.id" >
        <div class="store-item" v-if="item.status === 0">
            <van-checkbox :name="item.id" class="checkbox"></van-checkbox>
            <div class="item-left">
                <div class="name">导游：{{ item.guideName }}</div>
                <div>带客游玩批次：{{ item.pici }}</div>
                <div>时间：{{ item.time }}</div>
                <div>结算金额：<span class="red">￥{{ item.amount }}</span></div>
            </div>
            <div class="right">
                <div style="color: #E6A23C">未结算</div>
                <div class="btn">
                    <van-button color="#5075FF" size="mini" round @click="toinfo" block>查看详情</van-button>
                </div>
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
    <div class="summary" v-show="checkedResult.length > 0">
        <div class="wei">已选：导游 <span class="red">{{ allWei }}</span> 位</div>
        <div class="amt">共计：<span class="red">{{ allAmt }}</span>元</div>
    </div>
  </div>
  <div class="footer-btn">
    <van-button color="#5075ff" @click="examine" round block>立即结算</van-button>
  </div>
</div>
<van-popup v-model:show="popupShow" closeable position="bottom" class="popup" round>
   <div class="content">
      <div class="head">
          <div>结算导游总计： <span class="red">{{ allWei }}</span> 位</div>
          <div>结算金额总计： <span class="red">{{ allAmt }}</span> 元</div>
          <div class="tipsa">结算明细如下：</div>
      </div>
      <div class="list">
        <div class="list-item title">
            <div class="name">导游</div>
            <div class="value">结算金额</div>
        </div>
        <div v-for="(value, key) in jiesuanObj.weiObj" :key="key" class="list-item">
            <div  class="name">{{ key }}</div>
            <div class="value">{{ value }} 元</div> 
        </div>
      </div>
   </div>
   <div class="foot-btn">
     <van-button color="#5075ff" @click="confirmExamine" round block>确认结算</van-button>
   </div>
</van-popup>
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
    align-items: flex-start;
    justify-content: space-between;
    line-height: 1;
    border-radius: 7px;
    box-shadow: 0px 0px 4px 0px rgba($color: #000000, $alpha: 0.1);
    .checkbox {
        flex-shrink: 0;
        margin-right: 15px;
    }
    .item-left {
        flex-grow: 1;
        font-size: 13px;
        color: #999999;
        div {
            margin-bottom: 8px;
        }
        div:last-child {
            margin-bottom: 0;
        }
        .name {
            font-size: 15px;
        }
        .red {
            color: #ee0a24;
            font-size: 14px;
        }
    }
    .right {
        width: 60px;
        text-align: right;
        font-size: 13px;
        .btn {
            width: 60px;
            margin-top: 15px;
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
    width: 150px;
  }
  .footer-left {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  .checkall {
    font-size: 14px;
    margin-right: 15px;
  }

}
.summary {
    font-size: 13px;
    color: #999999;
    .wei {
        margin-bottom: 6px;
    }
    .red {
        font-size: 14px;
        color: #ee0a24;
        margin: 0 3px;
    }
}
.popup {
    padding-top: 15px;
}
.content {
    padding: 0 20px 12px;
}
.foot-btn {
    margin: 0 20px 15px;
    padding-top: 10px;
    height: 50px;
}
.head {
    font-size: 14px;
    color: #333333;
    overflow: hidden;
    .red {
        font-size: 18px;
        font-weight: 600;
        color: #ee0a24;
        margin: 0 3px;
    }
    div {
        margin-bottom: 6px;
    }
    .tipsa {
        margin-top: 10px;
        margin-bottom: 10px;
        color: #999999;
    }
}
.list {
    max-height: 300px;
    overflow: auto;
}
.list-item {
    font-size: 16px;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    &.title {
        color: #999999;
        margin-bottom: 7px;
    }
    .name {
        width: 120px;
        text-align: left;
    }
    .value {
        width: 120px;
        text-align: center;
    }
}
</style>