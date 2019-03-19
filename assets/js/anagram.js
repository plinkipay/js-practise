/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('Statue of Liberty', 'Built to stay free') === true
 * anagram('просветитель', 'терпеливость') === true
 * anagram('апельсин', 'Апельсин') === false
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */
    function anagram(put, put2) {
        var pattern = (/\s/g, "");

        var put1_1 = put.toLowerCase().replace(/\s/g, ""), 
            put2_2 = put2.replace(/\s/g, "").toLowerCase();
    
        if (put1_1 == put2_2) return false;
        var arr1 = put1_1.split(""), 
            arr2 = put2_2.split("");
    
        var q;
        if (arr1.length != arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) q = 1;
            }
            if (q == 1) continue;
            else return false;
        }
        if (q == 1) return true;
    }
    
    var put = "рак", put2 = "кар";
    console.log(anagram(put, put2));//СДЕЛАНО
