(function ($) {
  $(document).ready(function () {
    $('.contact-submit-button').click(function (e) {
      // The 'Send' button has been clicked
      e.preventDefault();

      // Get the form elements
      var firstNameField = $('#contact-form input[type="text"]');
      var emailField = $('#contact-form input[type="email"]');
      var messageField = $('#contact-form textarea');
      var snackbar = $('.sending-snackbar');

      // Send the message through AJAX
      $.ajax('/contact', {
        method: "POST",
        data: {
          "first_name": firstNameField.val(),
          "email_address": emailField.val(),
          "message": messageField.val()
        },
        beforeSend: function () {
          // Tell the user it's sending
          snackbar.css('bottom', '0');

          // Disable the form so they don't
          // send the message again
          firstNameField.attr('disabled', 'disabled');
          emailField.attr('disabled', 'disabled');
          messageField.attr('disabled', 'disabled');
          $('.contact-submit-button').attr('disabled', 'disabled');

          // Show them they can't edit the
          // form with the 'not-allowed' cursor
          $('#contact-form *').css('cursor', 'not-allowed');
        },
        success: function (response) {
          // Tell the user it's sent
          // $('.sending-snackbar p').text('Sent!');
          $('#contact-form').hide(0);
          $('.page-description').text('Your message has been sent.').css('font-size', '2.5rem');

          setTimeout(function () {
            // Hide the snackbar
            snackbar.css('bottom', '-10rem');
          }, 3000);
        }
      });
    });
  });
})(jQuery);
