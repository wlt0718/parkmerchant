<script setup>
import { ref, reactive } from 'vue';
import { showDialog } from 'vant';
import { useRouter } from 'vue-router'
import { userInfoStore } from '../../stores/user.js'
const infoStore = userInfoStore()
const router = useRouter()
const userInfo = reactive({
  mobile: '',
  password: '',
  confirmPassrowd: '',
  smscode: ''
})
function register(){
  const { mobile, password, confirmPassrowd, smscode } = userInfo
  const regMobile = new RegExp(/^[0-9]{11}$/)
  if(!regMobile.test(mobile)){
    showDialog({
      title: '提示',
      message: '请输入正确的手机号'
    })
    return false
  }
  if(!password){
    showDialog({
      title: '提示',
      message: '请输入密码'
    })
    return false
  }
  if(password !== confirmPassrowd){
    showDialog({
      title: '提示',
      message: '两次密码不一样'
    })
    return false
  }
  const regSms = new RegExp(/^\d{6}$/)
  if(!regSms.test(smscode)){
    showDialog({
      title: '提示',
      message: '验证码格式不正确'
    })
    return false
  }
  infoStore.SET_mobile(userInfo.mobile)
  infoStore.SET_password(userInfo.password)
  showDialog({
    message: '注册成功！去登录'
  }).then(()=>{
    router.replace({
      name: 'login'
    })
  })
}

/*验证码 */
const smsText = ref('获取验证码')
const smsIsSend = ref(false)
const smsCount = ref(60)
let smsTimer = null
function getSms(){
  smsIsSend.value = true
  smsTimer = setInterval(()=>{
    smsCount.value -= 1
    if(smsCount.value <= 0){
      smsText.value = '重新发送'
      smsIsSend.value = true
      clearInterval(smsTimer)
    }
  }, 1000)
}
</script>
<template>
<div class="login">
  <div class="title">账号注册</div>
  <div class="from">
    <div class="from-item">
      <label for="mobile" class="from-label">手机号</label>
      <input id="mobile" class="from-input" type="tel" max="11" placeholder="请输入手机号" v-model="userInfo.mobile"/>
    </div>
    <div class="from-item">
      <label for="password" class="from-label">密码</label>
      <input id="password" class="from-input" type="password" placeholder="长度8到16位 仅限字母数字" v-model="userInfo.password" />
    </div>
    <div class="from-item">
      <label for="confirmPassword" class="from-label">确认密码</label>
      <input id="confirmPassword" class="from-input" type="password" placeholder="请再次确认密码" v-model="userInfo.confirmPassrowd"/>
    </div>
    <div class="from-item">
      <label for="smsCode" class="from-label">验证码</label>
      <input id="smsCode" class="from-input" type="tel" max="6" placeholder="请输入手机验证码" v-model="userInfo.smscode"/>
      <div class="sms">
        <span v-if="!smsIsSend" @click="getSms">{{ smsText }}</span>
        <span v-else>{{ smsCount }}秒</span>
      </div>
    </div>
  </div>
  <button type="button" class="btn" @click="register">注册</button>
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
.from-item {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  align-items: center;
  &.type {
    border-bottom: none;
  }
  .from-label {
    flex-shrink: 0;
    width: 80px;
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
  letter-spacing: 5px;
}
.sms {
  width: 90px;
  text-align: right;
  color: var(--default-color);
}
</style>