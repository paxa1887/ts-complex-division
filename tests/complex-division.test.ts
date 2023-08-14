import {describe, expect} from '@jest/globals';
import { complexDivision } from '../src/complex-division';

describe('(a+bi)/(c+di)', function () {
  it('divides when abs(c) >= abs(d)', function () {
    const a = 4,
      b = 3,
      c = 2,
      d = 1;

    const e = complexDivision(a, b, c, d);

    expect(Math.abs(e[0] - 2.2) < 1e-8);
    expect(Math.abs(e[1] - 0.4) < 1e-8);
  });

  it('divides when abs(d) > abs(c)', function () {
    const a = 1,
      b = 2,
      c = 3,
      d = 4;

    const e = complexDivision(a, b, c, d);

    expect(Math.abs(e[0] - 0.44) < 1e-8);
    expect(Math.abs(e[1] - 0.08) < 1e-8);
  });

  it('passes output to an optional array', function () {
    const result = new Array<number>(2);
    const a = 4,
      b = 3,
      c = 2,
      d = 1;

      complexDivision(a, b, c, d, result);

    expect(Math.abs(result[0] - 2.2) < 1e-8);
    expect(Math.abs(result[1] - 0.4) < 1e-8);
  });
});
