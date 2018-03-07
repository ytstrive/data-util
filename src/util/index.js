import pro from '../prototype';
export default {
    /**
     * 计算一组数据各占百分比
     * @param {Array|Object} data 
     */
    scale(data = [], fixed = 2) {
        const type = pro.toString.call(data);
        if (type !== '[object Array]' && type !== '[object Object]') {
            return data;
        }
        const isArr = type === '[object Array]' ? 1 : 0;
        let tempData = [];
        let total = (isArr ? data : pro.values(data)).reduce((sum, value) => {
            const num = pro.toNumber(value);
            tempData.push(num);
            return sum + num;
        }, 0);
        let scale = tempData.map((value) => {
            return Number(((value / total) * 100).toFixed(fixed));
        });
        return isArr ? scale : (() => {
            let obj = {};
            pro.keys(data).forEach((key, index) => {
                obj[key] = scale[index];
            });
            return obj;
        })();
    }
}