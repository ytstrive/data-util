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