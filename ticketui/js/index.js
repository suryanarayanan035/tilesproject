$(document).ready(function()
{
    $(".board").sortable({
        connectWith:[".board"]
    });

    $("#createTicketBody").load("createticketmodal.html")
});
    
