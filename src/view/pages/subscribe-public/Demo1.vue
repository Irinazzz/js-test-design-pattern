<template>
  <div>
    $parent 写法：
    <test-1 class="test" ref="test1"></test-1>
    <test-2 class="test" ref="test2"></test-2>
    发布订阅模式：
    <test-3 class="test" ref="test3"></test-3>
    <test-4 class="test" ref="test4"></test-4>
  </div>
</template>

<script>
import Test1 from '../../components/subscribe-public/Test1.vue';
import Test2 from '../../components/subscribe-public/Test2.vue';
import Test3 from '../../components/subscribe-public/Test3.vue';
import Test4 from '../../components/subscribe-public/Test4.vue';

export default {
  name: "About",
  components: {
    Test1,
    Test2,
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