<script setup>
</script>

<template>
  <div style="width:100vw;height:100vh;overflow:hidden;display:flex">
    <div style="flex: 1;background-color: dodgerblue">
      <el-image
          style="width: 100%;height: 100%"
          fit="cover"
          src="https://ts1.cn.mm.bing.net/th/id/R-C.c43197c3232a473e7123019f1c0e83ad?rik=dP1L%2f9d2HZE1EA&riu=http%3a%2f%2fbbsfiles.vivo.com.cn%2fvivobbs%2fattachment%2fforum%2f201601%2f06%2f113404b4pmivt51dddntgg.jpg&ehk=RDePoIFnpYdbM5QGBVO%2bUN1La1wr4FASlacGX%2btVbjw%3d&risl=&pid=ImgRaw&r=0"
      />
    </div>
    <div class="welcome-title">
      <div style="font-size:30px;font-weight:bold">欢迎来到我们的学习平台</div>
    </div>
    <div style="width: 400px;background-color: white;z-index: 1">
      <router-view v-slot="{Component}">
        <transition name="el-fade-in-linear" mode="out-in">
          <component :is="Component" style="height: 100%"/>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.welcome-title{
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  text-shadow: 0 0 10px white;
}
</style>