import util from '../src';
describe('util.scale', () => {

    it('scale.Array.1', () => {
        const data = [1, 2, 3, 4, 5];
        const scale = util.scale(data);
        console.log(scale);//[ 6.67, 13.33, 20, 26.67, 33.33 ]
    })
    it('scale.Array.2', () => {
        const data = ['new Date()', '2', {}, 4, 5];
        const scale = util.scale(data);
        console.log(scale);//[ 0, 0, 0, 44.44, 55.56 ]
    })
    it('scale.Object.1', () => {
        const data = { a: 1, b: 2, c: 3 };
        const scale = util.scale(data);
        console.log(scale);//{ a: 16.67, b: 33.33, c: 50 }
    })
    it('scale.Object.2', () => {
        const data = { a: {}, b: 'b', c: 3, d: 4, e: true };
        const scale = util.scale(data);
        console.log(scale);//{ a: 0, b: 0, c: 42.86, d: 57.14, e: 0 }
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
        console.log(mergeRecursive);//{a:'a',b:1,c:false,d:undefined,e:{e1:'e1',e2:'e2'},f:[Function:f]}
    })
    it('mergeRecursive.2', () => {
        const data = {
            a: [1, 2, 3]
        };
        const mergeRecursive1 = util.mergeRecursive({}, data);
        mergeRecursive1.a.push(4, 5, 6);
        console.log(mergeRecursive1);//{ a: [ 1, 2, 3, 4, 5, 6 ] }
        const mergeRecursive2 = util.mergeRecursive({}, data);
        console.log(mergeRecursive2);//{ a: [ 1, 2, 3 ] }
    })
})
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
        console.log(sort);//Map { 'd' => 12, 'b' => 15, 'a' => 20, 'c' => 30, 'e' => 89 }
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
        console.log(sort);//Map { 'e' => 89, 'c' => 30, 'a' => 20, 'b' => 15, 'd' => 12 }
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
        console.log(sort);//Map { 'b' => 2, '-9' => 3, 'a' => 15, '1' => 20, 'c' => 31 }
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
        console.log(sort);//Map { 'c' => 31, '1' => 20, 'a' => 15, '-9' => 3, 'b' => 2 }
    })
})
describe('util.toLower', () => {

    it('toLower.1', () => {
        const data = 'AbcDEFG';
        const toLower = util.toLower(data);
        console.log(toLower);//abcdefg
    })
})
describe('util.milliFormat', () => {

    it('milliFormat.1', () => {
        const data = 987654321;
        const milliFormat = util.milliFormat(data);
        console.log(milliFormat);//987,654,321
    })
    it('milliFormat.2', () => {
        const data = '123456.789';
        const milliFormat = util.milliFormat(data);
        console.log(milliFormat);//123,456.789
    })
})