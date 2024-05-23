<script setup>
import { reactive } from 'vue'
import { showDialog } from 'vant';
import { useRouter } from 'vue-router'
import { userInfoStore } from '../../stores/user.js'
const router = useRouter()
const infoStore = userInfoStore()
function toRegister(){
  router.push({
    name: 'register'
  })
}

const fromInfo = reactive({
  mobile: '',
  password: ''
})
function login(){
  if(!fromInfo.mobile || !fromInfo.password){
    showDialog({
      title: '提示',
      message: '请输入账号和密码'
    })
    return false
  }
  if(fromInfo.mobile !== infoStore.mobile || fromInfo.password !== infoStore.password ){
    showDialog({
      title: '提示',
      message: '账号或密码错误，请重新输入'
    })
    return false
  }else{
    router.replace({
      name: 'home'
    })
  }
}
function toRevise(){
  router.push({
    name: 'revise'
  })
}
</script>
<template>
<div class="login">
  <div class="title">欢迎使用（商家端）</div>
  <div class="from">
    <div class="from-item">
      <label for="mobile" class="from-label">
        <img src="../../assets/icon/user.png" alt="" />
      </label>
      <input id="mobile" class="from-input" type="number" max="11" placeholder="请输入手机号" v-model="fromInfo.mobile" />
    </div>
    <div class="from-item">
      <label for="password" class="from-label">
        <img src="../../assets/icon/lock.png" alt="" />
      </label>
      <input id="password" class="from-input" type="password" placeholder="请输入密码" v-model="fromInfo.password"/>
    </div>
  </div>
  <p class="tips">
    <span>还没有账号？<span class="blue" @touchend="toRegister">立即注册</span></span>
    <span class="blue" @click="toRevise">忘记密码</span>
  </p>
  <button type="button" class="btn" @click="login">登录</button>
</div>
</template>

<style scoped lang="scss">
.login {
  margin: 80px 20px 0;
  background-color: #f5f6f7;
  font-size: 14px;
}
.title {
  font-size: 24px;
  line-height: 1;
  margin-bottom: 50px;
}
.tips {
  margin-top: 12px;
  line-height: 1;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  color: #999999;
}
.blue {
  color: var(--default-color);
}
.from-item {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  align-items: center;
  .from-label {
    flex-shrink: 0;
    width: 50px;
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
.btn {
  display: block;
  width: 200px;
  height: 44px;
  margin: 0 auto;
  margin-top: 110px;
  background-color: var(--default-color);
  color: #fff;
  font-size: 18px;
  text-align: center;
  line-height: 100%;
  border-radius: 30px;
}
</style>