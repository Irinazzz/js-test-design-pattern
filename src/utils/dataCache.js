import decorate from './decorate';

const cacheMap = new Map();

/**
 * @param {*} target 所属类
 * @param {*} name 修饰的方法属性名
 * @param {*} descriptor 描述对象，即方法的数据树形
 * @param {array} params 装饰器入参
 * @returns 
 */
function handleDataCache(target, name, descriptor, [key]) {
  // 拿到函数体并保存
  const fn = descriptor.value;
  // 修改函数体
  descriptor.value = function () {
    let promise = cacheMap.get(key);
    
    if (!promise) {
      // 设定promise
      promise = fn.apply(this, arguments);
      cacheMap.set(key, promise);
    }

    return promise;
  };

  return descriptor;
}

// 装饰器方法会存在默认参数

export default function dataCache(...args) {
  return decorate(handleDataCache, args);
}
