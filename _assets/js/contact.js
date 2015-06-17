// $(".js-notice-hide").click(function(){
//     $(this).parent().fadeOut(300);
// });

// $("#js-validate").on("submit", function(e){
//     e.preventDefault();
//     var flag = true, 
//         name = $("#name"),
//         email = $("#email"),
//         subject = $("#hidden-subject"),
//         bot = $("#bot"),
//         message = $("#message"),
//         numbers = /\d+/g,
//         emailPatt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if( numbers.test(name.val()) || !name.val() || name.val().indexOf(" ") < 0) {
//         name.siblings("p").fadeIn(300);
//         flag = false;
//     } else {
//         name.siblings("p").fadeOut(300);
//     }

//     if(!email.val() || !emailPatt.test(email.val())) {
//         email.siblings("p").fadeIn(300);
//         flag = false;
//     } else {
//         email.siblings("p").fadeOut(300);
//     }

//     if(!subject.val()) {
//         subject.siblings("p").fadeIn(300);
//         flag = false;
//     } else {
//         subject.siblings("p").fadeOut(300);
//     }

//     if(!message.val()) {
//         message.siblings("p").fadeIn(300);
//         flag = false;
//     } else {
//         message.siblings("p").fadeOut(300);
//     } 

//     if( bot.val() ) {
//         flag = false;
//     }
    
//     if( flag ) {
//         $(this).action = $(this).attr("action");
//         $(this).submit();
//     }
    
// });


// // validate email form
// $("#js-validate").on("submit", function(e){
//     var flag = true, 
//         name = $("#name"),
//         email = $("#email"),
//         subject = $("#subject"),
//         bot = $("#bot"),
//         message = $("#message"),
//         numbers = /^(0|[1-9][0-9]{0,2}(?:(,[0-9]{3})*|[0-9]*))(\.[0-9]+){0,1}$/,
//         emailPatt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if( numbers.test(name.val()) || !name.val() || name.val().indexOf(" ") < 0) {
//         name.siblings("p").fadeIn(300);
//         flag = false;
//     } else {
//         name.siblings("p").fadeOut(300);
//     }

//     if(!email.val() || !emailPatt.test(email.val())) {
//         email.siblings("p").fadeIn(300);
//         flag = false;
//     } else {
//         email.siblings("p").fadeOut(300);
//     }

//     if(!subject.val()) {
//         subject.siblings("p").fadeIn(300);
//         flag = false;
//     } else {
//         subject.siblings("p").fadeOut(300);
//     }

//     if(!message.val()) {
//         message.siblings("p").fadeIn(300);
//         flag = false;
//     } else {
//         message.siblings("p").fadeOut(300);
//     } 

//     if(bot.val()) {
//         flag = false;
//     }
    
//     if( flag ) {
//         $.ajax({
//             type: $(this).attr('method'),
//             url: $(this).attr('action'),
//             data: $(this).serialize(),
//             success: function () {
//                 $(this).closest("p").fadeIn(300);
//                 name.val("");
//                 email.val("");
//                 subject.val("");
//                 message.val("");
//             },
//             fail: function (data) {
//                 alert(data);
//             }
//         });
//     }
//     e.preventDefault();
// });


var validation = $("#js-validate").validate({
    errorPlacement: function(error, element) {
        element.parent("div").prepend(error);
    },
    messages: {
        name: '<span class="pe-7s-close-circle"></span>A full name is required.',
        email: '<span class="pe-7s-close-circle"></span>A valid email is required.',
        message: '<span class="pe-7s-close-circle"></span>Sending an email without a message?  Weird.'
    },
    rules: {
        name: {
            required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        }
    },
    submitHandler: function() {
        $.ajax({
            type: $("#js-validate").attr('method'),
            url: $("#js-validate").attr('action'),
            data: $("#js-validate").serialize(),
            success: function () {
                $("#js-validate").closest("p").fadeIn(300);
                validation.resetForm();
            },
            fail: function (data) {
                alert(data);
            }
        });
    }
});











