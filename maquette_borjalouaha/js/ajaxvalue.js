// English Home Page
(function($, W, D) {
    var JQUERY4U = {};
    JQUERY4U.UTIL = {
        setupFormValidation: function() {
            $('#contactForm').validate({
                rules: {
					Nom: { required: true },
					Telephone: { required: true },
					Courriel: { required: true },
					Sujet: { required: true },
					Texte: { required: true },
					infolettre: { required: false },					
					methodeContact: { required: true },
					'periode[]': { required: true },
               },
                messages: {
					Nom: {required: "required"},
					Telephone: {required: "required"},
					Courriel: {required: "required"},
					Sujet: {required: "required"},
					Texte: {required: "required"},
					infolettre: {required: "required"},					
					methodeContact: {required: "required"},
					'periode[]': {required: "required"},
                },
                submitHandler: function(form) {
                    $('#submit_btn').addClass('hide');
                    $('.submit_ajax').removeClass('hide');
                    $.ajax({
                        url: '../ajax/ajaxfile.php',
                        type: 'post',
                        dataType: 'json',
                        data: $('#contactForm').serialize(),
                        success: function(data) {
                            $('#submit_btn').removeClass('hide');
                            $('.submit_ajax').addClass('hide');
                            //var msg = 'Service request not completed. Try again later';
                            var stat = 0;
                            if (data) {
                                if (data.status == 1) {
                                    stat = 1;
									$("#registrationmsg").html("<div class='alert alert-success'>Email sent succesfully. We will get back to you</div>");
                                    $('#contactForm').each(function() {this.reset();});
                                   setTimeout(function()
								   {
									   $("#registrationmsg").html('');
									   $(".mfp-close").click(); 
								   }, 5000);
                                }
                            }
                        }
                    });
                },
                highlight: function(element) {
                    $(element).closest('.form-group').removeClass('success').addClass('error');
                },
                success: function(element) {
                    element.text('').addClass('valid').closest('.form-group').removeClass('error').addClass('success');
                }
            });
        }
    }
    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });
})(jQuery, window, document);
// English Home Page

// English Book a Visit
(function($, W, D) {
    var JQUERY4U = {};
    JQUERY4U.UTIL = {
        setupFormValidation: function() {
            $('#contactFormBookVisit').validate({
                rules: {
					Nom: { required: true },
					Telephone: { required: true },
					Courriel: { required: true },
					Sujet: { required: true },
					Texte: { required: true },
					infolettre: { required: false },					
					methodeContact: { required: true },
					'periode[]': { required: true },
               },
                messages: {
					Nom: {required: "required"},
					Telephone: {required: "required"},
					Courriel: {required: "required"},
					Sujet: {required: "required"},
					Texte: {required: "required"},
					infolettre: {required: "required"},					
					methodeContact: {required: "required"},
					'periode[]': {required: "required"},
                },
                submitHandler: function(form) {
                    $('#submit_btn').addClass('hide');
                    $('.submit_ajax').removeClass('hide');
                    $.ajax({
                        url: '../ajax/ajaxfile.php',
                        type: 'post',
                        dataType: 'json',
                        data: $('#contactFormBookVisit').serialize(),
                        success: function(data) {
                            $('#submit_btn').removeClass('hide');
                            $('.submit_ajax').addClass('hide');
                            var stat = 0;
                            if (data) {
                                if (data.status == 1) {
                                   stat = 1;
								   $("#registrationmsgbookvisiteng").html("<div class='alert alert-success'>Email sent succesfully. We will get back to you</div>");
                                   $('#contactFormBookVisit').each(function() {this.reset();});
                                   setTimeout(function()
								   {
									   $("#registrationmsgbookvisiteng").html('');
									   $(".mfp-close").click(); 
									   location.reload();
								   }, 5000);
                                }
                            }
                        }
                    });
                },
                highlight: function(element) {
                    $(element).closest('.form-group').removeClass('success').addClass('error');
                },
                success: function(element) {
                    element.text('').addClass('valid').closest('.form-group').removeClass('error').addClass('success');
                }
            });
        }
    }
    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });
})(jQuery, window, document);
// English Book a Visit

