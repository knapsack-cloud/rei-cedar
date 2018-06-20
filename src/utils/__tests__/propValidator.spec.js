import propValidator from '../propValidator';

describe('CdrMediaObject.vue', () => {
  it('validates correctly', () => {
    const valid = propValidator('a', ['b', 'a']);
    expect(valid).toBeTruthy();
  });

  it('invalidates correctly', () => {
    const valid = propValidator('ba', ['b', 'a']);
    expect(valid).toBeFalsy();
  });
});

