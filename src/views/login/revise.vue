<script setup>
import { ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n'
import { showDialog } from 'vant';
import { useRouter } from 'vue-router'
import { userInfoStore } from '../../stores/user.js'
const { locale, t } = useI18n()
const infoStore = userInfoStore()
const router = useRouter()
const userInfo = reactive({
  usertype:  '1',
  mobile: '',
  password: '',
  confirmPassrowd: '',
  smscode: ''
})

const step = ref('1')
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
function nextStep(){
  const { mobile, password, confirmPassrowd, smscode } = userInfo
  const regMobile = new RegExp(/^[0-9]{11}$/)
  if(!regMobile.test(mobile)){
    console.log(t('tips.tips0'))
    showDialog({
      title: t('tips.tips0'),
      message: t('tips.tips6')
    })
    return false
  }
  if(mobile !== infoStore.mobile){
    showDialog({
      title: t('tips.tips0'),
      message: t('tips.tips10')
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
  step.value = '2'
}
// 修改密码
function register(){
  const { mobile, password, confirmPassrowd, smscode } = userInfo
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
  infoStore.SET_password(userInfo.password)
  showDialog({
    message: t('tips.tips14')
  }).then(()=>{
    router.replace({
      name: 'login'
    })
  })
}
</script>
<template>
<div class="login">
  <div class="title">修改密码</div>
  <div class="from" v-if="step === '1'">
    <div class="from-item">
      <label for="mobile" class="from-label">手机号</label>
      <input id="mobile" class="from-input" type="tel" max="11" :placeholder="$t('tips.tips3')" v-model="userInfo.mobile"/>
    </div>
    <div class="from-item">
      <label for="smsCode" class="from-label">验证码</label>
      <input id="smsCode" class="from-input" type="tel" max="6" :placeholder="$t('tips.tips5')" v-model="userInfo.smscode"/>
      <div class="sms">
        <span v-if="!smsIsSend" @click="getSms">{{ smsText }}</span>
        <span v-else>{{ smsCount }}秒</span>
      </div>
    </div>
    <button type="button" class="btn" @click="nextStep">下一步</button>
  </div>
  <div class="from" v-else>
    <div class="from-item">
      <label for="password" class="from-label">密码</label>
      <input id="password" class="from-input" type="password" :placeholder="$t('tips.tips9')" v-model="userInfo.password" />
    </div>
    <div class="from-item">
      <label for="confirmPassword" class="from-label">确认密码</label>
      <input id="confirmPassword" class="from-input" type="password" :placeholder="$t('tips.tips7')" v-model="userInfo.confirmPassrowd"/>
    </div>
    <button type="button" class="btn" @click="register">{{ $t('functions.modify') }}</button>
  </div>
  
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
.usertype {
  display: flex;
  div {
    height: 30px;
    width: 70px;
    color: #999999;
    border: 1px solid #999999;
    text-align: center;
    line-height: 14px;
    padding: 7px;
    margin-right: 20px;
    border-radius: 4px;
  }
  div.select {
    border-color: var(--default-color);
    background-color: var(--default-color);
    color: #fff;
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