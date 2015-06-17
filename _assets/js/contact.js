var self = $("#js-validate");
var validation = self.validate({
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











