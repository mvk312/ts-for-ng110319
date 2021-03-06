/*1)
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
*/
function isInArray(array) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args.every(function (v) { return array.indexOf(v) > -1; });
}
var result1 = isInArray([2, 3, 14, 5], 2, 14, 1);
console.log(result1);
/*
2)
 Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
*/
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var res = args.reduce(function (prev, curr) {
        return (Number(prev) || 0) + (Number(curr) || 0);
    });
    return res;
}
var result2 = summator(2, '50', 300);
console.log(result2);
/*
3)
  Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.
*/
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resultArray = [];
    args.forEach(function (item) {
        if (!isInArray(resultArray, item))
            resultArray.push(item);
    });
    return resultArray;
}
var result3 = getUnique(5, 5, 12, 3, 1, 6, 6, 7, 2, 2);
console.log(result3);
/*
4)
 Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.
*/
function toMatrix(data, rowSize) {
    var resultArray = [[]];
    var currRowSize = 0;
    var currRow = 0;

    data.forEach(function (item) {
        if (!resultArray[currRow])
            resultArray[currRow] = new Array(rowSize);

        resultArray[currRow].push(item);
        currRowSize++;
        
        if (currRowSize > rowSize - 1) {
            currRowSize = 0;
            currRow++;
        }
    });
    return resultArray;
}
var result4 = toMatrix([2, 3, 5, 6, 7, 7, 8, 8, 9, 9, 9, 9, 12, 11, -1, 13, 5], 4);
console.log(result4);
