import dataCache from '@/utils/dataCache';
import { getDictionaries, getUserInfo } from '@/services';

/**
 * 用装饰器的示例
 */
class CacheData {
  /**
   * 获取所有字典值数据
   */
  @dataCache('dictionaries')
  getDictionaryData() {
    return getDictionaries();
  }

  /**
   * 获取其他数据
   */
  @dataCache('userInfo')
  getUserInfo() {
    return getUserInfo();
  }

  async getOptions(key) {
    const result = await this.getDictionaryData();
    return result[key];
  }
}

/**
 * 不用装饰器的示例
 */
const cacheMap = new Map();

class CacheDataNormal {
  async getUserInfo() {
    let promise = cacheMap.get('userInfo');

    if (!promise) {
      promise = await getUserInfo();
      cacheMap.set('userInfo', result);
    }

    return promise;
  }

  async getDictionaryData(key) {
    const promise = cacheMap.get('dictionaries');

    if (!promise) {
      promise = await this.getDictionaryData();
      cacheMap.set('dictionaries', promise);
    }

    return promise[key];
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

// export default new CacheData();
export default new CacheDataNormal();

