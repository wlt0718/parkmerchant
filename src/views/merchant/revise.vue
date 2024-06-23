<script setup>
import { reactive } from 'vue'
import { userInfoStore } from '../../stores/user.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const infoStore = userInfoStore()

const fromInfo = reactive({
  name: infoStore.name,
  mobile: infoStore.mobile,
  address: infoStore.address,
  synopsis: infoStore.synopsis,
})
function revise(){
    infoStore.SET_mobile(fromInfo.mobile)
    infoStore.SET_name(fromInfo.name)
    infoStore.SET_address(fromInfo.address)
    infoStore.SET_synopsis(fromInfo.synopsis)
    router.replace({
       name: 'mine'
    })
}
</script>
<template>
<nav-bar />
<div class="from">
    <div class="from-item">
        <label for="name" class="from-label">商家名称</label>
        <input id="name" class="from-input" type="tel" max="11" placeholder="请输入商家名称" v-model="fromInfo.name"/>
    </div>
    <div class="from-item">
        <label for="mobile" class="from-label">手机号</label>
        <input id="mobile" class="from-input" type="tel" max="11" placeholder="请输入手机号" v-model="fromInfo.mobile"/>
    </div>
    <div class="from-item text">
        <label for="mobile" class="from-label">商家地址</label>
        <textarea id="mobile" class="from-textarea address" type="text" maxlength="30" placeholder="请输入地址" v-model="fromInfo.address" />
    </div>
    <div class="from-item text">
        <label for="mobile" class="from-label">商家简介</label>
        <textarea id="mobile" class="from-textarea" type="text" max="11" placeholder="请输入简介" v-model="fromInfo.synopsis"/>
    </div>
    <div class="from-item">
        <label for="mobile" class="from-label">商家图片</label>
        <input id="mobile" class="from-input" type="tel" max="11" placeholder="请点击上传" readonly />
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
  min-height: 50px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  align-items: center;
  &.text {
    padding: 10px 0;
    align-items: flex-start;
  }
  &:last-child {
    border-color: transparent;
  }
  .from-label {
    flex-shrink: 0;
    width: 100px;
    color: #999999;
  }
  .from-input {
    flex-grow: 1;
    height: 100%;
    line-height: 1;
    color: #333333;
  }
  .from-textarea {
    flex-grow: 1;
    height: 100px;
    resize: none;
    color: #333333;
    line-height: 1.2;
  }
  .from-textarea.address {
    flex-grow: 1;
    height: 50px;
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