// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string => string[]

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); //string
//   } else {
//     return input.split(''); //string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); //string
  } else if (typeof input === 'string') {
    return input.split(''); //string[]
  } else if (typeof input === 'number') {
    return true; // boolean
  }
}

const rtaArray = parseStr('Nico');
rtaArray.reverse();
console.log('rtaArray', ' Nico =>', rtaArray);
const rtaStr = parseStr(['N', 'i', 'c', 'o']);
rtaStr.toLowerCase();
console.log('rtaStr', " ['N', 'i', 'c', 'o'] => ", rtaStr);
const rtaBool = parseStr(12);
console.log('rtaBool', ' 12 => ', rtaBool);

// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }

// if (typeof rtaStr === 'string') {
//   rtaStr.toLowerCase();
// }
