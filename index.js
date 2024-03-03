// EXAMPLE 1 - Create a Deep Copy of a Map in JavaScript

const existingMap = new Map([
  ['address', {street: 'Example'}],
  ['numbers', [1, 2, 3]],
]);

const deepCopy = new Map(
  JSON.parse(JSON.stringify(Array.from(existingMap))),
);

// 👇️ {'address' => {street: 'Example'}, 'numbers': [1, 2, 3]}
console.log(deepCopy);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Create a Deep Copy of a Map using `lodash`

// import _ from 'lodash';

// const existingMap = new Map([
//   ['address', {street: 'Example'}],
//   ['numbers', [1, 2, 3]],
// ]);

// const deepCopy = _.cloneDeep(existingMap);

// // 👇️ Map(2) { 'address' => { street: 'Example' }, 'numbers' => [ 1, 2, 3 ] }
// console.log(deepCopy);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Create a shallow copy of a Map in JavaScript

// const oldMap = new Map([
//   ['name', 'bobby hadz'],
//   ['country', 'Chile'],
// ]);

// // 👇️ Map(2) { 'name' => 'bobby hadz', 'country' => 'Chile' }
// console.log(oldMap);

// const copy = new Map(oldMap);
// // 👇️ Map(2) { 'name' => 'bobby hadz', 'country' => 'Chile' }
// console.log(copy);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Create a shallow copy of a Map using `Map.forEach`

// const oldMap = new Map([
//   ['name', 'bobby hadz'],
//   ['country', 'Chile'],
// ]);

// const copy = new Map();

// oldMap.forEach((value, key) => {
//   copy.set(key, value);
// });

// // 👇️ Map(2) { 'name' => 'bobby hadz', 'country' => 'Chile' }
// console.log(oldMap);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Create a shallow Copy of a Set in JavaScript

// const set1 = new Set(['bobby', 'hadz', 'com']);

// const cloned = new Set(set1);
// console.log(cloned); // 👉️ Set(3) { 'bobby', 'hadz', 'com' }

// ------------------------------------------------------------------

// // EXAMPLE 6 - Create a shallow Copy of a Set using a `for...of` loop

// const set1 = new Set(['bobby', 'hadz', 'com']);

// const cloned = new Set();

// for (const element of set1) {
//   cloned.add(element);
// }

// console.log(cloned); // 👉️ Set(3) { 'bobby', 'hadz', 'com' }

// ------------------------------------------------------------------

// // EXAMPLE 7 - Create a deep copy of a Set in JavaScript

// const existingSet = new Set([[1, 2, 3]]);

// const deepCopy = new Set(
//   JSON.parse(JSON.stringify(Array.from(existingSet))),
// );

// console.log(deepCopy); // 👉️ {[1, 2, 3]}

// ------------------------------------------------------------------

// // EXAMPLE 8 - Create a deep copy of a Set using `lodash`

// import _ from 'lodash';

// const existingSet = new Set([[1, 2, 3]]);

// const deepCopy = _.cloneDeep(existingSet);

// // 👇️ Set(1) { [ 1, 2, 3 ] }
// console.log(deepCopy);
