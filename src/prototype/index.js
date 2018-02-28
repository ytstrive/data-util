
export const keys = Object.keys;
export const values = Object.values;
export const ObjProto = Object.prototype;
export const ArrayProto = Array.prototype;
export const FuncProto = Function.prototype;
export const toString = ObjProto.toString;
/**
 * 转换数字
 * @param {*} value 
 */
export const toNumber = (value) => {
    return toString.call(value) === '[object Number]'? value : 0;
}