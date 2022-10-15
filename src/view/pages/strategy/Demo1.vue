<template>
  <div class="login">
    <h3>不使用策略模式</h3>
    <el-form ref="ruleForm" :model="ruleForm" label-width="70px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phoneNumber">
        <el-input type="phoneNumber" v-model="ruleForm.phoneNumber"></el-input>
      </el-form-item>
      <el-button @click="onSubmit">登录</el-button>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'About',
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
        phoneNumber: '',
      }
    };
  },
  methods: {
    async onSubmit() {
      if (this.ruleForm.username === '') {
        this.$message({
          message: '用户名不能为空',
          type: 'error'
        });
        return false;
      }
      if (this.ruleForm.password.length < 6) {
        this.$message({
          message: '密码长度不能少于6位',
          type: 'error'
        });
        return false;
      }
      if (!/^1[3|5|8][0-9]{9}$/.test(this.ruleForm.phoneNumber)) {
        this.$message({
          message: '手机号码格式不正确',
          type: 'error'
        });
        return false;
      }
      const res = await login(this.ruleForm);
      this.$message({
        message: '登录成功',
        type: 'success'
      });
    }

  },
};
</script>
<style scoped>
.login {
  margin: auto; 
  width: 400px;
  text-align: center;
}
</style>
