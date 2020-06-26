$(document).ready(function(){

    var result = true;
    $("form").submit(function ()
    {
        result=true;
        validateName();
        validateEmailId();
        validateMobileNo();
        validatePassword();
        validateConfirmPassword();
        return result;
    });
$("#name").blur(validateName);
$("#password").blur(validatePassword);
$("#confirmPassword").blur(validateConfirmPassword);
$("#emailId").blur(validateEmailId);
$("#mobileNo").blur(validateMobileNo);
function validateName()
{
    name = $("#name").val();
    if($.trim(name)  == "" )
    {
        $("#name-error").removeClass("d-none");
        $("#name").addClass("is-invalid");
        $("#name").removeClass("is-valid");
        result = result&&false;
    }
    else
    {
        $("#name-error").addClass("d-none");
        $("#name").addClass("is-valid");
        $("#name").removeClass("is-invalid");
        name_regex = /^([a-z A-Z]+)$/
        if(name_regex.test(name))
        {
            $("#name-format").addClass("d-none");
            $("#name").removeClass("is-invalid")
            $("#name").addClass("is-valid")
            result = result&&true;
        }
        else
        {
            $("#name-format").removeClass("d-none");
            $("#name").removeClass("is-valid")
            $("#name").addClass("is-invalid")
            result = result&&false;
        }
        
    }
}

function validateEmailId()
{
    emailId = $("#emailId").val();
    if($.trim(emailId)  == "" )
    {
        $("#emailId-error").removeClass("d-none");
        $("#emailId").addClass("is-invalid")
        $("#emailId").removeClass("is-valid")
        result = result&&false;
    }
    else
    {
        $("#emailId-error").addClass("d-none");
        $("#emailId").addClass("is-valid");
        $("#emailId").removeClass("is-invalid");
        emailId_regex = /^([\w\. -]+)@([a-z A-Z 0-9 -]+)(\.[a-z A-Z]+)(\.[a-z A-z]+)?$/
        if(emailId_regex.test(emailId))
        {
            $("#emailId-format").addClass("d-none");
            $("#emailId").removeClass("is-invalid")
            $("#emailId").addClass("is-valid")
            result = result&&true;
        }
        else
        {
            $("#emailId-format").removeClass("d-none");
            $("#emailId").removeClass("is-valid")
            $("#emailId").addClass("is-invalid")
            result = result&&false;
        }
    }
}
function validateMobileNo()
{
    mobileNo = $("#mobileNo").val();
    if($.trim(mobileNo)  == "" )
    {
        $("#mobileNo-error").removeClass("d-none");
        $("#mobileNo").addClass("is-invalid")
        $("#mobileNo").removeClass("is-valid")
        result = result&&false;
    }
    else
    {
        $("#mobileNo-error").addClass("d-none");
        $("#mobileNo").addClass("is-valid");
        $("#mobileNo").removeClass("is-invalid");
        mobileNo_regex = /^([0-9]{10})$/
        if(mobileNo_regex.test(mobileNo))
        {
            $("#mobileNo-format").addClass("d-none");
            $("#mobileNo").removeClass("is-invalid")
            $("#mobileNo").addClass("is-valid")
            result = result&&true;
        }
        else
        {
            $("#mobileNo-format").removeClass("d-none");
            $("#mobileNo").removeClass("is-valid")
            $("#mobileNo").addClass("is-invalid")
            result = result&&false;
        }
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
        $("#password").addClass("is-valid");
        $("#password").removeClass("is-invalid");
        password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(?=.{8,})/
        if(password_regex.test(password))
        {
            $("#password-format").addClass("d-none");
            $("#password").removeClass("is-invalid")
            $("#password").addClass("is-valid")
            result = result&&true;
        }
        else
        {
            $("#password-format").removeClass("d-none");
            $("#password").removeClass("is-valid")
            $("#password").addClass("is-invalid")
            result = result&&false;
        }
    }
}
function validateConfirmPassword()
{
    confirmPassword = $("#confirmPassword").val();
    if($.trim(confirmPassword)  == "" )
    {
        $("#confirmPassword-error").removeClass("d-none");
        $("#confirmPassword").addClass("is-invalid")
        $("#confirmPassword").removeClass("is-valid")
        result = result&&false;
    }
    else
    {
        $("#confirmPassword-error").addClass("d-none");
        $("#confirmPassword").addClass("is-valid");
        $("#confirmPassword").removeClass("is-invalid");
        var password=new String($("#password").val());
        if(password.localeCompare(confirmPassword) == 0)
        {
            $("#confirmPassword-match-error").addClass("d-none");
            $("#confirmPassword").removeClass("is-invalid")
            $("#confirmPassword").addClass("is-valid")
            result = result&&true;
        }
        else
        {
            $("#confirmPassword-match-error").removeClass("d-none");
            $("#confirmPassword").removeClass("is-valid")
            $("#confirmPassword").addClass("is-invalid")
            result = result&&false;
        }
    }
}
});

