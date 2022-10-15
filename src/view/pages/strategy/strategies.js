/**
 * 验证策略对象
 * @type {Object}
 */
export const strategies = {
  isNotEmpty: (value, errMsg) => {
    if (value === '') {
      return errMsg;
    }
  },
  minLenth: (value, errMsg, length) => {
    if (value.length < length) {
      return errMsg;
    }
  },
  isMobile: (value, errMsg) => {
    if (!/^1[3|5|8][0-9]{9}$/.test(value)) {
      return errMsg;
    }
  }
}