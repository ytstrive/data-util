import { toString, toNumber } from '../../prototype';
import array from '../array';
export default {
    /**
     * 计算对象key值各占百分比
     * @param {Object} data 
     */
    scaleObj(data = {}, fixed = 2) {
        if (toString.call(data) !== '[object Object]') {
            return {};
        }
        const keys = Object.keys(data), values = Object.values(data);
        const scaleArray = array.scaleArray(values);
        let scale = {};
        keys.forEach((key, index) => {
            scale[key] = scaleArray[index];
        });
        return scale;
    }

}