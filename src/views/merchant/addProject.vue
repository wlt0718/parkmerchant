<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { userPlayListStore } from '../../stores/playlist.js'
import { showDialog } from 'vant';
const projectFrom = reactive({
  name: '',
  amounts: null,
  bili: null,
})
const yongjin = computed(() =>{
  if (projectFrom.amounts && projectFrom.bili){
    const one = (Number(projectFrom.amounts) * Number(projectFrom.bili)) / 100
    return one.toFixed(2)
  } else {
    return ''
  }
})
function addProject(){
  showDialog({
    title: '提示',
    message: '新增成功'
  })
}
</script>
<template>
<div class="page">
  <div class="from">
    <div class="from-item">
      <label for="name" class="from-label">项目名称</label>
      <input id="name" class="from-input" type="tel" max="11" placeholder="请输入项目名称" v-model="projectFrom.name"/>
    </div>
    <div class="from-item">
      <label for="amounts" class="from-label">项目费用</label>
      <input id="amounts" class="from-input" type="number" placeholder="请输入项目费用" v-model="projectFrom.amounts" />
      <div style="flex-shrink: 0;">元 / 位</div>
    </div>
    <div class="from-item">
      <label for="bili" class="from-label">佣金比例</label>
      <input id="bili" class="from-input" type="number" placeholder="请输入佣金比例" v-model="projectFrom.bili"/>
      <div class="sms">
        %
      </div>
    </div>
    <div class="from-item yj">
      <label for="yongjin" class="from-label">佣金（元）</label>
      <input id="yongjin" class="from-input" type="number" placeholder="自动生成" v-model="yongjin" readonly/>
    </div>
    <div class="from-item">
      <label for="smsCode" class="from-label">项目图片</label>
      <input id="smsCode" class="from-input" type="tel" max="6" placeholder="请点击上传项目图片" readonly/>
    </div>
  </div>
</div>
<div class="footer">
    <button type="button" class="btn" @click="addProject">新增项目</button>
</div>
</template>
<style lang="scss" scoped>
.page {
  margin: 12px;
}
.from {
  padding: 0 12px;
  background-color: #ffffff;
  border-radius: 10px;
}
.from-item {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  align-items: center;
  &:last-child {
    border-bottom: none;
  }
  .from-label {
    flex-shrink: 0;
    width: 100px;
  }
  .from-input {
    width: 0;
    flex-grow: 1;
    height: 100%;
    line-height: 1;
  }
}
.footer {
    width: 100%;
    height: 70px;
    padding: 10px 12px 18px;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    .btn {
        display: block;
        width: 100%;
        height: 44px;
        background-color: var(--default-color);
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 100%;
        border-radius: 30px;
    }
}
</style>