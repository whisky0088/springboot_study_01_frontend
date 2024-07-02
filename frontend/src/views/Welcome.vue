<script setup>
</script>

<template>
  <div style="width:100vw;height:100vh;overflow:hidden;display:flex">
    <div style="flex: 1;background-color: dodgerblue">
      <el-image
          style="width: 100%;height: 100%"
          fit="cover"
          src="https://img.shetu66.com/2023/07/04/1688440558911230.png"
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