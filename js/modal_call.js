$(document).ready(function() {
    $(".popup-fade").hide();
    $("#modal").click(function(){
        $(".popup-fade").show();
    });
    $(document).mousedown(function(e){
        if ( $(e.target).closest('#modalShow').length ) {
            return;
        }
        $('.popup-fade').hide();
    });
    $('#close_modal').click(function(){
        $('.popup-fade').hide();
    });
    $('#submit').click(function(e){
        e.preventDefault();
        $('.form-popup').children('.form-control').each(function(i){
            if($(this).val() == ""){
                $(this).addClass('red');
            }
        });
        $('.form-popup').children('.form-control').keydown(function(){
            $(this).removeClass('red');
        })
        if($('.form-popup').children('.form-control').hasClass('red')){
            return false;
        }
        alert("Форма отправлена");
    });
});
