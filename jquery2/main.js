// вкладені елементи (теги)
$('nav menu li');
// дочірні елементи
$('.icons > div');
// напис після картинки, сусідні елементи
$('.icons img + h4'); 

$('img[height=150]');
// для початку строки
$('img[src^=img/]');
// для кінця строки
$('img[src$=.png]');
// в будь-якому місці
$('a[href*=#]');