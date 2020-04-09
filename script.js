let counter = 0;
let length = 1;
$("#add").on("click", function(){
    $('ul').append(
        "<li id="+ counter + '">' + $("#szoveg").val() + "</li>"
    );
    counter++;
    length++;
    $("#szoveg").val("");
});
$("li").on("click", function(){
    let id = $('li').attr('id');
    $(id).css("text-decoration","line-through");
});