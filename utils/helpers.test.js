import { renderDate } from './helpers';
import { messagesMock } from '../mocks/messagesMock';

describe('Check if the date is returned properly', () => {
    it('Returns one date with proper format format', () => {
        expect(
            renderDate(messagesMock[4].date, messagesMock[4], messagesMock[0]),
        ).toEqual('08/09/21, 06:12');
    });
    it('Returns nothing as the date was already "displayed"', () => {
        expect(
            renderDate(messagesMock[1].date, messagesMock[1], messagesMock[0]),
        ).toEqual(null);
    });
});
