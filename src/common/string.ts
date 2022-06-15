// 通过中英文逗号切割字符串
export const splitByComma = (str: string): string[] => {
  return str.split(/[,，]/);
};
