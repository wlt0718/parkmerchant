<script>
export default {
  name: 'PageButton',
  props: {
    type: {
      type: String,
      validator(value){
        return [ 'primary', 'success', 'warning', 'danger', 'info' ].includes(value)
      }
    },
    /* 是否禁用 */
    disabled: {
      type: Boolean,
      default: false 
    },
    /* 按钮颜色 */
    color: String,

    /* 是否圆角 */
    radius: {
      type: Boolean,
      default: false
    }
  },
  emits: {

  },
  setup(props){

  }
}
</script>
<template>
  <button 
    type="button"
    :disabled="disabled"
    class="page-button"
    :class="[
      type ? type : '',
      {
        'is-radius': radius,
        'is-disabled': disabled
      }
    ]"
  >
    <slot></slot>
  </button>
</template>
<style lang="scss">
@mixin button-styles($bg-color, $border-color, $font-color: #fff) {
  background-color: $bg-color;
  color: $font-color;
  border-color: $border-color;
  &:active {
    background-color: darken($bg-color, 20%);
    border-color: darken($border-color, 20%);
  }
}
.page-button {
  display: block;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;
  @include button-styles(#FFFFFF, #5075FF, #5075FF);
}
.primary {
  @include button-styles(#5075FF, #5075FF);
}

.is-radius {
  border-radius: 20px;
}
.is-disabled {
  opacity: 0.8;
  cursor: not-allowed;
}
</style>