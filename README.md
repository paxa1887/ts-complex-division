# ts-complex-division

![Workflow](https://github.com/paxa1887/ts-complex-division/actions/workflows/main.yml/badge.svg)
[![Codecov](https://codecov.io/gh/paxa1887/ts-complex-division/graph/badge.svg?token=S6U22KXOKW)](https://codecov.io/gh/paxa1887/ts-complex-division) [![NPM Monthly Downloads](https://img.shields.io/npm/dm/ts-complex-division.svg?style=flat)](https://www.npmjs.com/package/ts-complex-division)
[![Install Size](https://packagephobia.com/badge?p=ts-complex-division)](https://packagephobia.com/result?p=ts-complex-division) [![Known Vulnerabilities](https://snyk.io/test/github/paxa1887/ts-complex-division/badge.svg)](https://snyk.io/test/github/paxa1887/ts-complex-division)

Floating point complex division in TypeScript

## Intro

Complex floating point division isn't quite trivial. The naive method may encounter overflow, underflow, or loss of precision due to the intermediate floating point results.

## Usage

##### `import { complexDivision } from 'ts-complex-division';`

Calculates (a + ib)/(c + id) and returns a two-element JS array with the real and imaginary components.

`result` is an optional `Array` or typed array into which the output is inserted.

## Example

```TypeScript
import { complexDivision } from 'ts-complex-division';

const result = complexDivision(a, b, c, d);

// result = [ 0.44, 0.08 ]
```
