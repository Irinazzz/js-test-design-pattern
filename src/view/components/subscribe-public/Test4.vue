
<template>
  <div>{{tenant.label}}</div>
</template>
<script>
import { EventBus } from "@/utils/eventBus.js";
export default {
  data() {
    return {
      tenant:{}
    }
  },
  created() {
    EventBus.on('tenant', (tenant) => this.setData(tenant));
  },
  methods: {
    setData(tenant) {
      this.tenant = tenant;
    }
  },
  destroyed() {
    EventBus.off('tenant', (tenant) => this.setData(tenant));
  }
}
</script>
<style scoped>

</style>