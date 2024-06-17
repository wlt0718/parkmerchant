<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import storage from '../../utils/storage';
import { setVantLangurage } from '../../utils/vantLangurage'
const { locale } = useI18n()

const langurageValue = ref([storage.storageGet('locale')])
const languragePopShow = ref(false)
const langurageList = [
  { text: '简体中文', value: 'zh-CN' },
  { text: '英语', value: 'en-US' },
  { text: '印度尼西亚语', value: 'id-ID' },
];
const onConfirm = ({ selectedOptions }) => {
  languragePopShow.value = false
  locale.value = selectedOptions[0].value
  storage.storageSet('locale', selectedOptions[0].value)
  setVantLangurage(selectedOptions[0].value)
};
</script>
<template>
<div class="nav-list">
  <div class="nav-item" @click="languragePopShow = true">
    <van-icon name="exchange" class="left-icon" />
    <span>切换语言</span>
    <van-icon name="arrow" class="right-icon" />
  </div>
</div>
<p>{{ $t('message.welcomeToUse') }}</p>
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
<style lang="scss" scoped>
.nav-list {
  width: 100%;
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