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

    // click()

    // $('button').click(function () {
    //     alert('test');
    // });

    $('button').on('click',function () {
        alert('test');
    });
});