<template>
  <div class="login">
    <h3>使用策略模式</h3>
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
import doValidate from './validator';
import { strategies } from './strategies';

export default {
  name: 'About',
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
        phoneNumber: '',
      },
      rule: [
        {
          key: 'username',
          type: 'isNotEmpty',
          msg: '用户名不能为空',
        },
        {
          key: 'password',
          type: 'minLenth:6',
          msg: '密码最低为6位',
        },
        {
          key: 'phoneNumber',
          type: 'isMobile',
          msg: '手机号码格式不正确',
        }
      ]
    };
  },
  methods: {
    async onSubmit() {
      const validate_result = doValidate({
        value: this.ruleForm,
        rules: this.rule,
      }); 

      if (validate_result.state) {
        this.$message({
          message: '登录成功',
          type: 'success'
        });
      } else {
        this.$message({
          message: validate_result.msg,
          type: 'error'
        });
      }
    },
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
