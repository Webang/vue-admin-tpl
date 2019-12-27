<template>
  <div>
    <el-form
      class="login-form"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      v-loading="loading"
    >
      <h3 class="title">系统登录</h3>
      <el-form-item label prop="account">
        <el-input placeholder="登录账户" type="text" v-model="ruleForm.account" autocomplete="off" />
      </el-form-item>
      <el-form-item label prop="password">
        <el-input
          placeholder="登录密码"
          show-password
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        />
      </el-form-item>
      <el-button class="block" type="primary" size="large" @click="submitForm('ruleForm')">提交</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loading: false,
      ruleForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [{ required: true, message: '请填写账户', trigger: 'blur' }],
        password: [{ required: true, message: '请填写密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) this.doLogin()
      })
    },
    doLogin () {
      this.loading = true
      this.$store.dispatch('user/login').then(() => {
        this.loading = false
        this.$router.push('/')
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login-form {
  border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 320px;
  padding: 30px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    text-align: center;
    padding-bottom: 30px;
  }
  .form-btns {
    margin-top: 50px;
  }
  .block {
    display: block;
    width: 100%;
  }
}
</style>
