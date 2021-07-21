<template>
  <div class="header">
    <i class="el-icon-arrow-left icon" @click="back"></i>
    {{ title }}
  </div>
</template>
<script>
export default {
  props: {
    title: String,
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.header {
  text-align: center;
  position: fixed;
  height: 32px;
  line-height: 32px;
  width: 100%;
}
.header .icon {
  position: absolute;
  left: 0;
  top: 4px;
  font-size: 1.5rem;
}
</style>
