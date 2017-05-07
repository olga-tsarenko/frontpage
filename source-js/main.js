//accordeon//
$('.accordeon').on('click', function () {
    $(this).toggleClass('active-accordeon');
    $(this).next('.toggle-accordeon').slideToggle('slow');

});