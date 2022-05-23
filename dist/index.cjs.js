"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const getQueryString = (search, paramName) => {
  const reg = new RegExp(`(^|&)${paramName}=([^&]*)(&|$)`);
  const r = search.substring(1).match(reg);
  if (r != null) return encodeURIComponent(r[2]);
};

const isObject = (value) => {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
};

exports.getQueryString = getQueryString;
exports.isObject = isObject;
