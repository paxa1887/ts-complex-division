# ts-complex-division

Floating point complex division in TypeScript


## Intro

Complex floating point division isn't quite trivial. The naive method may encounter overflow, underflow, or loss of precision due to the intermediate floating point results.


## Usage

##### `import { complexDivision } from 'ts-complex-division';`

Calculates (a + ib)/(c + id) and returns a two-element JS array with the real and imaginary components.

`result` is an optional `Array` or typed array into which the output is inserted.


## Example

```TypeScript
import { complexDivision } from 'complex-division';

const result = complexDivision(a, b, c, d);

// result = [ 0.44, 0.08 ]
```