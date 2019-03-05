/**
 * Напишите функцию getMinMax(input), принимающую строку input,
 * и ищущую в ней максимальное и минимальное числа.
 *
 * Числа в строке выделяются пробелами или знаками препинания.
 *
 * Пример:
 * getMinMax();
 * //{ min: -1028, max: 15 }
 *
 * getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')
 * //{ max: Infinity, min: 4 }
 *
 * @param  {string} input входная строка
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 */
function getMinMax(input) {
    var resalt =0;
    var i;

    let pattern = /\d.\d.|\d|-\d/g;
    let arr = input.match(pattern);
    console.log(arr);
    
    const min = Math.min()//надо в скобках вписать , функция определяет с помощью двух обькетов наименьшее
}
let str = '1 и 6.54, -2, но 8, а затем 15, то есть 2.7 и -1028';
getMinMax(str);
return input;

console.log (getMinMax(input));