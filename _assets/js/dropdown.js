$("#subject").on("click", function(){
    $("#subjects").slideToggle(210);
    $(this).toggleClass("drop-close");
});

$("ul.subjects > li").on("click", function(){
    $("#subjects").slideUp(210);
    $("#subject").text($(this).text());
    $("#hidden-subject").val($(this).text());
    $("#subject").removeClass("drop-close");
});