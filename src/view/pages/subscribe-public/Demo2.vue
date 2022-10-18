<template>
  <div>
    发布订阅模式：
    <test-3 class="test" ref="test3"></test-3>
    <test-4 class="test" ref="test4"></test-4>
  </div>
</template>

<script>
import Test3 from '../../components/subscribe-public/Test3.vue';
import Test4 from '../../components/subscribe-public/Test4.vue';

export default {
  name: "About",
  components: {
    Test3,
    Test4,
  },
  data() {
    return {
    };
  },
  async created() {
  },
  methods: {
  },
};
</script>
<style scoped>
.test {
  margin: 50px;
  padding: 50px;
  border: 1px solid #000;
}
</style>