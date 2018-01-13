<template>
    <div>
        <header>header</header>

        <!-- 根组件会有一些子组件, 我把这些子分为两种: 一种是子页面, 一种是页面布局结构 -->
        <router-view>

        </router-view>
        <!-- <app-regieter></app-regieter> -->
        
        <footer>footer</footer>
        测试是否成功渲染页面
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
            <h3><img src="/e4f8c17916974becf1c4b35d2d0171f7.png" alt=""></h3>
            </el-carousel-item>
          </el-carousel>
    </div>
</template>

<script>
// import login from "../component/login/Login.vue";
// export default {
//   components: {
//     appLogin: login
//   }
// };
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>