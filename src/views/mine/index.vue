<script setup>
import { userInfoStore } from '../../stores/user.js'
import { useRouter } from 'vue-router'
import { ref,reactive } from 'vue';
const infoStore = userInfoStore()
const router = useRouter()
const popupShow = ref(false)
const qrcodeValue = reactive({
  color: { dark: '#000000ff', light: '#ffffff' },
  type: 'image/png',
  value: 'https://wlt0718.github.io/park-visitor/#/merchantinfo?type=m',
  width: 300
})
const reviseMyInfo = () => {
    router.push({
        name: 'merchantRevise'
    })
}
const toexamineGuide = () => {
    router.push({
        name: 'examineGuide'
    })
}
// 去我的项目
const toMyproject = () =>{
    router.push({
        name: 'project'
    })
}
const tomyGuide = () => {
    router.push({
        name: 'myguide'
    })
}
const tojiesuanhis = () => {
    router.push({
        name: 'jiesuanhis'
    })
}
const toguidehis = () =>{
    router.push({
        name: 'guidehis'
    })
}
function toOrder(){
    router.push({
        name: 'order'
    })
}
</script>
<template>
<div class="header">
    <div class="header-name">
        <div class="userinfo">
            <div class="name">
                <span>{{ infoStore.name }}</span>
                <span class="label">商家</span>
            </div>
        </div>
        <div class="change">
            <span @click="reviseMyInfo">修改信息</span>
        </div>
    </div>
    <div class="adress">地址： {{ infoStore.address }}</div>
</div>
<div class="nav-list">
    <div class="nav-item" @click="toMyproject">
        <van-icon name="wap-home-o" class="left-icon" />
        <span>我的项目</span>
        <van-icon name="arrow" class="right-icon" />
    </div>
    <div class="nav-item" @click="popupShow = true">
        <van-icon name="wap-home-o" class="left-icon" />
        <span>我的二维码</span>
        <van-icon name="arrow" class="right-icon" />
    </div>
    <div class="nav-item" @click="tomyGuide">
        <van-icon name="wap-home-o" class="left-icon" />
        <span>名下导游</span>
        <van-icon name="arrow" class="right-icon" />
    </div>
    <div class="nav-item" @click="toOrder">
        <van-icon name="wap-home-o" class="left-icon" />
        <span>游客订单</span>
        <van-icon name="arrow" class="right-icon" />
    </div>
    <div class="nav-item" @click="toguidehis">
        <van-icon name="wap-home-o" class="left-icon" />
        <span>导游审核历史</span>
        <van-icon name="arrow" class="right-icon" />
    </div>
    <div class="nav-item"  @click="tojiesuanhis">
        <van-icon name="balance-o" class="left-icon" />
        <span>结算历史</span>
        <van-icon name="arrow" class="right-icon" />
    </div>
</div>
<van-popup v-model:show="popupShow" position="bottom"
  closeable 
    round :style="{height:'95%'}"
>
    <div class="order">
      <div class="body">
        <div class="name">上海迪士尼</div>
        <div class="desc">
          游客扫码下单
        </div>
      </div>
      <div class="couponlist">
        <vue-qrcode :value="qrcodeValue.value" :width="qrcodeValue.width" :type="qrcodeValue.type"
          :color="qrcodeValue.color"
        >
        </vue-qrcode>
      </div>
    </div>
  </van-popup>
</template>
<style lang="scss" scoped>
.header {
    background-color: #fff;
    width: 100%;
    padding: 20px 12px 12px;
    line-height: 1;
    .header-name {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    .userinfo {
        .name {
            font-size: 18px;
            display: flex;
            align-items: center;
            .label {
                margin-left: 15px;
                padding: 4px 10px;
                border-radius: 3px;
                background-color: #881391;
                font-size: 12px;
                color: #fff;
            }
        }
    }
    .change {
        color: #5075ff;
        font-size: 14px;
    }
    .adress {
        font-size: 12px;
        color: #999999;
    }
}
.nav-list {
    width: 100%;
    margin-top: 18px;
    padding: 0 12px;
    background-color: #fff;
}
.nav-item {
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f5f6f7;
    &:last-child {
        border-color: transparent;
    }
    .left-icon {
        font-size: 24px;
        color: #5075FF;
    }
    span {
        margin-left: 15px;
        flex-grow: 1;
        font-size: 16px;
        color: #333333;
    }
    .right-icon {
        font-size: 20px;
        color: #666666;
    }
}
.order {
  padding-top: 15px;
  margin-top: 80px;
  background-color: #ffffff;
  text-align: center;
  img {
    margin: 0 auto;
    width: 300px;
  }
  .body {
    text-align: center;
    .name {
        font-size: 16px;
        color: #333333;
        font-weight: bold;
        margin: 10px 0;
    }
    .desc {
      font-size: 14px;
      color: #999999;
    }
  }
}
.time {
  font-size: 14px;
  color: #333333;
  margin-bottom: 20px;
}
</style>