jQuery.validator.addMethod(
    "hasSpace", function(value, element) {
        return this.optional(element) || element.value.indexOf(" ") > -1;   
    }
);

var self = $("#js-validate");
var validation = self.validate({
    errorPlacement: function(error, element) {
        element.parent("div").prepend(error);
    },
    messages: {
        name: '<span class="pe-7s-close-circle"></span>A full name is required.',
        email: '<span class="pe-7s-close-circle"></span>A valid email is required.',
        message: '<span class="pe-7s-close-circle"></span>Please enter a message with at least 20 characters.'
    },
    rules: {
        name: {
            required: true,
            hasSpace: true,
            minlength: 4
        },
        email: {
            required: true,
            email: true
        },
        message: {
            required: true,
            minlength: 20
        }
    },
    submitHandler: function() {
        $.ajax({
            type: self.attr('method'),
            url: self.attr('action'),
            data: self.serialize(),
            success: function () {
                $(window).scrollTo($("#top"),300);
                $("#js-success").fadeIn(300).delay(5000).fadeOut(300);
                $("input, textarea").val("");
            },
            fail: function (data) {
                alert(data);
            }
        });
    }
});

jQuery.extend(jQuery.validator.messages, {
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters.")
});












