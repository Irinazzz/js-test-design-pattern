import decorate from './decorate';

const cacheMap = new Map();

// targrt 类自身， name 要装饰的函数名，descriptor 装饰器本身 ，key 装饰器入参
function handleDataCache(target, name, descriptor, [key]) {
  // 拿到函数体并保存
  const fn = descriptor.value;
  // 修改函数体
  descriptor.value = function () {
    let promise = cacheMap.get(key);
    if (!promise) {
      // 设定promise
      promise = fn.apply(this, arguments);

      // 使用缓存，缓存过期之后再次get就会获取null，而从服务端继续请求
      cacheMap.set(key, promise);
      console.log('装饰器实现的 cacheMap', cacheMap);
    }
    return promise;
  };
  return descriptor;
}

export default function dataCache(...args) {
  return decorate(handleDataCache, args);
}
