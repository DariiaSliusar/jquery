// $(document).ready(function () {
    
// });
// =
// $(function () { 

// });

// $(function () {
//     var tagP = $('.mainText p').text(New text);
//     alert(tagP);
//     зкрито
//     var tagP = $('.mainText p').hide(2000);
//     $('.mainText p').show(2000);
//     =
//     $('.mainText p').hide(2000).show(2000);
//     =
//     var tagP = $('.mainText p');
//     tagP.hide().text(New text).show(1000);
// });

// // вкладені елементи (теги)
// $('nav menu li');
// // дочірні елементи
// $('.icons > div');
// // напис після картинки, сусідні елементи
// $('.icons img + h4'); 

// $('img[height=150]');
// // для початку строки
// $('img[src^=img/]');
// // для кінця строки
// $('img[src$=.png]');
// // в будь-якому місці
// $('a[href*=#]');
// // рахункові
// $('menu li:even')
// // не рахункові
// $('menu li:odd')

// $('img:not(.logo img)');
// вибір тегу, якщо в ньому є даний тег
// $('li:has(a)');
// чи є даний текст в тегу
// $('p:contains(client)');
// перший елемент
// $('.logo li:first');
// останній елемент
// $('#h2 > div + li:last');
// скриті блоки 
// $('div:hidden');
// видимі блоки
// $('div:visibility');

// $(function () {
//     // $('.icons > div').hide(3000);
//     // var w = $('.btn').width();
//     // alert(w);
//     // var h = $('.btn').height();
//     // alert(h);
//     // var w = $('.mainText').width(350);
//     // var h = $('.mainText').height(200);

// });

// $(function () {
//     function widthAndHeight(element) {
//         var className = "." + element; //arrowDow
//         var w = $(className).width(); //$('arrowDow).width()
//         var h = $(className).height();
//         $('.mainText p').text('Ширина: '+w+'; Висота: '+h)
//     }
//     widthAndHeight('arrowDown');
// });