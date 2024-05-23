<script setup>
import { reactive } from 'vue'
import { userInfoStore } from '../../stores/user.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const infoStore = userInfoStore()

const fromInfo = reactive({
  name: infoStore.name,
  mobile: infoStore.mobile,
})
function revise(){
    infoStore.SET_mobile(fromInfo.mobile)
    infoStore.SET_name(fromInfo.name)
    router.replace({
       name: 'mine'
    })
}
</script>
<template>
<div class="from">
    <div class="from-item">
        <label for="name" class="from-label">昵称</label>
        <input id="name" class="from-input" type="tel" max="11" placeholder="请输入昵称" v-model="fromInfo.name"/>
    </div>
    <div class="from-item">
        <label for="mobile" class="from-label">手机号</label>
        <input id="mobile" class="from-input" type="tel" max="11" placeholder="请输入手机号" v-model="fromInfo.mobile"/>
    </div>
</div>
<button type="button" class="btn" @click="revise">确认修改</button>
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
  border-bottom: 1px solid #dddddd;
  display: flex;
  align-items: center;
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