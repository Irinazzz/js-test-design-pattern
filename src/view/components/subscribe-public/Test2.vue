
<template>
  <div>{{tenant.label}}</div>
</template>
<script>
export default {
  data() {
    return {
      tenant:{}
    }
  },
  methods: {
    // getTenant() {
    //   this.tenant = this.$parent.$refs.test1.tenant;
    // },
    setData(tenant) {
      this.tenant = tenant;
    }
  }
}
</script>
<style scoped>

</style>