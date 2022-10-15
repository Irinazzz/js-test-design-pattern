<template>
  <div>
    <h2>DEMO 2 -------- 用户名：{{ name }}</h2>
    风险状态：
    <el-select v-model="statusValue" placeholder="请选择">
      <el-option
        v-for="item in statusOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import cache from '@/store/cache';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      statusOptions: [],
      statusValue: '1',
      name: '',
    };
  },
  async created() {
    await this.getData();
  },
  methods: {
    async getData() {
      this.statusOptions = await cache.getDictionaryData(1);
      const { name } = await cache.getUserInfo();
      this.name = name;
    },
  },
};
</script>
