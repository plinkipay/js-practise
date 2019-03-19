/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * @param  {string} input
 * @return {string}
 */
function rle(str) {
    const pir = /(.)\1*/g;
    let arr = str.match(pir);
    var resealArray = [];

    for(let i = 0; i < arr.length; i++)
    {
        let str = arr[i];
        var m = str.length;
        var arr2 = str.split("");
        if (m > 1)  { resealArray.push(arr2[0],m);}
        else resealArray.push(arr2[0]);
    }
    return resealArray.join("");
}
 var str = "AAQQQQQCDMMM";
 console.log(rle(str));//сделано
