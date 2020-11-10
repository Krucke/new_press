$(document).ready(function(){

    $('#submits').click(function(e){
        e.preventDefault();
        $('.form-call').children('.form-control').each(function(i){
            if($(this).val() == ""){
                $(this).addClass('red');
            }
        });
        $('.form-call').children('.form-control').keydown(function(){
            $(this).removeClass('red');
        });
        
        if($('.form-call').children('.form-control').hasClass('red')){
            return false;
        }
        alert("Форма отправлена");
    });
});
