import {calculate} from '../src';
describe('calculate.scaleArray', () => {
    it('scaleArray.1', () => {
        const data = [1, 2, 3, 4, 5];
        const scale = calculate.scaleArray(data);
        console.log(scale);
    })
    it('scaleArray.2', () => {
        const data = ['new Date()', '2', {}, 4, 5];
        const scale = calculate.scaleArray(data);
        console.log(scale);
    })
})
describe('calculate.scaleObj', () => {
    it('scaleObj.1', () => {
        const data = { a: 1, b: 2, c: 3 };
        const scale = calculate.scaleObj(data);
        console.log(scale);
    })
    it('scaleObj.2', () => {
        const data = { a: {}, b: 'b', c: 3, d: 4, e: true };
        const scale = calculate.scaleObj(data);
        console.log(scale);
    })
})