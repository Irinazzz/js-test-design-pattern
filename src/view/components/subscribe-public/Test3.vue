<template>
  <div>
    组织租户：
    <el-select v-model="tenant" placeholder="请选择" @change="onChange">
      <el-option
        v-for="item in tenantOptions"
        :key="item.value"
        :label="item.label"
        :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script>
import { EventBus } from "@/utils/eventBus.js";

export default {
  data() {
    return {
      tenant: "",
      tenantOptions: [],
    };
  },
  mounted() {
    this.getTenants();
  },
  methods: {
    onChange(data) {
      EventBus.emit('tenant', data);
    },

    async getTenants() {
      const res = await this.mockTenant();

      this.tenantOptions = res;
      this.tenant = this.tenantOptions[0];
      this.onChange(this.tenant);
    },

    mockTenant() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              label: "本地域-admin",
              value: "1",
            },
            {
              label: "本地域-aa",
              value: "2",
            },
            {
              label: "本地域-bb",
              value: "3",
            },
          ]);
        }, 500);
      });
    },
  },
};
</script>
<style scoped></style>
