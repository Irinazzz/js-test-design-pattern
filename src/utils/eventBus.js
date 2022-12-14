// 所有订阅对象
const observersMap = {};

/**
 * 订阅
 * @param {*} key 订阅对象 key 值 
 * @param {*} fn 发布后通知时触发的回调函数
 */
const listen = function (key, fn) {
  // 若首次订阅，先赋初始值
  if (!observersMap[key]) {
    observersMap[key] = [];
  }
  // 依次保存
  observersMap[key].push(fn);
};

/**
 * 发布
 */
const trigger = function (key,...args) {
  // 取出对应时间的所有订阅者
  const fns = observersMap[key] || [];

  // 依次执行其回调函数
  fns.forEach(fn => {
    fn.apply(this, args);
  });
};

/**
 * 取消
 */
const remove = function (key, fn) {
  const fns = observersMap[key];

  // 若无人订阅
  if (!fns) {
    return false;
  }
  // 有人订阅，但未传取消的具体函数，即全部清空
  if (!fn) {
    fns && (fns.length = 0);
  } else {
    let findIndex = -1;
    // 剔除对应数组中的函数
    for (let i = 0; i < fns.length; i++) {
      if (fns[i] === fn) {
        findIndex = i;
        break;
      }
    }
    if (findIndex !== -1) {
      fns.splice(findIndex, 1);
    }
  }
};

// 同一种功能可能会见到不同名字，这里都导出去
export const EventBus = {
  listen,
  on: listen,
  remove,
  off: remove,
  trigger,
  emit: trigger,
};
