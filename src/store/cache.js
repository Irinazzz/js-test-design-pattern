import dataCache from '@/utils/dataCache';
import { getDictionaries, getUserInfo } from '@/services';

// 普通示例
class NormalData {
  async getDictionaryData() {
    const res = await getDictionaries();
    const newMap ={};

    res.forEach((item) => {
      if(!newMap[item.type]) {
        newMap[item.type] = [];
      }
      newMap[item.type]?.push({
        label: item.name,
        value: item.id,
      })
    })

    return newMap;
  }
}

const cacheMap = new Map();

/**
 * 使用缓存的普通示例
 */
class CacheDataNormal {
  async getDictionaryData() {
    let promise = cacheMap.get('dictionaries');
    const newMap ={};

    if (!promise) {
      promise = await getDictionaries();
      cacheMap.set('dictionaries', promise);
    }
    promise.forEach((item) => {
      if(!newMap[item.type]) {
        newMap[item.type] = [];
      }
      newMap[item.type]?.push({
        label: item.name,
        value: item.id,
      })
    })
 
    return newMap;
  }
}

/**
 * 用装饰者模式的示例
 */
class CacheDataDecorate1 {
  constructor(){
    this.getDictionaryData = this.cacheDecorate(this.getDictionaryData, 'dictionaries');
  }
  
  async getDictionaryData() {
    const res = await getDictionaries();
    const newMap ={};

    res.forEach((item) => {
      if(!newMap[item.type]) {
        newMap[item.type] = [];
      }
      newMap[item.type]?.push({
        label: item.name,
        value: item.id,
      })
    })

    return newMap;
  }

  cacheDecorate(fn, key) {
    return (()=> {
      let promise = cacheMap.get(key);

      if (!promise) {
        promise = fn();
        cacheMap.set(key, promise);
      }

      return promise;
    })
  }
}

/**
 * 用装饰器的示例
 */
class CacheDataDecorate2 {
  @dataCache('dictionaries')
  async getDictionaryData() {
    const res = await getDictionaries();
    const newMap ={};

    res.forEach((item) => {
      if(!newMap[item.type]) {
        newMap[item.type] = [];
      }
      newMap[item.type]?.push({
        label: item.name,
        value: item.id,
      })
    })

    return newMap;
  }
}

// return cache(getUserInfo,'userInfo');

// function cache(fn,key) {
//   let promise = cacheMap.get(key);
//   if (!promise) {
//     promise = fn();
//     cacheMap.set(key, promise);
//     console.log('cacheMap fn', cacheMap);
//   }
//   return promise;
// }

// export default new NormalData();
// export default new CacheDataNormal();
export default new CacheDataDecorate1();
// export default new CacheDataDecorate2();
