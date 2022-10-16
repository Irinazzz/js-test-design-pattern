<template>
  <div>
    <el-form ref="loginForm" :model="loginForm" label-width="70px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phoneNumber">
        <el-input type="phoneNumber" v-model="loginForm.phoneNumber"></el-input>
      </el-form-item>
      <el-button @click="onSubmit">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import base64 from "@/utils/base64.js";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      const params = {
        name: this.loginForm.username,
        password: base64.encode(this.loginForm.password),
        phoneNumber: this.loginForm.phoneNumber,
      };
      const { code, data } = await this.mockLogin(params);

      if (code === 200) {
        window.localStorage.setItem("token", data.token);
        this.$message({
          message: "登录成功",
          type: "success",
        });
      } else {
        this.$message({
          message: "登录失败",
          type: "error",
        });
      }
      this.log();
    },

    log(){
      alert('点击了按钮');
    },

    mockLogin(data) {
      console.log(data);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            code: 200,
            data: { 
              token: "asldjfldsafklnerljgoiejfoiew",
              username: data.username,
            },
          });
        }, 500);
      });
    },
  },
};
</script>
