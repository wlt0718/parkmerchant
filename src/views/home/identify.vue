<script setup>
import { useRouter } from 'vue-router'
import { QrcodeStream } from 'vue-qrcode-reader'
import { ref } from 'vue';

const result = ref('')
function onDecode(result) {
      result.value = result
    }
function onInit(promise) {
      promise.then(() => {
        console.log('成功初始化摄像头')
      }).catch(error => {
        if (error.name === 'NotAllowedError') {
          console.error('用户拒绝了摄像头访问权限')
        } else if (error.name === 'NotFoundError') {
          console.error('没有找到摄像头设备')
        } else {
          console.error('初始化摄像头时发生错误:', error)
        }
      })
    }
</script>
<template>
<div class="qrcode">
  <qrcode-stream @decode="onDecode" @init="onInit"></qrcode-stream>
</div>
<div>
  {{ result }}
</div>
</template>
<style lang="scss" scoped>
.qrcode {
  width: 100%;
  height: 90%;
}
</style>