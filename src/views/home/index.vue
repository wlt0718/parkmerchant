<script setup>
import { userInfoStore } from '../../stores/user.js'
import { showDialog, showConfirmDialog  } from 'vant';
import { useRouter } from 'vue-router'
const router = useRouter()
const infoStore = userInfoStore()
const userType = infoStore.userType

const toAddPlay = () => {
    router.push({
        name: 'addplay'
    })
}
const toexamineGuide = () => {
    router.push({
        name: 'examineGuide'
    })
}
const toPlayList = () =>{
    router.push({
        name: 'playList'
    })
}
const examineGuide = () => {
    router.push({
        name: 'examineGuide'
    })
}
const toSettlement = () => {
    router.push({
        name: 'settlement'
    })
}
const toplayExamine = () => {
    router.push({
        name: 'playexamine'
    })
}
</script>
<template>
<div class="home">
    <div class="amounts">
        <div class="all">
            今日收入：<span>￥</span>1,000.00
        </div>
        <div class="info">
            <div class="info-item">
                <div class="amounts-label">未结算导游</div>
                <div class="amounts-value"><span>50</span>人</div>
            </div>
            <div class="info-item">
                <div class="amounts-label">结算总金额</div>
                <div class="amounts-value"><span>￥</span>1000.00</div>
            </div>
            <div class="info-item">
                <div class="amounts-label">未结算金额</div>
                <div class="amounts-value"><span>￥</span>500.00</div>
            </div>
        </div>
    </div>
    <div class="main">
       <div class="main-item" @click="toSettlement">
        <img src="../../assets/svg/merchantjs.svg" alt=""  class="add-img" />
            <div class="add-text">立即结算</div>
       </div>
       <div class="main-item">
            <div class="main-right-item" @click="examineGuide">
                <img src="../../assets/svg/dysh.svg" alt=""  class="right-img" />
                <span class="add-text">导游审核</span>
            </div>
            <div class="main-right-item" @click="toplayExamine">
                <img src="../../assets/svg/ywsh.svg" alt=""  class="right-img" />
                <span class="add-text">游玩审核</span>
            </div>
       </div>
    </div>

</div>
</template>
<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba($color: #276ace, $alpha: 0.1);
}
.amounts {
    margin: 12px;
    padding: 20px 12px;
    background: linear-gradient(-90deg, #29bdd9, #276ace);
    color: #ffffff;
    border-radius: 12px;
    .all {
        text-align: left;
        font-size: 22px;
        line-height: 22px;
        vertical-align: top;
        margin-bottom: 25px;
    }
    .info {
        font-size: 16px;
        display: flex;
        align-items: center;
        .info-item {
            width: 33%;
            text-align: left;
            .amounts-label {
                margin-bottom: 8px;
            }
        }
    }
}
.main {
    margin: 20px 12px 0;
    height: 160px;
    padding: 10px;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;

}
.main-item {
    width: 50%;
    text-align: center;
    border-right: 1px solid #b1c2ff;
    &:last-child {
        border-right: none;
    }
    .add-img {
        width: 80px;
        height: 80px;
        display: block;
        margin: 0 auto;
    }
    .add-text {
        margin-top: 15px;
        font-size: 24px;
        line-height: 1;
        color: #666666;
    }
}
.main-right-item {
    padding: 13px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #b1c2ff;
    &:last-child {
        border-bottom: none;
    }
    .right-img {
        width: 40px;
        height: 40px;
        display: block;
        font-size: 40px;
        padding-right: 12px;
    }
    .add-text {
        font-size: 20px;
        margin-top: 0;
    }
}
.van-icon {
    font-size: 30px;
    color: #5075FF;
}
.func {
    margin: 20px 12px 0;
    padding: 14px 0;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-around;
    .nav-item {
        text-align: center;
        .nav-text {
            font-size: 14px;
            line-height: 14px;
            color: #666666;
            margin-top: 8px;
        }
    }
}
</style>