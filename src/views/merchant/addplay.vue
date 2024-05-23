<script setup>
import { ref, reactive, computed } from "vue";
import { showDialog, showConfirmDialog } from 'vant';
import { useRouter } from 'vue-router'
const dataProject = reactive([
    {
        id: 0,
        merchantName: '上海欢乐谷',
        project: [
          {
            id: '100001',
            name: '上海欢乐谷游艇',
            amounts: 60,
            proportion: 5
          },
          {
            id: '100002',
            name: '上海欢乐谷摩天轮',
            amounts: 60,
            proportion: 10
          },
          {
            id: '100003',
            name: '上海欢乐谷恐龙乐园',
            amounts: 40,
            proportion: 5
          },
          {
            id: '100004',
            name: '上海欢乐谷天地双雄',
            amounts: 40,
            proportion: 5
          },
        ]
    },
    {
        merchantName: '上海市方特世界',
        id: 5,
        project: [{
            id: '200001',
            name: '上海市方特世界游艇',
            amounts: 60,
            proportion: 5
          },
          {
            id: '200002',
            name: '上海市方特世界摩天轮',
            amounts: 60,
            proportion: 10
          },
          {
            id: '200003',
            name: '上海市方特世界恐龙乐园',
            amounts: 40,
            proportion: 5.5
          },
          {
            id: '200004',
            name: '上海市方特世界天地双雄',
            amounts: 40,
            proportion: 5
          },]
    },
    {
        merchantName: '上海市环球港',
        id: 6,
        project: [{
            id: '300001',
            name: '上海市环球港游艇',
            amounts: 60,
            proportion: 5
          },
          {
            id: '300002',
            name: '上海市环球港摩天轮',
            amounts: 60,
            proportion: 10
          },
          {
            id: '300003',
            name: '上海市环球港恐龙乐园',
            amounts: 40,
            proportion: 5
          },
          {
            id: '300004',
            name: '上海市环球港天地双雄',
            amounts: 40,
            proportion: 5
          },]
    }
])

const fromData = reactive({
    name: '',
    project: '',
    count: undefined,
    amounts: undefined,
    proportion: undefined
})
// 选择商家
const merchantPopup = ref(false)
const merchantDefault = ref(undefined)
function merchantItemClick(item){
  merchantDefault.value = item.id
}
// 选择商家确认
function merchantConfirm(){
  const checkMerchant = dataProject.find(el => {
    return el.id === merchantDefault.value
  })
  if(!checkMerchant){
    return 
  }
  merchantPopup.value = false
  fromData.name = checkMerchant.merchantName
  fromData.project = ''
  fromData.amounts = undefined
  fromData.proportion = undefined
}

// 选择项目
const projectPopup = ref(false)
const projectDefault = ref(-1)
const projectData = computed(() =>{
  const findMerchant = dataProject.find(el =>{
    return el.merchantName === fromData.name
  })
  return findMerchant
})

function checkProject(){
  if(!projectData.value){
    showDialog({
        title: '提示',
        message: '请先选择商家'
    })
    return false
  }
  projectPopup.value = true
}
function projectItemClick(item){
  projectDefault.value = item.id
}
function projectConfirm(){
  const checkMerchant = projectData.value.project.find(el =>{
    return el.id === projectDefault.value
  })
  if(!checkMerchant){
    return 
  }
  projectPopup.value = false
  fromData.project = checkMerchant.name
  fromData.amounts = checkMerchant.amounts
  fromData.proportion = checkMerchant.proportion
}

// 项目费用
const showAmounts = computed(() => {
  return fromData.amounts ? fromData.amounts + '元 / 人' : ''
})
const showProportion = computed(() => {
  return fromData.proportion ? fromData.proportion + '%' : ''
})
// 应得收入
const income = computed(() => {
  if (fromData.count && fromData.amounts && fromData.proportion){
    const one = (Number(fromData.amounts) * Number(fromData.proportion)) / 100
    const all = (one * Number(fromData.count)).toFixed(2)
    return all
  } else {
    return ''
  }
}) 
const showIncome = computed(() => {
  return income.value ? income.value + '元' : ''
})

// 提交申请
const router = useRouter()
function applyPlay(){
  for(let i in fromData){
    if(!fromData[i]){
      showDialog({
        title: '提示',
        message: '请先完成页面上的内容！'
      })
      return
    }
  }
  showConfirmDialog({
    title: '提示',
    message: '提交成功，请等待商家审核。',
    confirmButtonText: '返回首页',
    cancelButtonText: '留在当前页面'
  }).then(() =>{
    router.replace({
      name: 'home'
    })
  }).catch(()=>{})
}

