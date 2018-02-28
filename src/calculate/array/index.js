import { toString, toNumber } from '../../prototype';
export default {
    /**
     * 计算一组数据各占百分比
     * @param {Array} data 
     */
    scaleArray(data = [], fixed = 2) {
        if (toString.call(data) !== '[object Array]' || !data.length) {
            return [];
        }
        let total = 0, tempData = [], scale = [];
        total = data.reduce((sum, value) => {
            const num = toNumber(value);
            tempData.push(num);
            return sum + (num);
        }, 0);
        scale = tempData.map((value) => {
            return Number(((value / total) * 100).toFixed(fixed));
        });
        return scale;
    }

}