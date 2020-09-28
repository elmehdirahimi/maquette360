

/* PERSONALISATION DES CHECKBOX */
function setupLabel() {
	if ($('.label_check input').length) {
		$('.label_check').each(function(){
			$(this).removeClass('c_on');
		});
		$('.label_check input').each(function(){
			if($(this).is(":checked")){
				$(this).parent('label').addClass('c_on');
			}
		});
	};
	if ($('.label_radio input').length) {
		$('.label_radio').each(function(){
			$(this).removeClass('r_on');
		});
		$('.label_radio input:checked').each(function(){
			$(this).parent('label').addClass('r_on');
		});
	};
};

if (l == 'fr') {
	$.extend(true, $.magnificPopup.defaults, {
	  tClose: 'Fermer', // Alt text on close button
	  tLoading: 'Chargement...', // Text that is displayed during loading. Can contain %curr% and %total% keys
	  gallery: {
	    tPrev: 'Pr�c�dent', // Alt text on left arrow
	    tNext: 'Suivant', // Alt text on right arrow
	    tCounter: '%curr% de %total%' // Markup for "1 of 7" counter
	  },
	  image: {
	    tError: "<a href='%url%'>L'image</a> ne peux pas �tre charg�." // Error message when image could not be loaded
	  },
	  ajax: {
	    tError: '<a href="%url%">Le contenu</a> ne peux pas �tre charg�.' // Error message when ajax request failed
	  }
	});
}


