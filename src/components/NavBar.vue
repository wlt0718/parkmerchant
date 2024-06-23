<script>
export default {
  name: 'NavBar',
  data(){
    return {
      title: '',
    }
  },
  created(){
    this.title = this.$route.meta.title
  },
  methods: {
    onClickLeft(){
      console.log(this.$router)
      this.$router.go(-1)
    }
  }
}
</script>
<template>
<van-nav-bar
  :title="title"
  left-text="返回"
  left-arrow
  placeholder
  fixed
  @click-left="onClickLeft"
/>
</template>
<style lang="scss">

</style>