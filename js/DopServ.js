$(document).ready(function(){
    let name;
    $('.dop-serv').children('.menu').children('.menu-item').click(function(){
        $('.menu-item').removeClass('active');
        $(this).addClass('active');
        $('.content__header').children("h4").text($(this).text());
        $('.content__header').children("p").text($(this).data('text'));
    });
    if(document.documentElement.clientWidth < 800) {
        $('.dop-serv').children('.menu').children('.menu-item').click(function(){
            $('.menu-item').removeClass('active');
            $(this).addClass('active');
            $(this).children(".menu-info").text($(this).data('text'));
            $(this).children(".menu-info").slideToggle();
        });
    } else {
        return false;
    }

})
