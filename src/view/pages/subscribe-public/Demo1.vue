<template>
  <div>
    $parent 写法：
    <test-1 class="test" ref="test1"></test-1>
    <test-2 class="test" ref="test2"></test-2>
  </div>
</template>

<script>
import Test1 from '../../components/subscribe-public/Test1.vue';
import Test2 from '../../components/subscribe-public/Test2.vue';

export default {
  name: "About",
  components: {
    Test1,
    Test2,
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