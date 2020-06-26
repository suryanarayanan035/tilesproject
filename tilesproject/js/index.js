
function changePhoto(el)
{
    var new_src = $(el).attr("src");
    regex=/.jpeg | .jpg/
    temp = new_src.split(".jpeg")
    new_src=temp[0]+temp[1]+"home.jpeg";
    $("#house-image").attr("src",new_src);
}
