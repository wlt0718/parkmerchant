<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { userMyPorjectStore } from '../../stores/project.js'
import { showConfirmDialog } from 'vant';
const route = useRoute()
const router = useRouter()
const userMyPorject = userMyPorjectStore()
// 表单内容
const projectFrom = reactive({
  id: '',
  name: '',
  amount: null,
  bili: null,
})

// 获取链接上的参数
const { type = '0', id = '' } = route.query
if (type === '0') {
  // 新增
} else {
  const data = userMyPorject.list.find(el => {
    return el.id === Number(id)
  })
  projectFrom.id = data.id
  projectFrom.name = data.name
  projectFrom.amount = data.amount
  projectFrom.bili = data.bili
}

const yongjin = computed(() =>{
  if (projectFrom.amount && projectFrom.bili){
    const one = (Number(projectFrom.amount) * Number(projectFrom.bili)) / 100
    return one.toFixed(2)
  } else {
    return ''
  }
})
function addProject(){
  if (type === '0') {
    projectFrom.id = userMyPorject.list[userMyPorject.list.length - 1].id + 1
    const data = projectFrom
    data.yongjin = yongjin.value
    userMyPorject.SET_list_add(data)
    showConfirmDialog({
      title: '提示',
      confirmButtonColor: '#5075ff',
      message:
        `新增成功，是否返回到项目列表？`,
    }).then(() => {
      router.go(-1)
    }).catch(() => {});
  } else {
    const data = projectFrom
    data.yongjin = yongjin.value
    userMyPorject.SET_list_change(data)
    showConfirmDialog({
      title: '提示',
      confirmButtonColor: '#5075ff',
      message:
        `修改成功，是否返回到项目列表？`,
    }).then(() => {
      router.go(-1)
    }).catch(() => {});
  }
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
      <label for="amount" class="from-label">项目费用</label>
      <input id="amount" class="from-input" type="number" placeholder="请输入项目费用" v-model="projectFrom.amount" />
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
      <input id="yongjin" class="from-input" type="number" placeholder="自动生成" v-model="yongjin" readonly style="color:#999999;"/>
    </div>
    <div class="from-item">
      <label for="smsCode" class="from-label">项目图片</label>
      <input id="smsCode" class="from-input" type="tel" max="6" placeholder="请点击上传项目图片" readonly/>
    </div>
  </div>
</div>
<div class="footer-box"></div>
<div class="footer">
  <div class="footer-btn">
    <van-button color="#5075ff" @click="addProject" round block
      :text="type === '0' ? '新增项目' : '修改项目'"
    >
    </van-button>
  </div>
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
  font-size: 14px;
  color: #333333;
  border-bottom: 1px solid #dddddd;
  display: flex;
  align-items: center;
  &:last-child {
    border-bottom: none;
  }
  .from-label {
    color: #999999;
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
.footer-box {
  height: 70px;
}
.footer {
  width: 100%;
  height: 60px;
  padding: 0 12px;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footer-btn {
    flex-grow: 1;
  }
}
</style>