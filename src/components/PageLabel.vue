<script>
import { updateTextColor } from './utils'
export default {
  name: 'PageLabel',
  props: {
    type: {
      type: String,
      validator(value){
        return [ 'success', 'warning', 'danger' ].includes(value)
      }
    },
    /* 背景颜色 */
    bgColor: {
      type: String,
      validator(value){
        if(value[0] === '#' && value.length === 7 ){
          return true
        }else{
          return false
        }
      } 
    },
    /* 是否圆角 */
    radius: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style(){
      if(!this.bgColor){
        return {}
      }
      return {
        backgroundColor: this.bgColor,
        color: updateTextColor(this.bgColor)
      }
    }
  },
}
</script>
<template>
  <div
    class="page-label"
    :class="[
      type ? type : '',
      {
        'is-radius': radius
      }
    ]"
    :style="style"
  >
    <slot></slot>
  </div>
</template>
<style lang="scss">
$success-color: #67C23A;
$warning-color: #E6A23C;
$danger-color: #F56C6C;

@mixin label-styles($bg-color, $font-color: #FFFFFF) {
  background-color: $bg-color;
  color: $font-color;
}
.page-label {
  display: inline-block;
  padding: 6px 8px 6px;
  font-size: 12px;
  line-height: 12px;
  color: #FFFFFF;
  background-color: #5075FF;
}
.success {
  @include label-styles($success-color);
}
.warning {
  @include label-styles($warning-color);
}
.danger {
  @include label-styles($danger-color);
}
.is-radius {
  border-radius: 8px;
}
</style>