var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email');
var pass_error = document.getElementById('password');

email.eventlistner('textInput', email_verify);
password.eventlistner('emailInput', pass_verify);




function validated(){
    if (email.value.length<8){
        email.style.border= "1px solid Red";
        email.error.style.display = block;
        password.focus();
        return false;

    }
}
function validated(){
    if (password.value.length<5){
        password.style.border= "1px solid Red";
        password.error.style.display = block;
        password.focus();
        return false;

    }
}
function email_verify(){
    if(email.value.length>=8){
        email.style.border= "1px solid red";
        email_error.style.display = "block";
        return true;
    }
}
function pass_verify(){
    if(password.value.length>=5){
        pass.style.border= "1px solid red";
        pass_error.style.display = "block";
        return true;
    }
}