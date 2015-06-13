function formValidation(data){

    var flag = true;

    var name = document.getElementById("name"),
        email = document.getElementById("email"),
        emailPatt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        subject = document.getElementById("hidden-subject"),
        antibot = document.getElementById("antibot"),
        message = document.getElementById("message"),
        space = " ",
        numbers = /^(0|[1-9][0-9]{0,2}(?:(,[0-9]{3})*|[0-9]*))(\.[0-9]+){0,1}$/,
        fullName = name.value,
        lastName = fullName.split(" ")[1];

    var status = [
    "What\'s your name?", /*0*/
    "What\'s your email?", /*1*/
    "That\'s not an email!", /*2*/
    "What\'s your subject?", /*3*/
    "What\'s your message?", /*4*/
    "Message is too concise!  It should be at least twenty characters.", /*5*/
    "What\'s your last name?", /*6*/
    "That\'s definitely not your name.", /*7*/
    "I didn\'t ask for your initial.", /*8*/
    "Must be between 13-122 years old!", /*9*/
    "You must be a robot!", /*10*/ /*not used*/
    "Tell me your age!", /*11*/
    "So... what\'s the answer? (Hint: Yes)", /*12*/
    "That\'s not a valid age." /*13*/
    ];

        if(numbers.test(fullName)) {
            name.style.borderColor = "#df4747";
            name.value = status[7];
            flag = false; 
        } else if(numbers.test(lastName)){
            name.style.borderColor = "#df4747";
            name.value = status[7];
            flag = false; 
        } else if(name.value == status[7] || name.value == status[6]) {
            name.style.borderColor = "#df4747";
            flag = false;
        } else if(name.value == "" || name.value == null){
            name.style.borderColor = "#df4747";
            name.placeholder = status[0];
            flag = false;
        } else if (name.value.indexOf(space) == 0 || name.value.indexOf(space) == -1) {
            name.style.borderColor = "#df4747";
            name.value = status[6];
            flag = false;
        } else if (lastName.length < 2) {
            name.style.borderColor = "#df4747";
            name.value = status[8];
            flag = false;
        } else {
            name.style.borderColor = "#f3f3f3";
        }

        if(email.value == "" || email.value == null){
            email.style.borderColor = "#df4747";
            email.placeholder = status[1];
            flag = false;
        } else if(emailPatt.test(email.value) == false){
            email.style.borderColor = "#df4747";
            email.value = status[2];
            flag = false;
        } else {
            email.style.borderColor = "#f3f3f3";
        }

        if(antibot.value) {
            alert("\"" + antibot.value + "\"" + " " + "has been entered in the antibot field.  There shouldn't be anything there.  You're a robot!  If you're not a robot, please try again.");
            flag = false;
        }  

        if(subject.value == "" || subject.value == null){
            subject.style.borderColor = "#df4747";
            subject.placeholder = status[3];
            flag = false;
        } else {
            subject.style.borderColor = "#f3f3f3";
        }

        if(message.value == "" || message.value == null){
            message.style.borderColor = "#df4747";
            message.placeholder = status[4];
            flag = false;
        } else if(message.value.length < 20) {
            message.style.borderColor = "#df4747";
            message.value = status[5];
            flag = false;
        } else if(message.value == status[5]) {
            message.style.borderColor = "#df4747";
            flag = false;
        } else {
            message.style.borderColor = "#f3f3f3";
        }

        if(flag) {
            data.action = "/php/send.php";
            data.submit();
        } else {
            flag = false;
        }

}

var d = new Date(),n = d.getFullYear(), 
fn = document.getElementById('foot-note'), 
fnLink = "<a href='https://github.com/MatthewKosloski/site'>source</a>.";
fn.innerHTML = "&copy;" + " " + n + " " + "Matthew Kosloski.  View the" + " " + fnLink;

$(document).ready(function(){

        $("#subject").on("click", function(){
            $("#subjects").slideToggle(210);
        });

        $("ul.subjects > li").on("click", function(){
            $("#subjects").slideUp(210);
            $("#subject").text($(this).text());
            $("#hidden-subject").val($(this).text());
        });

});

if($(window).width()>960){
    $('.overlay-link').mouseover(function () {
        $(this).find('.overlay').fadeIn(200);
        $(this).find('.pe-7s-glasses').addClass("view-animation");
    }).mouseleave(function () {
        $(this).find('.overlay').fadeOut(200);
        (this).find('.pe-7s-glasses').removeClass("view-animation");
    });
}

$('.photoset-grid-lightbox').photosetGrid({
highresLinks: true,
rel: 'withhearts-gallery',
gutter: '10px',
onComplete: function(){
  $('.photoset-grid-lightbox').attr('style', '');
  $('.photoset-grid-lightbox a').colorbox({
      onLoad: function(){
        $('button#cboxClose').css({'display':'none'});
        $("button#cboxPrevious").css({'display':'none'});
        $("button#cboxNext").css({'display':'none'});
      },
      photo: true,
      scalePhotos: true,
      maxHeight:'90%',
      maxWidth:'90%'
  });
}
});