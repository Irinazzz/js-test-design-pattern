/**
 * 验证工具方法
 * @param value 需要验证的参数对象
 * @param strategy 验证策略类
 * @param rules 验证规则，传入数组
 */
export default function doValidate({ value, strategy, rules }) {
  const result = {
    state: false,
    msg: '',
  };

  if(Object.keys(value || {}).length === 0 || !(rules instanceof Array) || rules.length === 0) {
    throw new Error('入参规则不正确');
  }

  for (let i = 0; i < rules.length; i++) {
    const ruleItem = rules[i];
    const { key, rule, msg } = ruleItem;
    const ruleParams = rule?.split(':');
    const methodName = ruleParams[0];
    const methodParams = ruleParams?.slice(1);
    const errorMsg = strategy[methodName].apply(value, [value[key], msg, ...methodParams]);

    if(errorMsg) {
      result.state = false;
      result.msg = errorMsg;
      break;
    }
    result.state = true;
  }
  return result;
}