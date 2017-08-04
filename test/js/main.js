$(function() {

    var delayInterval = 350;

    $('#login-form-link').click(function(e) {
		$("#login-form").delay( delayInterval ).fadeIn( delayInterval );
 		$("#register-form").fadeOut( delayInterval );
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay( delayInterval ).fadeIn( delayInterval );
 		$("#login-form").fadeOut( delayInterval );
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});
