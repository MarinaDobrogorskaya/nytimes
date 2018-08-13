import { DatePipe } from './date.pipe';

describe('DatePipe', () => {
  it('create an instance', () => {
    const pipe = new DatePipe();
    expect(pipe).toBeTruthy();
  });
  it('transform date', () => {
    const pipe = new DatePipe();
    expect(pipe.transform('2018-08-12T00:00:00Z')).toBe('2018-08-12');
  });
});