$(function(){
	/* ========================================= */
	/* - - - - Initialisation de scripts - - - - */
	/* ========================================= */


	$('.label_check, .label_radio').click(function(){
		setupLabel();
	});
	$( ".label_check, .label_radio" ).bind( "change", function() {
		setupLabel();
	});
	setupLabel();

	if(p == '01_100' || p == '09_100') {
		$("#Telephone").inputmask("(999) 999-9999");
	}


	$('.agrandirImg').magnificPopup({ 
		type:'image',
		gallery:{ enabled:true },
		mainClass:'mfp-fade' 
	});


	// VID�O YOUTUBE
	$('.popup-youtube').magnificPopup({
		fixedContentPos: false,
		type: 'iframe',
        iframe: {
           patterns: {
               youtube: {
                   index: 'youtube.com', 
                   id: 'v=', 
                   src: '//www.youtube.com/embed/%id%?rel=0&autoplay=1'
                }
           }
        }  
	});

	// VID�O HTML5
	$('.popup-player').magnificPopup({
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,
	    fixedContentPos: false,
	    iframe: {
	        markup: '<div class="mfp-iframe-scaler">'+
	                '<div class="mfp-close"></div>'+
	                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
	              '</div>',

	        srcAction: 'iframe_src',
	        }
	});

	if(p == '01_100') {

		/* POPUP D'INSCRIPTION */
		/*$.magnificPopup.open({
			items: {
			    src: '#popup-inscription',
			    type: 'inline',
				preloader: false,
				focus: '#nom',
				callbacks: {
					beforeOpen: function() {
						if($(window).width() < 700) {
							this.st.focus = false;
						} else {
							this.st.focus = '#nom';
						}
					}
				}
			}, 
			closeOnBgClick: false
		});*/

		if ( $("#video1").length ) {
			var vid = document.getElementById("video1");

		//	if (vid.play()) { $(".video-accueil").addClass('js-video-play'); }

			// $(document).on("click", '#btn-video', function(event) { 
			// 	if ( $(this).hasClass('pause') ) {
			// 		$(this).removeClass('pause');
			// 		$(".video-accueil").addClass('js-video-play');
			// 		vid.play();
			// 	} else {
			// 		$(this).addClass('pause');
			// 		vid.pause();
			// 		$(".video-accueil").removeClass('js-video-play');
			// 	}
			// });

			// $("#video1").click(function(event) {
			// 	$(".video-accueil").removeClass('js-video-play');
			// });
		}
		
		var screen = $(window)    
    if (screen.width() > 800) {
        
			var mySwiper = new Swiper ('#carrousel-galerie', {
				slidesPerView: 6,
					slidesPerColumn: 2,
					spaceBetween: 2,
				autoplay: { delay: 5000 },
				speed: 500,
					navigation: {
							nextEl: '#carrousel-galerie .swiper-button-next',
							prevEl: '#carrousel-galerie .swiper-button-prev',
					}
			});
				
    }
		else {
			
			var mySwiper = new Swiper ('#carrousel-galerie', {
				slidesPerView: 3,
			    slidesPerColumn: 4,
			    spaceBetween: 2,
				autoplay: { delay: 5000 },
				speed: 500,
			    navigation: {
			        nextEl: '#carrousel-galerie .swiper-button-next',
			        prevEl: '#carrousel-galerie .swiper-button-prev',
			    }
			});
			
		}
		
		

		var mySwiper = new Swiper ('#carrousel-temoignage', {
	    	effect: 'fade',
	    	navigation: {
	        nextEl: '#carrousel-temoignage .swiper-button-next',
	        prevEl: '#carrousel-temoignage .swiper-button-prev',
	      },
	      pagination: {
	        el: '#carrousel-temoignage .swiper-pagination',
	        type: 'fraction',
	      }
		});		
		
		var mySwiper = new Swiper ('#hero-galerie', {
	    	effect: 'fade',
				autoplay: { delay: 5000 },
				speed: 500,
	    	navigation: {
	        nextEl: '#hero-galerie .swiper-button-next',
	        prevEl: '#hero-galerie .swiper-button-prev',
	      }
		});		

	}

	if (p == '02_100' || p == '03_100' || p == '05_100') {
		var swiperDescr = new Swiper ('.strate-descr_carrousel', {
			loop: true,
	    	navigation: {
		        nextEl: '.strate-descr_carrousel .swiper-button-next',
		        prevEl: '.strate-descr_carrousel .swiper-button-prev',
		    },
		    pagination: {
		        el: '.strate-descr_carrousel .swiper-pagination',
		        type: 'fraction',
		    }
		});
	}

	if (p == '03_100') {		
		var swiperArchitect = new Swiper ('.strate-architecture_carrousel', {
			loop: true,
	    	navigation: {
	        nextEl: '.strate-architecture_carrousel .swiper-button-next',
	        prevEl: '.strate-architecture_carrousel .swiper-button-prev',
	      },
	      pagination: {
	        el: '.strate-architecture_carrousel .swiper-pagination',
	        type: 'fraction',
	      }
		});	

		var swiperPiscine = new Swiper ('.strate-piscine_carrousel .swiper-container', {
			direction: 'vertical',	
			slidesPerView: 'auto',		
      		centeredSlides: true,
			loop: true,
	    	navigation: {
		        nextEl: '.strate-piscine_carrousel .swiper-button-next',
		        prevEl: '.strate-piscine_carrousel .swiper-button-prev',
		    },
		    on : {
  				init: function(){
					$('.popup-youtube').magnificPopup({
						fixedContentPos: false,
						type: 'iframe',
				        iframe: {
				           patterns: {
				               youtube: {
				                   index: 'youtube.com', 
				                   id: 'v=', 
				                   src: '//www.youtube.com/embed/%id%?rel=0&autoplay=1'
				                }
				           }
				        }  
					});
  				}
  			}
		});
	}


	/* =============================== */
	/* - - - - Fonctionaliti�s - - - - */
	/* =============================== */

	/* - - - - MENU BURGER V1 - - - - */
	function BurgerMove() {
		if($menuBurger){
			$menuBurger.appendTo('body').css('left', 0).fadeIn(500);
			$menuBurger = null;
		} else { 
			$menuBurger = $("#menuBurger").fadeOut(500).detach();
		}
		$("#btn-menuBurger").toggleClass('js-menu-ouvert');
		$(".conteneur").toggleClass('js-menu-ouvert');
		return this;
	};

	$menuBurger = $("#menuBurger").detach();
	$("#btn-menuBurger").on('click', function(){ BurgerMove(); });

	/* Sous-menu */
	$menuBurger.find(".avecSousMenu > .menuBurger_lnk, .avecSousMenu > .sousMenu_lnk").on('click', function(){
		$(this).parent().parent().find(".avecSousMenu a").not($(this)).removeClass('js-sousMenu-ouvert');
		$(this).toggleClass('js-sousMenu-ouvert');
		$(this).parent().parent().find(".avecSousMenu a").not($(this)).next("ul").slideUp(300);		
		$(this).next(".menuBurger_sousMenu").slideToggle(600);
		return false;
	});
	/* Ferme le menu sur click ext�rieur */
	$(document).bind("mouseup touchend", function(e){
		if ($(e.target).closest($("#menuBurger")).length === 0 && $(e.target).closest($(".btn-menuBurger")).length === 0) {
			if($(".conteneur").hasClass('js-menu-ouvert')) { 
				BurgerMove();
				e.preventDefault();
			}
		}
	});
	/* - - - - /FIN MENU BURGER - - - - */

	/* - - - - ENT�TE STICKY - - - - -
	$(window).scroll(function() {
		if($(window).scrollTop() >= 150) {
			$("#entete").addClass("js-scroll");
		} else {
			$("#entete").removeClass("js-scroll");
		}
	});  */

	if(p == '01_100') {
		/* - - -  - - - */
		$(document).on('click','.js-videoPoster',function(e) {
			//annuler le bouton d'action standard
			e.preventDefault();
			var poster = $(this);
			// chercher le parent le plus proche en classe
			var wrapper = poster.closest('.js-videoWrapper');
			videoPlay(wrapper);
		});

		//reproduire la vid�o en masquant l'affiche
		function videoPlay(wrapper) {
			var iframe = wrapper.find('.js-videoIframe');
			// Prendre le lien vid�o � partir des donn�es
			var src = iframe.data('src');
			// affiche cach�e
			wrapper.addClass('videoWrapperActive');
			wrapper.parent(".carrousel-temoignage_slide").addClass('js-video-play');
			// nous substituons dans le param�tre src des data
			iframe.attr('src',src);
		}
	}

	if(p == '02_100') {

		$('.panorama--affiche').paver({ gracefulFailure: false });

		// Changer vue d'�tage
		$("#panorama-bas").click(function(){
			$ID = $('.panorama--affiche').attr("id").substr(-1);
			if($ID == '5') {
				$NEXT = 1;
			} else {
				$NEXT = parseInt($ID) + 1;
			}

			$('.panorama--affiche').fadeOut(500).removeClass('panorama--affiche');
			$('#vue'+$NEXT).fadeIn(500).addClass('panorama--affiche');

			$('.panorama--affiche').paver({ gracefulFailure: false });

			$('.panorama_nom--affiche').removeClass('panorama_nom--affiche');
			$('[data-label=vue'+$NEXT+']').addClass('panorama_nom--affiche');
		});

		$("#panorama-haut").click(function(){
			$ID = $('.panorama--affiche').attr("id").substr(-1);
			if($ID == '1') {
				$PREV = 5;
			} else {
				$PREV = parseInt($ID) - 1;
			}

			$('.panorama--affiche').fadeOut(500).removeClass('panorama--affiche');
			$('#vue'+$PREV).fadeIn(500).addClass('panorama--affiche');

			$('.panorama--affiche').paver({ gracefulFailure: false });

			$('.panorama_nom--affiche').removeClass('panorama_nom--affiche');
			$('[data-label=vue'+$PREV+']').addClass('panorama_nom--affiche');
		});

	}

	if(p == '04_200') {
		/* Image map des b�timents, �tages et unit�s */
		$('img[usemap]').each(function() {
			$(this).mapster({
				// Options de style
				fill: true,
				fillColor: '003767',
				fillOpacity: 0,		
				stroke: true,
				strokeColor: '003767',
				strokeOpacity: 0,
				strokeWidth: 1,
				// Affiche l'infobulle
				showToolTip: true,
				// R�initialise le conteneur de l'infobulle
				toolTipContainer: '',
				// Seulement une zone peut �tre s�lectionn�e � la fois
				singleSelect: true,
				// Retire le fade
				fade: false,
				// Indique qu'il y a des liens sur les zones
				clickNavigate: true,
				// Num�ro unique de la zone, si plusieurs zones poss�dent le m�me num�ro, elles seront affich�es en m�me temps
				mapKey: 'data-zoneId',
				// Initialise les zones
				areas: initAreas(),
				onClick: function(e) {}
			});	
						
			/* Redimenssionne le plan */
			var resizeTimer;		
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(resizePlan($(this)), 100);		


		});		


		$( document ).ready(function() {
			
			$('video').on('ended', function () {
  			this.load();
  			this.play();
			});
			
			/*Replacement des points pour le responsive*/
			var largeurOriginal = 938;
			var largeurActuel = $('.mapWrap').width();
			var pourcentageLargeur = largeurActuel/largeurOriginal;

			var hauteurOriginal = 562;
			var hauteurActuel = $('.mapWrap').height();
			var pourcentageHauteur = hauteurActuel/hauteurOriginal;

			var largeurPuce = 20;
			var nouvelleTailleLargeur = largeurPuce*pourcentageLargeur;
			var nouvelleTailleHauteur = largeurPuce*pourcentageHauteur;

			/*Resize selon le pourcentage*/
			$( ".puce_span_map" ).each(function(index,item){
			  var leftValeur = $(item).attr('data-left')*pourcentageLargeur;
			  $(item).css('left',leftValeur);
			  var topValeur = $(item).attr('data-top')*pourcentageHauteur-10;
			  $(item).css('top',topValeur);
			  $(item).show();
			});

			$( ".puce_image_map" ).each(function(index,item){
				$(item).css('width',nouvelleTailleLargeur);
				$(item).css('height',nouvelleTailleHauteur);
			});
		});

		$(".etage").click(function(event) {
			$(".planEtage").hide();

			var $ID = $(this).attr("rel");
			$("#"+$ID).show();

			var imageMapAffiche =  $("#"+$ID).find('img[usemap]');		
			var resizeTimer;		
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(resizePlan(imageMapAffiche), 200);		

			// Afficher plan d'�tage
			var entete = 0; // $("#entete").outerHeight(); remplacer le zero si ent�te stiky
	        var target = $('#selecteurPlanEtage');
	        if (target.length) {
	            $('html,body').animate({ scrollTop: target.offset().top - entete}, 750);
	        }

	        $("#js-titreEtage").html($(this).attr('data-title'));
	        $("#filtre_etage").val($(this).attr('data-id'));

	        var EtageId = $(this).attr('data-id');
	        $.ajax({
				type: "post"
				,url: "inc/ajax/CONDO/uniteListe.cfm"
				,cache: false
				,data: {'EtageId' : EtageId }
				,dataType : "json"
				,error: function(){}
				,success: function(data){ 
					$('#js-listeUnite').html(data.htmlListeUnites);
				}
			});

			return false;
		});


		$('.uniteArea').click(function(e) {
	        e.preventDefault();
            var target = $(this).attr('target');
            if (target=='_blank' && !$(this).hasClass('inactif')) {            	
                window.open($(this).attr('data-href'));
            }
            return false;
	    });


		$("#filtre_etage, #filtre_type").change(function(event) { 
			console.log("working");
			var EtageId = $("#filtre_etage").val();
			var TypeId = $("#filtre_type").val();

		    $.ajax({
				type: "post"
				,url: "inc/ajax/uniteListe.cfm"
				,cache: false
				,data: {
					'EtageId' : EtageId, 
					'TypeId' : TypeId 
				}
				,dataType : "json"
				,error: function(){}
				,success: function(data){ 
					$('#js-listeUnite').html(data.htmlListeUnites);
				}
			});

			$("#js-titreEtage").text($("#filtre_etage option:selected").text());
		});
	}

	if(p == '04_200') {
		$("#plansEtages .js-plan-etage").not(':first').hide();
		$("#etage").change(function(){
			$ID = $(this).val();
			$("#plansEtages .js-plan-etage").hide();
			$("#"+$ID).show();
		});
	}


	if (p == '05_100') {
		$("#location-carte").find('.point_tooltip').hide();

		$("#location-carte").find('.point_hotspot').click(function(){
			$(this).prev('.point_tooltip').toggle();
		});
	}
	

	/* - - - Evite le double-submit - - - */
	$('form').on('submit',function(e){
		var $form = $(this);
		if ($form.data('submitted') === true) {
			e.preventDefault();
		} else {
			$form.data('submitted', true);
		}
	});


	$(".erreur").keydown(function(event) {
		$(this).removeClass('erreur');
	});
	$( ".erreur" ).bind( "change", function() {
		$(this).removeClass('erreur');
	});


	/* Renvoie une image par d�faut � la place des images bris�es */
	$('img').one('error', function() { this.src = 'gx/00/defaut.jpg'; });


	$(document).on("focusin",".form input:not([type=checkbox]):not([type=radio]):not([type=file]), .form textarea, input[name=champRech]",function(){ champRempli($(this)); });
	$(document).on("blur",".form input:not([type=checkbox]):not([type=radio]):not([type=file]), .form textarea, input[name=champRech]",function(){ champRempli($(this)); });

	/* ========================= */
	/* - - - - Animation - - - - */
	/* ========================= */


	if(p == '01_100') {
		$(".groupe-etage_tooltip").click(function(event) {
			$(".groupe-etage_popup").not($(this).prev(".groupe-etage_popup")).animate({opacity: 0, left: '-100%'}, 600, 'easeInBack');
			$(".groupe-etage_tooltip").not($(this)).removeClass('js-actif');
			if($(this).hasClass('js-actif') == 1) { 
				$(this).prev(".groupe-etage_popup").animate({opacity: 0, left: '-100%'}, 1200, 'easeInBack');
			    $(this).removeClass('js-actif');
			} else {
			    $(this).prev(".groupe-etage_popup").css({"left":"-700px"}).animate({opacity: 1, left: '3%'}, 1200, 'easeOutBack');
			    $(this).addClass('js-actif');
			}
		});
	}


	/* - - - Smooth scroll (Lien Haut de page) - - - */
	$('a[href*=\\#]:not([href=\\#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({ scrollTop: target.offset().top}, 750);
					return false;
			}
		}
	});

});

/* ====================== */
/* - - - - Resize - - - - */
/* ====================== */
$(window).resize(function() {

});

/* - - - Avoir le libell� d'un champ avec le visuel correspondant - - - */
function champRempli(element){
	element.each(function(){
		if( $(this)[0].value.length > 0 ) {
			$(this).addClass("rempli");
		}else{
			$(this).removeClass("rempli");
		}
	})
}


$(window).on('load', function(){
	champRempli( $('.form input:not([type=checkbox]):not([type=radio]):not([type=file]), .form textarea, input[name=champRech]') );
});


/* Pour enlever les console.log lorsqu'aucune console n'est disponible */
(function(){var e;var t=function(){};var n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];var r=n.length;var i=window.console=window.console||{};while(r--){e=n[r];if(!i[e]){i[e]=t}}})()
