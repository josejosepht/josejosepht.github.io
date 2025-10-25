$('#contact-form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        url: $(this).attr('action'),
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        success: function () {
            alert('Thanks for your message! I will get back to you as soon as I can.');
            $('#contact-form')[0].reset();
        }
    });
});

