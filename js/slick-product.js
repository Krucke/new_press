$(document).ready(function(){
    $('.changeble').click(function(){
        console.log($(this).attr('src'));
        $('.img-pre').attr('src',$(this).attr('src'));
    })
})
