/**
 * Напишите функцию limitCalls(fn, maxCalls), принимающую функцию fn,
 * и возвращающую новую функцию, которую можно вызвать не более
 * указанного в maxCalls количества раз.
 *
 * В целях упрощени, входящая функция не принимает никаких аргументов, работу с
 * аргументами можно не учитывать.
 *
 * Пример:
 * const limitedLog = limitCalls(() => console.log('log'), 2);
 * limitedLog(); // 'log'
 * limitedLog(); // 'log'
 * limitedLog(); // undefined
 * limitedLog(); // undefined
 *
 *
 * @param  {Function} fn функция
 * @param  {number} maxCalls максимальное количество вызовов
 * @return {Function}
 */

function limitCalls(fn, maxCalls) {
    for (let j = 0; j < maxCalls; j++) {
        Put();
    }
        var result;
    
        return function() { 
            if(fn) {
                result = fn.apply(context || this, arguments);
                fn = null;
            }
    
            return result;
        };
    
    
}
var max = 10;
console.log(limitCalls(Put, max));//cделано