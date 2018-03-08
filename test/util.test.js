import util from '../src';
describe('util.scale', () => {

    it('scale.Array.1', () => {
        const data = [1, 2, 3, 4, 5];
        const scale = util.scale(data);
        console.log(scale);
    })
    it('scale.Array.2', () => {
        const data = ['new Date()', '2', {}, 4, 5];
        const scale = util.scale(data);
        console.log(scale);
    })
    it('scale.Object.1', () => {
        const data = { a: 1, b: 2, c: 3 };
        const scale = util.scale(data);
        console.log(scale);
    })
    it('scale.Object.2', () => {
        const data = { a: {}, b: 'b', c: 3, d: 4, e: true };
        const scale = util.scale(data);
        console.log(scale);
    })
})
describe('util.mergeRecursive', () => {

    it('mergeRecursive.1', () => {
        const data = {
            a: 'a',
            b: 1,
            c: false,
            d: undefined,
            e: {
                e1: 'e1'
            },
            f: function () { }
        }, data2 = {
            a: 'a',
            e: {
                e2: 'e2'
            },
            f: function () { console.log('---'); }
        }
        const mergeRecursive = util.mergeRecursive(data, data2);
        console.log(mergeRecursive);
    })
})
/**
 * 由于Object对象属性的输出顺序是无序的,所以返回值使用Map类型
 * http://w3help.org/zh-cn/causes/SJ9011
 */
describe('util.sort', () => {

    it('sort.1.asc', () => {
        const data = {
            a: 20,
            b: 15,
            c: 30,
            d: 12,
            e: 89
        }
        const sort = util.sort(data);
        console.log(sort);
    })
    it('sort.1.desc', () => {
        const data = {
            a: 20,
            b: 15,
            c: 30,
            d: 12,
            e: 89
        }
        const sort = util.sort(data, 'desc');
        console.log(sort);
    })
    it('sort.2.asc', () => {
        const data = {
            1: 20,
            a: 15,
            '-9': 3,
            b: 2,
            c: 31
        };
        const sort = util.sort(data);
        console.log(sort);
    })
    it('sort.2.desc', () => {
        const data = {
            1: 20,
            a: 15,
            '-9': 3,
            b: 2,
            c: 31
        };
        const sort = util.sort(data, 'desc');
        console.log(sort);
    })
})