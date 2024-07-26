<script setup>
import { ref, reactive } from 'vue';
import { showDialog } from 'vant';
import { useRouter } from 'vue-router'
import { userInfoStore } from '../../stores/user.js'
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
const infoStore = userInfoStore()
const router = useRouter()
const userInfo = reactive({
  mobile: '',
  password: '',
  confirmPassrowd: '',
  smscode: '',
  name: ''
})
function register(){
  const { mobile, password, confirmPassrowd, smscode } = userInfo
  const regMobile = new RegExp(/^[0-9]{11}$/)
  if(!regMobile.test(mobile)){
    showDialog({
      title: t('tips.tips0'),
      message: t('tips.tips6')
    })
    return false
  }
  if(!password){
    showDialog({
      title: t('tips.tips0'),
      message: t('tips.tips3')
    })
    return false
  }
  if(password !== confirmPassrowd){
    showDialog({
      title: t('tips.tips0'),
      message: t('tips.tips13')
    })
    return false
  }
  const regSms = new RegExp(/^\d{6}$/)
  if(!regSms.test(smscode)){
    showDialog({
      title: t('tips.tips0'),
      message: t('tips.tips12')
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
  <div class="title">注册账号</div>
  <div class="from">
    <div class="from-item">
      <label for="name" class="from-label">名称</label>
      <input id="name" class="from-input" type="text":placeholder="$t('tips.tips1')" v-model="userInfo.name"/>
    </div>
    <div class="from-item">
      <label for="mobile" class="from-label">手机号</label>
      <input id="mobile" class="from-input" type="tel" max="11" :placeholder="$t('tips.tips2')" v-model="userInfo.mobile"/>
    </div>
    <div class="from-item">
      <label for="password" class="from-label">密码</label>
      <input id="password" class="from-input" type="password" :placeholder="$t('tips.tips9')" v-model="userInfo.password" />
    </div>
    <div class="from-item">
      <label for="confirmPassword" class="from-label">确认密码</label>
      <input id="confirmPassword" class="from-input" type="password" :placeholder="$t('tips.tips7')" v-model="userInfo.confirmPassrowd"/>
    </div>
    <div class="from-item">
      <label for="smsCode" class="from-label">验证码</label>
      <input id="smsCode" class="from-input" type="tel" max="6" :placeholder="$t('tips.tips5')" v-model="userInfo.smscode"/>
      <div class="sms">
        <span v-if="!smsIsSend" @click="getSms">{{ smsText }}</span>
        <span v-else>{{ smsCount }}秒</span>
      </div>
    </div>
  </div>
  <button type="button" class="btn" @click="register">{{ $t('functions.register') }}</button>
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