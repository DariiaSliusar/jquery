// jQuery(document).ready(function () {
//     $('h1').css({ 'color': 'red' });
// });

jQuery(function () {
    // // tag, class, id
    // // $('h1').css({ 'color': 'red' });
    // $('.first').css({ 'color': 'red' });
    // $('#second').css({ 'color': 'red' });

    // var id = $('h1').data('id');
    // data-(id) .data();
    // alert(id);
   
   
    // Attributes

    // $('h2[title="test-word"]').css({ 'color': 'red' });
    // $('h2[title|="test-word"]').css({ 'color': 'red' });
    // $('h2[title*="test-word"]').css({ 'color': 'red' });
    // $('h2[title!="test-word"]').css({ 'color': 'red' });
    // $('h2[title$="word"]').css({ 'color': 'red' });
    // $('h1, h2').css({ 'color': 'red' });
    // $('ul li:even').css({ 'color': 'red' });
    // $('ul li:first').css({ 'color': 'red' });
    // $('ul li:odd').css({ 'color': 'red' });
    // $('ul li:nth-child(3)').css({ 'color': 'red' });

    // :contains(), :empty(), :parent, :has.

    // $('h1:contains("Бути")').css({ 'color': 'red' });
    // $('ul li:has(\"span\")').css({ 'color': 'red' });
    // $('ul li:parent').css({ 'color': 'red' });
    // $('table tr td:parent').css({ 'background': 'red' });
    // $('table tr td:empty').css({ 'background': 'red' });

    // console.log(id);

    // click(), dblclick, mouseenter, mouseleave

    // $('button').click(function () {
    //     alert('test');
    // });

    // $('button').on('click',function () {
    //     alert('test');
    // });

    // $('button').dblclick(function () {
    //     alert('1');
    // });

    // $('button').mouseenter(function () {
    //     alert('1');
    // });

    // $('button').mouseleave(function () {
    //     alert('1');
    // });

    // keypress, keydown, keyup

    // change, submit, focus

    // $('input[name="name"]').change(function () {
    //     var value = $(this).val();
        
    //     $('input[name="submit"]').val(value);
    // });

    // $('input[name="name"]').keyup(function () {
    //     var value = $(this).val();
        
    //     $('input[name="submit"]').val(value);
    // });

    // $('form').submit(function () {
    //     alert('test');
    // });

    // css, hide(), show(), delay(), animate(), fadeIn, fadeOut, attr()

    // $('form').css({ 'display':'none' });

    // $('form').hide(1000);
    
    // $('form').show(1000);

    // $('form').show(1000).delay(5000).hide(1000);

    // $('#jj').animate({ 'width': '50px' }, 2000);

    // $('#jj').animate({ 'width': '50px' }, 2000);

    // $('#jj').hide(1000);

    // alert($('input[name="name"]').attr('value'));

    // alert($('.first').attr('data-id'));
    // alert($('.first').data('id'));

    // resize, scroll

    // $(window).resize(function () {
        // width(), height()
        // var width = $(this).width();
        // console.log(width);
        // var width = $(this).height();
        // console.log(width);
    // });

    // addClass, removeClass, toggleClass

    // $('h1').addClass('red');

    // $('h1').hover(function () {
    //     $(this).addClass('blue');
    //     // $('h1').addClass('blue');

    //     // $(this).on('click', function () {
    //     //     $(this).removeClass('blue').removeClass('red');
    //     // });
    // });

    // $('h1').hover(function () {
    //     $(this).toggleClass('blue');
    // });
    
    // $('h1').click(function () {
    //     $(this).toggleClass('blue');
    // });

    // text(), html()

    // var text = $('.text').text();
    // $('.text').text('New text');
    // console.log(text);

    // var newHTML = '<li>TTTT</li><li>Second</li><li>Third</li><li>Fourth</li>';
    // console.log($('ul').html(newHTML));

    // append, prepend

    // $('ul').append('<li>new li</li>');
    // $('ul').prepend('<li>new li</li>');

    // remove(), empty(), after

    // $('ul').empty(); видаляє вміст списку
    // $('ul').remove(); видаляє повністю список
    // $('ul').after('<span>Hello</span>');
    // $('ul li:last-child').after('<li>Hello</li>');
    // $('ul li').after('<li>Hello</li>');
    // $('ul li:nth-child(3)').after('<li>Hello</li>');

    // wrap, unwrap

    // $('form').wrap('<div class="red"></div>');
    // $('form').unwrap();

    // SLIDER

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
      });


});