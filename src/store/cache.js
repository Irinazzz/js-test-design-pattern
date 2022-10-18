import dataCache from '@/utils/dataCache';
import { getDictionaries, getUserInfo } from '@/services';

// 普通示例
class NormalData {
  async getDictionaryData() {
    return getDictionaries();
  }
}

const cacheMap = new Map();

/**
 * 使用缓存的普通示例
 */
class CacheDataNormal {
  async getDictionaryData() {
    let promise = cacheMap.get('dictionaries');

    if (!promise) {
      promise = getDictionaries();
      cacheMap.set('dictionaries', promise);
    }
 
    return promise;
  }
}

/**
 * 用装饰者模式的示例
 */
class CacheDataDecorate1 {
  constructor() {
    this.getDictionaryData = this.cacheDecorate(this.getDictionaryData, 'dictionaries');
  }
  
  async getDictionaryData() {
    return getDictionaries();
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
    return getDictionaries();
  }

  @dataCache('userInfo')
  async getUserInfo() {
    return getUserInfo();
  }
}

// export default new NormalData();
// export default new CacheDataNormal();
// export default new CacheDataDecorate1();
export default new CacheDataDecorate2();
