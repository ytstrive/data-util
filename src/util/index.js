import pro from '../prototype';
export default {
    /**
     * 计算一组数据各占百分比
     * @param {Array|Object} [data=[]] 
     * @param {Number} [fixed=2] 
     * @returns 
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
    },
    /**
     * 深度拷贝
     * @param {Object} obj1 
     * @param {Object} obj2 
     * @returns 
     */
    mergeRecursive(obj1, obj2) {
        for (let p in obj2) {
            try {
                if (obj2[p].constructor === Object) {
                    if (!obj1[p]) {
                        obj1[p] = {}
                    }
                    obj1[p] = this.mergeRecursive(obj1[p], obj2[p])
                } else {
                    obj1[p] = obj2[p]
                }
            } catch (e) {

            }
        }

        return obj1;
    }
}