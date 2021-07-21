<template>
  <BasicLayout title="注册">
    <div class="selected-box">
      <el-button class="login" type="primary" round @click="toPersonReg"
        >个人用户注册</el-button
      >
      <el-button class="chat-button" type="primary" round>
        宜老团注册
      </el-button>
    </div>
  </BasicLayout>
</template>
<script>
import BasicLayout from "../../components/BasicLayout/index.vue";
export default {
  components: {
    BasicLayout,
  },
  methods: {
    toPersonReg() {
      this.$router.replace({ name: "Personal" });
    },
  },
};
</script>
<style scoped>
.selected-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 90%;
  margin: auto;
}
.el-button + .el-button {
  margin: 50px 0;
}
</style>
