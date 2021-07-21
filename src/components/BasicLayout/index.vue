<template>
  <div>
    <Header :title="title"></Header>
    <Content><slot /></Content>
  </div>
</template>
<script>
import Content from "./Content.vue";
import Header from "./Header.vue";
export default {
  components: {
    Content,
    Header,
  },
  props: {
    title: String,
  },
};
</script>
