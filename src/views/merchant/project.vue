<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { userPlayListStore } from '../../stores/playlist.js'
import { showDialog } from 'vant';
import { useRouter } from 'vue-router'
const router = useRouter()
const data = ref([
  {
    id: '001',
    name: '游艇',
    amount: 40,
    bili: 10,
    yongjin: 4,
    isCheck: false
  },
  {
    id: '002',
    name: '摩天轮',
    amount: 100,
    bili: 10,
    yongjin: 10,
    isCheck: false
  },
  {
    id: '003',
    name: '海盗船',
    amount: 60,
    bili: 5,
    yongjin: 3,
    isCheck: false
  },
  {
    id: '004',
    name: '激情冲浪',
    amount: 80,
    bili: 10,
    yongjin: 8,
    isCheck: false
  },
  {
    id: '005',
    name: '激情冲浪',
    amount: 80,
    bili: 10,
    yongjin: 8,
    isCheck: false
  }
])
const checkedAll = computed({
    get(){
        return data.value.every(el => { return el.isCheck })
    },
    set(value){
        data.value.forEach(el =>{
            el.isCheck = value
        })
    }
})
function addProject(){
  router.push({
    name: 'addProject'
  })
}
const changePopup = ref(false)
const showData = reactive({
  name: '',
  amounts: '',
  bili: null,
  yongjin: null
})
function change(item) {
  router.push({
    name: 'addProject'
  })
  // changePopup.value = true
}
</script>
<template>
<div class="page">
  <div class="project-list">
    <van-swipe-cell class="project-item" v-for="item in data" :key="item.id">
      <div class="pitem">
        <van-checkbox v-model="item.isCheck" :name="item.id" class="checkbox"></van-checkbox>
        <img src="" alt="" class="item-left" />
        <div class="item-right">
          <div>项目名称：{{ item.name }}</div>
          <div>项目费用：{{ item.amount }} 元</div>
          <div>佣金比例：{{  item.bili }} %</div>
          <div>佣金：{{ item.yongjin }} 元</div>
        </div>
      </div>
      <template #right>
        <van-button square text="修改" type="warning" class="delete-button" @click="change(item)" />
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </div>
</div>
<div class="footer">
    <van-checkbox
        class="checkall"
        v-model="checkedAll"
    >全选
    </van-checkbox>
    <div class="del" @click="delExamine">批量删除</div>
    <button type="button" class="btn" @click="addProject">新增项目</button>
</div>
<van-popup
  v-model:show="changePopup"
  position="center"
  round
  closeable
  class="popup"
>
    <div class="popuptitle">修改项目</div>
    <div class="from-item">
      <label for="name" class="from-label">
        项目名称
      </label>
      <input id="name" class="from-input" type="text" v-model="showData.name"  />
    </div>
    <div class="from-item">
      <label for="amounts" class="from-label">
        项目费用
      </label>
      <input id="amounts" class="from-input" type="text" v-model="showData.amounts"  />
    </div>
    <div class="from-item">
      <label for="bl" class="from-label">
        佣金比例
      </label>
      <input id="bl" class="from-input" type="text" v-model="showData.bili"  />
    </div>
    <div class="from-item">
      <label for="yj" class="from-label">
        佣金
      </label>
      <input id="yj" class="from-input" type="text" v-model="showData.佣金"  />
    </div>
    <button type="button" class="btn" @click="confirmAdd">确认修改</button>
</van-popup>

</template>
<style lang="scss" scoped>
.page {
  margin: 12px;
  background-color: #f5f5f5;
  padding-bottom: 80px;
}
.project-item {
  padding: 12px;
  padding-right: 0;
  margin-bottom: 12px;
  font-size: 14px;
  color: #666666;
  border-radius: 10px;
  background-color: #ffffff;
  .pitem {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .checkbox {
        flex-shrink: 0;
        margin-right: 10px;
      }
  .item-left {
    display: inline-block;
    width: 120px;
    height: 90px;
    flex-shrink: 0;
    margin-right: 15px;
  }
  .item-right {
    display: inline-block;
    font-size: 14px;
    div {
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .delete-button {
    height: 100%;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    .checkall {
        width: 80px;
    }
    .del {
        color: #f56c6c;
        font-size: 14px;
    }
    .btn {
        display: block;
        width: 180px;
        height: 44px;
        background-color: var(--default-color);
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 100%;
        border-radius: 30px;
    }
}
.popup {
    width: 80%;
    padding: 15px;
    .popuptitle {
        text-align: center;
        padding: 15px 0;
        font-size: 16px;
    }
    .btn {
        display: block;
        width: 200px;
        height: 44px;
        margin: 0 auto;
        margin-top: 20px;
        background-color: var(--default-color);
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 100%;
        border-radius: 30px;
    }
}
.from-item {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  align-items: center;
  font-size: 14px;
  .from-label {
    flex-shrink: 0;
    width: 80px;
  }
  .from-input {
    flex-grow: 1;
    height: 100%;
    line-height: 1;
  }
}
</style>