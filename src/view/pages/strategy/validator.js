import { strategies } from './strategies';

/**
 * 验证工具方法
 * @param value 需要验证的参数对象
 * @param rules 验证规则，传入数组
 */
export default function doValidate({ value, rules }) {
  const result = {
    state: false,
    msg: '',
  };

  if (Object.keys(value || {}).length === 0 || !(rules instanceof Array) || rules.length === 0) {
    throw new Error('入参规则不正确');
  }

  for (let i = 0; i < rules.length; i++) {
    const ruleItem = rules[i];
    const { key, type, msg } = ruleItem;
    const ruleParams = type?.split(':');
    // 获取 rule 中的校验 type
    const methodName = ruleParams[0];
    const methodParams = ruleParams?.slice(1);
    // 匹配对应的策略对象中的校验方法，并将表单参数、提示信息、其他参数传递进去
    const errorMsg = strategies[methodName].apply(value, [value[key], msg, ...methodParams]);

    if (errorMsg) {
      result.state = false;
      result.msg = errorMsg;
      break;
    }
    result.state = true;
  }
  return result;
}
