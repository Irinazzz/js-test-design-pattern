import { ref } from '@vue/composition-api';

function dealLoading(asyncFunction) {
  const loading = ref(null);
  const data = ref(null);

  function showLoading() {
    loading.value = true;
  }
  function cancelLoading() {
    loading.value = false;
  }
  function initData() {
    data.value = null;
  }
  const requestData = async () => {
    const response = await asyncFunction();
    data.value = response;
  }
  function error(e) {
    console.log('错误处理', e);
  }

  const execute = async () => {
    // 请求开始时，设置 loading 为 true，清除已有数据和 error 状态
    showLoading();
    initData();
    try {
      await requestData();
    } catch (e) {
      error(e);
    } finally {
      cancelLoading();
    }
  };

  return { execute, loading, data };
}

export default dealLoading;
