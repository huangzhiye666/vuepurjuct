<template>
  <div>
      注册页面
  </div>
</template>

<script>
export default {
  created(){
    this.$http.get(this.$api.islogin).then(res =>{
        console.log(res);
    })
  }
}
</script>   

<style>

</style>

