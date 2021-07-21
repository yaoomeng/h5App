<template>
  <BasicLayout title="登录">
    <template>
      <div class="login-input">
        <div class="border"><input type="text" placeholder="手机号" /></div>
        <div class="border">
          <input type="password" placeholder="请输入登录密码" />
        </div>
      </div>
      <div class="login-wrapper">
        <el-button class="login-btn" type="primary" round>登录</el-button>
        <div class="login-bar">
          <div class="forget">
            <el-link type="primary">忘记密码？</el-link>
          </div>
          <div class="register">
            <el-link type="primary" @click="register">立即注册</el-link>
          </div>
        </div>
      </div>
      <div class="flex-box">
        <div class="recommend-border"></div>
        推荐使用微信登录
        <div class="recommend-border"></div>
      </div>
      <div class="chat-login">
        <el-button class="chat-button" type="primary" round>
          微信一键登录
        </el-button>
      </div>
      <div class="protocol">登录注册协议，隐私</div>
    </template>
  </BasicLayout>
</template>
<script>
import BasicLayout from "../../components/BasicLayout/index.vue";
export default {
  data() {
    return {};
  },
  components: {
    BasicLayout,
  },
  methods: {
    register() {
      this.$router.push({ name: "Register" });
    },
  },
};
</script>
<style scoped>
.login-input {
  margin: 50px 30px 50px;
}
.border {
  border-bottom: 1px solid #606266;
  height: 50px;
  position: relative;
}
input {
  outline: none;
  border: 0;
  /* background-color: rgba(0, 0, 0, 0); */
  font-size: 15px;
  position: absolute;
  bottom: 2px;
}
.login-wrapper {
  width: 90%;
  margin: 50px auto;
}
.flex-box {
  display: flex;
  margin: 100px auto 50px;
}
.flex-box .recommend-border {
  flex: 1;
  border-bottom: 1px solid black;
  margin: auto 10px;
}
.login-btn {
  width: 100%;
  display: block;
  margin: 0px auto;
  background-color: #8cc5ff;
  border: none;
  font-size: 15px;
}
.login-bar {
  position: relative;
  margin: 5px 0;
}
.login-bar .forget {
  position: absolute;
  left: 10px;
}
.login-bar .register {
  position: absolute;
  right: 10px;
}
.el-link.el-link--primary {
  color: #8cc5ff;
}

.chat-login {
  width: 90%;
  margin: auto;
}
.chat-button {
  width: 100%;
}
.chat-login .el-button--primary {
  background-color: #67c23a;
  border: none;
}
.protocol {
  text-align: center;
  margin-top: 20px;
}
</style>
