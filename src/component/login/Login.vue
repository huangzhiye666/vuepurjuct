<template>
  <div>
      登陆页面
  </div>
</template>

<script>
export default {

    //组件初始化完毕，自动调用
    created(){
        // console.log(data);
        //测试
        this.$http.get(this.$api.islogin).then( res=> {
            console.log(res.data);
            
        })
    }
};
</script>

<style>

</style>
