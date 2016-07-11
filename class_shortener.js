/**
 * Created by dusty on 11.07.16.
 */

/**
 * @param {Array} data – массив CSS классов
 */
module.exports = function(data) {
    // Ваш код
    var classes = [];
    data.forEach(
        function(item)
        {
            var index = -1;
            classes.forEach(
                function(c, num)
                {
                    if (c.class === item) index = num;
                }
            );
            if (index === -1)
            {
                classes[classes.length] =
                {
                    'class': item,
                    'number': 1
                }
            }
            else
            {
                classes[index].number += 1;
            }
        }
    );

    for(var i = 1; i< classes.length; i++)
    {
        for(var j = i; j>=1; j--)
        {
            if (classes[j-1].number < classes[j].number)
            {
                var swap = classes[j-1];
                classes[j-1] = classes[j];
                classes[j] = swap;
            }
        }
    }

    //return classes;

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '_'];
    var shortener = {};

    classes.forEach(
        function (item, number)
        {
            var base = alphabet.length;
            var digit = 1;
            while (base<=number)
            {
                base = base * (alphabet.length);
                digit++;
            }
            var max_digit = digit;

            var result_symbols = [];
            var position = number;
            while (position>0)
            {
                base = base / (alphabet.length);
                result_symbols_index = parseInt(position/base);
                position = position - result_symbols_index*base;


                result_symbols[digit] = alphabet[result_symbols_index-1];
                console.log(alphabet[result_symbols_index-1]);
                digit--;
            }

            var result = '';
            for (i = max_digit; i>0; i--)
            {
                if (typeof result_symbols[i] === 'undefined') result_symbols[i] = '_';
                result = result + result_symbols[i];
            }

            classes[number].result = result;
            shortener[classes[number].class] = classes[number].result;
        }
    );

    return shortener;
};