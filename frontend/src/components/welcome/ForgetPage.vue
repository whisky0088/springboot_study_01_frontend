<script setup>
import {reactive} from "vue";

const form=reactive({
  email:'',
  code:''
})
</script>

<template>
  <div style="text-align: center;margin: 0 20px">
    <div style="margin-top: 150px">
      <div style="font-size: 25px;font-weight:bold">重置密码</div>
      <div style="font-size: 14px;color: grey">请输入需要重置密码的电子邮件地址</div>
    </div>
    <div style="margin-top:50px">
      <el-form :model="form" :rules="rules" @validate="onValidate" ref="formRef">

      </el-form>
    </div>
  </div>
</template>

<style scoped>

</style>