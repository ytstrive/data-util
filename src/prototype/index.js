const keys = Object.keys;
const values = Object.values;
const ObjProto = Object.prototype;
const ArrayProto = Array.prototype;
const FuncProto = Function.prototype;
const toString = ObjProto.toString;
export default {
    keys,
    values,
    ObjProto,
    ArrayProto,
    FuncProto,
    toString,
    toNumber: (value) => {
        return toString.call(value) === '[object Number]' ? value : 0
    }
}