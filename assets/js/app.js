/**
 * Created by prakash on 5/7/16.
 */
$(document).ready(function(){
    var errorClass = 'has-error';
    var validationType='';
    $('input[data-validate="true"]').blur(function(){
        validationType = $(this).data('validate-name');
        validationType = $(this).val();
        console.log(validationType);
        switch (validationType){
            case 'text':
                if($(this).val().length>0){
                    $(this).parent().removeClass(errorClass).addClass('has-success');
                }
                else{
                    $(this).parent().addClass(errorClass);
                }
                break;
            case 'email':
                break;
            case 'password':
                break;
            case 'passwordCompare':
                break;
            default:
                console.log('rule not define');
                break;
        }
    });
});