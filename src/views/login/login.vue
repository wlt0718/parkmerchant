<script setup>
import { reactive, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { showDialog } from 'vant';
import { useRouter } from 'vue-router'
import { userInfoStore } from '../../stores/user.js'
import storage from '../../utils/storage';
import { setVantLangurage } from '../../utils/vantLangurage'
const router = useRouter()
const infoStore = userInfoStore()
const { locale, t } = useI18n()
function toRegister(){
  router.push({
    name: 'register'
  })
}
const languragePopShow = ref(false)
const langurageValue = ref([storage.storageGet('locale')])
const langurageList = computed(() => {
  return  [
  { text: t('langurage.chinese'), value: 'zh-CN' },
  { text: t('langurage.english'), value: 'en-US' },
  { text: t('langurage.indonesia'), value: 'id-ID' },
];
})
const onConfirm = ({ selectedOptions }) => {
  languragePopShow.value = false
  locale.value = selectedOptions[0].value
  storage.storageSet('locale', selectedOptions[0].value)
  setVantLangurage(selectedOptions[0].value)
};
const fromInfo = reactive({
  mobile: '',
  password: ''
})
function login(){
  if(!fromInfo.mobile || !fromInfo.password){
    showDialog({
      title: t('tips.tips0'),
      message: '请输入账号和密码'
    })
    return false
  }
  if(fromInfo.mobile !== infoStore.mobile || fromInfo.password !== infoStore.password ){
    showDialog({
      title: t('tips.tips0'),
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
  <div class="change-Lang"  @click="languragePopShow = true">{{ $t('functions.switchLanguage') }}</div>
  <div class="title">{{ $t('message.welcomeToUse') }}</div>
  <div class="from">
    <div class="from-item">
      <label for="mobile" class="from-label">
        <img src="../../assets/icon/user.png" alt="" />
      </label>
      <input id="mobile" class="from-input" type="number" max="11" :placeholder="t('tips.tips2')" v-model="fromInfo.mobile" />
    </div>
    <div class="from-item">
      <label for="password" class="from-label">
        <img src="../../assets/icon/lock.png" alt="" />
      </label>
      <input id="password" class="from-input" type="password" :placeholder="t('tips.tips3')" v-model="fromInfo.password"/>
    </div>
  </div>
  <p class="tips">
    <span>{{ $t('tips.tips11') }}<span class="blue" @touchend="toRegister">{{ $t('functions.register') }}</span></span>
    <span class="blue" @click="toRevise">{{ $t('functions.forgotpw') }}</span>
  </p>
  <button type="button" class="btn" @click="login">{{ $t('functions.login') }}</button>
</div>
<van-popup v-model:show="languragePopShow"
  position="bottom"
  round
  :style="{height:'35%'}"
>
  <van-picker
  v-model="langurageValue"
  :columns="langurageList"
  @cancel="languragePopShow = false"
  @confirm="onConfirm"
  />
</van-popup>
</template>

<style scoped lang="scss">
.login {
  margin: 0 20px 0;
  background-color: #f5f6f7;
  font-size: 14px;
}
.change-Lang {
  margin-top: 20px;
  font-size: 14px;
  text-align: right;
  color: var(--default-color);
}
.title {
  font-size: 24px;
  line-height: 1;
  margin-bottom: 50px;
  margin-top: 60px;
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