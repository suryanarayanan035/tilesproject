$(document).ready(function(){

    var result = true;
    $("form").submit(function ()
    {
        validateUsername();
        validatePassword();
        return result;
    });
$("#username").blur(validateUsername);
$("#password").blur(validatePassword);
function validateUsername()
{
    username = $("#username").val();
    if($.trim(username)  == "" )
    {
        $("#username-error").removeClass("d-none");
        $("#username").addClass("is-invalid");
        $("#username").removeClass("is-valid");
        result = result&&false;
    }
    else
    {
        $("#username-error").addClass("d-none");
        $("#username").removeClass("is-invalid")
        $("#username").addClass("is-valid")
        result = result&&true;
    }
}

function validatePassword()
{
    password = $("#password").val();
    if($.trim(password)  == "" )
    {
        $("#password-error").removeClass("d-none");
        $("#password").addClass("is-invalid")
        $("#password").removeClass("is-valid")
        result = result&&false;
    }
    else
    {
        $("#password-error").addClass("d-none");
        $("#password").removeClass("is-invalid")
        $("#password").addClass("is-valid")
        result = result&&true;
    }
}
});

