<template>
  <div>
    <h2>DEMO 1</h2>
    告警等级：
    <el-select v-model="level" placeholder="请选择">
      <el-option
        v-for="item in levelOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    告警状态：
    <el-select v-model="status" placeholder="请选择" style="margin-left: 16px">
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
  name: 'About',
  props: {
    msg: String,
  },
  data() {
    return {
      levelOptions: [],
      statusOptions: [],
      level: '1',
      status: '1',
    };
  },
  created() {
    this.getData();
  },
  mounted() {
  },
  methods: {
    async getData() {
      this.levelOptions = await cache.getDictionaryData(1);
      this.statusOptions = await cache.getDictionaryData(2);
    },
  },
};
</script>
