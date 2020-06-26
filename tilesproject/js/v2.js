
function changePhoto(el)
{
    var new_src = $(el).attr("src");
    regex=/.jpeg | .jpg/
    temp = new_src.split(".jpeg")
    new_src=temp[0]+temp[1]+"home.jpeg";
    $("#option1").attr("src",new_src);
}
function changePhotoOption2(el)
{
    var new_src = $(el).attr("src");
    regex=/.jpeg | .jpg/
    temp = new_src.split(".jpeg")
    new_src=temp[0]+temp[1]+"home.jpeg";
    $("#option2").attr("src",new_src);
}
function buyOption1()
{
    $("#modaltitle").empty()
    $("#price").empty()
    $("#total").empty()
    var design = $("#option1").attr("src").split("/")
    design = design[1].split(".jpeg");
    design = design[0].split("home")
    design = design[0].replace(",","")
    $("#modaltitle").append("Price Quote for:Option 1-"+design);
    var price=Math.floor((Math.random()*100)-1);
    $("#price").append("Base Price:"+String(price));
    var total = price * 18;
    $("#total").append("Total:"+String(total));
}

function buyOption2()
{
    $("#modaltitle").empty()
    $("#price").empty()
    $("#total").empty()
    var design = $("#option2").attr("src").split("/")
    design = design[1].split(".jpeg");
    design = design[0].split("home")
    design = design[0].replace(",","")
    $("#modaltitle").append("Price Quote for:Option 2-"+design);
    var price=Math.floor((Math.random()*100)-1);
    $("#price").append("Base Price:"+String(price));
    var total = price * 18;
    $("#total").append("Total:"+String(total));
}

$("#buy1").click(buyOption1)
$("#buy2").click(buyOption2)