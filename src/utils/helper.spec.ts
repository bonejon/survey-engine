import * as helper from './helper';

describe('Helper', () => {
    it('should format the date', () => {
        const sut = helper.formatDate(new Date(2025, 7, 12, 11, 37, 12));

        expect(sut).toBe('08/12/2025, 11:37:12');
    })
})