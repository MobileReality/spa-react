import { isEven } from './is-even';

describe('isEven working', () => {
    it('4 is even', () => {
        expect(isEven(4)).toBe(true);
    });

    it('5 is not even', () => {
        expect(isEven(5)).toBe(false);
    });
});
