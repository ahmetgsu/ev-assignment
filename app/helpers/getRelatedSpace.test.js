import {getRelatedSpace} from './getRelatedSpace';

describe('related-space', () => {
  it('should properly give related space in Block', () => {
    expect(getRelatedSpace('pt', 10)).toEqual({paddingTop: 10});
    expect(getRelatedSpace('mv', 10)).toEqual({marginVertical: 10});
  });

  it('second param should be Number', () => {
    const param1 = 'mv';
    const param2 = '10';
    expect(getRelatedSpace(param1, param2)).not.toEqual({marginVertical: 10});
  });
});
