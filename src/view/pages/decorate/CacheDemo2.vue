<template>
  <div>
    <h2>缓存示例2  {{ name }}</h2>
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
    await this.getName();
  },
  methods: {
    async getData() {
      const options = await cache.getDictionaryData();
      this.statusOptions = options[1];
    },

    async getName() {
      const { name } = await cache.getUserInfo();
      this.name = name;
    }
  },
};
</script>
