// 👎 破壊的: num1, num2 自体が変化する
const num1 = [2, 1, 3, 4];
num1.sort(); // [1, 2, 3, 4]
const num2 = [2, 1, 3, 4];
num2.reverse(); // [4, 3, 1, 2]

// 👍 非破壊的: num3, num4 は変化しない
const num3 = [2, 1, 3, 4];
[...num3].sort(); // [1, 2, 3, 4]
const num4 = [2, 1, 3, 4];
[...num4].reverse(); // [4, 3, 1, 2]
