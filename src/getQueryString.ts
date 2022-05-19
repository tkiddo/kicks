export const getQueryString = (search: string, paramName: string) => {
  const reg = new RegExp(`(^|&)${paramName}=([^&]*)(&|$)`);
  const r = search.substr(1).match(reg);
  if (r != null) return encodeURIComponent(r[2]);
};
