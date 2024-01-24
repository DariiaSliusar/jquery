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

// $(function () {
    // alert($('.mainText').html());
    // $('.mainText').html('<b>New Text</b><h2>Text</h2>');

    // $('.mainText').fadeOut(2000).fadeIn(3000);

    // function elementOut(element, time) {
    //     if (time > 5000 || time < 1000 || isNaN(time)) {
    //         return false;
    //     } else {
    //         var className = "." + element;
    //         $(className).fadeOut(time);
    //     }
    // }
    // elementOut('mainText', 2000);

//     function newFunc() {
//         //code
//     }
//     $('.mainText').fadeTo(4000, 0.2, newFunc()).fadeTo(2000, 1);

    // $('.mainText').slideUp(2000).slideDown(1000);
// });

// Attribute

// $(function () {
    // var src = $('.logo img').attr('src', 'icon1.png');
    // alert(src);

    // $('.logo img').attr('title', 'підказка')

    // $('.logo img').removeAttr('src');

    // function changeAttr(element, newAttr, newValue) {
    //     var className = "." + element;
    //     $(className).attr(newAttr, newValue);
    // }
    // changeAttr('logo', 'title', 'anything new text');

    // $('nav menu').addClass('border').removeClass('border');

    // alert($('nav menu').css('font-size'));
    // $('nav menu li a').css('color', 'red');
    // $('nav menu li a').css('font-size', '25px').css('color', 'green');
    
// $('nav menu li a').css({
    //     'color': '#ff0000',
    //     'font-size': '24px',
    //     'padding':'10px'
    // })
// });

// $(function () {
//     $('nav menu li a').animate({
//         'font-size': '24px',
//         'padding': '10px'
//     }, 3000);

//     $('.mainText').before('<span class="">New block</span><p>new</p>');
//     $('.mainText').after('<span>New block</span>');
//     $('.mainText').append('<span>New block</span>');
//     $('.mainText').prepend('<span>New block</span>');
// });

$(function () {
    $('.icons img').each(function () {
        if ($(this).attr('src') == 'icon3.png') {
            $(this).fadeOut(1000);
        }
    });
});