export const getQueryString = (search: string, paramName: string) => {
  const reg = new RegExp(`(^|&)${paramName}=([^&]*)(&|$)`);
  const r = search.substring(1).match(reg);
  if (r != null) return encodeURIComponent(r[2]);
};

export const getQueryObject = (search: string): Record<string, string> => {
  const query = search.substring(1);
  const queryObject: Record<string, string> = {};
  query.split("&").forEach((item: string) => {
    const [key, value] = item.split("=");
    queryObject[key] = value;
  });
  return queryObject;
};
