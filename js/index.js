
function changePhoto(el)
{
    var new_src = $(el).attr("src");
    temp = new_src.split(".jpg")
    lr_src=temp[0]+temp[1]+"lr.jpg";
    br_src=temp[0]+temp[1]+"br.jpg";
    $("#lr-image").attr("src",lr_src);
    $("#br-image").attr("src",br_src);
}