// French Home Page
(function($, W, D) {
    var JQUERY4U = {};
    JQUERY4U.UTIL = {
        setupFormValidation: function() {
            $('#contactFormfr').validate({
                rules: {
					Nom: { required: true },
					Telephone: { required: true },
					Courriel: { required: true },
					Sujet: { required: true },
					Texte: { required: true },
					infolettre: { required: false },					
					methodeContact: { required: true },
					'periode[]': { required: true },
               },
                messages: {
					Nom: {required: "required"},
					Telephone: {required: "required"},
					Courriel: {required: "required"},
					Sujet: {required: "required"},
					Texte: {required: "required"},
					infolettre: {required: "required"},					
					methodeContact: {required: "required"},
					'periode[]': {required: "required"},
                },
                submitHandler: function(form) {
                    $('#submit_btn').addClass('hide');
                    $('.submit_ajax').removeClass('hide');
                    $.ajax({
                        url: 'ajax/ajaxfile.php',
                        type: 'post',
                        dataType: 'json',
                        data: $('#contactFormfr').serialize(),
                        success: function(data) {
                            $('#submit_btn').removeClass('hide');
                            $('.submit_ajax').addClass('hide');
                            //var msg = 'Service request not completed. Try again later';
                            var stat = 0;
                            if (data) {
                                if (data.status == 1) {
                                    stat = 1;
									$("#registrationmsgfr").html("<div class='alert alert-success'>Email sent succesfully. We will get back to you</div>");
                                    $('#contactFormfr').each(function() {this.reset();});
                                   setTimeout(function()
								   {
									   $("#registrationmsgfr").html('');
									   $(".mfp-close").click(); 
								   }, 5000);
                                }
                            }
                        }
                    });
                },
                highlight: function(element) {
                    $(element).closest('.form-group').removeClass('success').addClass('error');
                },
                success: function(element) {
                    element.text('').addClass('valid').closest('.form-group').removeClass('error').addClass('success');
                }
            });
        }
    }
    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });
})(jQuery, window, document);
// French Home Page


// French Book a Visit
(function($, W, D) {
    var JQUERY4U = {};
    JQUERY4U.UTIL = {
        setupFormValidation: function() {
            $('#contactFormBookVisitFr').validate({
                rules: {
					Nom: { required: true },
					Telephone: { required: true },
					Courriel: { required: true },
					Sujet: { required: true },
					Texte: { required: true },
					infolettre: { required: false },					
					methodeContact: { required: true },
					'periode[]': { required: true },
               },
                messages: {
					Nom: {required: "required"},
					Telephone: {required: "required"},
					Courriel: {required: "required"},
					Sujet: {required: "required"},
					Texte: {required: "required"},
					infolettre: {required: "required"},					
					methodeContact: {required: "required"},
					'periode[]': {required: "required"},
                },
                submitHandler: function(form) {
                    $('#submit_btn').addClass('hide');
                    $('.submit_ajax').removeClass('hide');
                    $.ajax({
                        url: '../ajax/ajaxfile.php',
                        type: 'post',
                        dataType: 'json',
                        data: $('#contactFormBookVisitFr').serialize(),
                        success: function(data) {
                            $('#submit_btn').removeClass('hide');
                            $('.submit_ajax').addClass('hide');
                            var stat = 0;
                            if (data) {
                                if (data.status == 1) {
                                   stat = 1;
								   $("#registrationmsgbookvisitfr").html("<div class='alert alert-success'>Email sent succesfully. We will get back to you</div>");
                                   $('#contactFormBookVisitFr').each(function() {this.reset();});
                                   setTimeout(function()
								   {
									   $("#registrationmsgbookvisitfr").html('');
									   $(".mfp-close").click(); 
									   location.reload();
								   }, 5000);
                                }
                            }
                        }
                    });
                },
                highlight: function(element) {
                    $(element).closest('.form-group').removeClass('success').addClass('error');
                },
                success: function(element) {
                    element.text('').addClass('valid').closest('.form-group').removeClass('error').addClass('success');
                }
            });
        }
    }
    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });
})(jQuery, window, document);
// French Book a Visit