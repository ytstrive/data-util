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
    },
    /**
     * 按照value 排序 (value类型=Number)
     * 由于Object对象属性的输出顺序是无序的,所以返回值使用Map类型
     * http://w3help.org/zh-cn/causes/SJ9011
     * @param {Object} [data={}] 
     * @param {String} [order='asc'] |'desc'
     * @returns Map
     */
    sort(data = {}, order = 'asc') {
        if (pro.toString.call(data) !== '[object Object]') {
            return data;
        }
        const map = new Map();
        let keys = pro.keys(data).sort((a, b) => {
            const aNum = pro.toNumber(data[a]), bNum = pro.toNumber(data[b]);
            return order === 'asc' ? aNum - bNum : bNum - aNum;
        }).forEach((key) => {
            map.set(key, data[key]);
        });
        return map;
    },
    /**
     * 转换小写
     * @param {String} [data=''] 
     * @returns String
     */
    toLower(data = '') {
        return data.replace(/[A-Z]/g, (word) => { return word.toLowerCase() });
    },
    /**
     * 千位分隔符
     * @param {Number} num 
     * @returns String
     */
    milliFormat(data = 0) {
        return data && data.toString()
            .replace(/(^|\s)\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
    }
}