</script>
<template>
<div class="from">
    <div class="from-item" @click="merchantPopup = true">
        <label for="name" class="from-label">商家</label>
        <input id="name" class="from-input" type="text"  placeholder="请选择商家" readonly 
          v-model="fromData.name"
        />
        <van-icon name="arrow" class="right-icon" />
    </div>
    <div class="from-item" @click="checkProject">
        <label for="team" class="from-label">项目</label>
        <input id="team" class="from-input" type="text" placeholder="请选择项目" readonly
          v-model="fromData.project"
        />
        <van-icon name="arrow" class="right-icon" />
    </div>
    <div class="from-item">
        <label for="count" class="from-label">游玩人数</label>
        <input id="count" class="from-input" type="tel" max="5" placeholder="请输入游玩人数" 
          v-model="fromData.count"
        />
    </div>
    <div class="from-item">
        <label for="amounts" class="from-label">项目费用</label>
        <input id="amounts" class="from-input" type="text" disabled placeholder="根据项目自动生成" 
          v-model="showAmounts"
        />
    </div>
    <div class="from-item">
        <label for="proportion" class="from-label">佣金比例</label>
        <input id="proportion" class="from-input" type="text" disabled placeholder="根据项目自动生成" 
          v-model="showProportion"
        />
    </div>
    <div class="from-item">
        <label for="income" class="from-label">应得收入</label>
        <input id="income" class="from-input" type="text" disabled placeholder="根据项目和人数自动生成"
          v-model="showIncome"
        />
    </div>
</div>
<div class="footer">
    <button type="button" class="btn" @click="applyPlay">提交游玩申请</button>
</div>
<van-popup
    v-model:show="merchantPopup"
    position="bottom"
    round
    class="popup"
>
    <div class="popup-head">
      <span class="func cancel" @click="merchantPopup = false">取消</span>
      <span>请选择商家</span>
      <span class="func confirm" @click="merchantConfirm">确认</span>
    </div>
    <div class="popup-box">
      <div v-for="item in dataProject" :key="item.id" class="item" 
        :class="[item.id === merchantDefault ? 'active' : '' ]" @click="merchantItemClick(item)"
      >
        {{ item.merchantName }}
      </div>
    </div>
  <!-- <div v-for="item in 10" :key="item" class="item">{{ item }}</div> -->
  
</van-popup>
<van-popup
    v-model:show="projectPopup"
    position="bottom"
    round
    class="popup"
>
    <div class="popup-head">
      <span class="func cancel" @click="projectPopup = false">取消</span>
      <span>请选择项目</span>
      <span class="func confirm" @click="projectConfirm">确认</span>
    </div>
    <div class="popup-box">
      <div v-for="item in projectData.project" :key="item.id" class="item" 
        :class="[item.id === projectDefault ? 'active' : '' ]" @click="projectItemClick(item)"
      >
        {{ item.name }}
      </div>
    </div>
  <!-- <div v-for="item in 10" :key="item" class="item">{{ item }}</div> -->
  
</van-popup>
</template>
<style lang="scss" scoped>
.from {
    padding: 0 20px;
    background-color: #fff;
    font-size: 14px;
}
.from-item {
    width: 100%;
    height: 50px;
    color: #3d3d3d;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:last-child {
        border-color: transparent;
    }
    .from-label {
        flex-shrink: 0;
        width: 100px;
        img {
            width: 24px;
            height: 24px;
            display: block;
            margin-left: 12px;
        }
    }
    .from-input {
        flex-grow: 1;
        height: 100%;
        line-height: 1;
    }
}
.right-icon {  
    font-size: 20px;
    color: #666666;
}
.popup {
    padding: 0 12px 20px;
    .popup-head {
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      .cancel {
        width: 60px;
        text-align: left;
        color: #999999;
      }
      .confirm {
        width: 60px;
        text-align: right;
        color: var(--default-color);
      }
    }
    .popup-cross {
        font-size: 24px;
        color: #999999;
    }
    .popup-box {
        max-height: 350px;
        overflow: auto;
    }
    .item {
        height: 50px;
        line-height: 30px;
        padding: 10px 0;
        font-size: 14px;
        text-align: center;
        color: #999999;
        &.active {
          font-weight: 600;
          color: var(--default-color);
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