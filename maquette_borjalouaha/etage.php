<?php
require 'config.php';
if (isset($_GET["etage"])) {
	$etage = urldecode($_GET["etage"]);
	$etage = htmlspecialchars($_GET["etage"]);
	$etage = strip_tags($_GET['etage']);
}
?>
<!doctype html>
<html class="no-js" xml:lang="fr" lang="fr">

<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">


	<script>
		(function(w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({
				'gtm.start': new Date().getTime(),
				event: 'gtm.js'
			});
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'www.googletagmanager.com/gtm5445.html?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-NXP4DVV');
	</script>
	<script>
		(function(w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({
				'gtm.start': new Date().getTime(),
				event: 'gtm.js'
			});
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'www.googletagmanager.com/gtm5445.html?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-T6GH3JN');
	</script>
	<meta charset="UTF-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
	<!--<base href="https://www.condosaquablu.com/" />-->
	<title>Maquette Interactive</title>
	<meta name="robots" content="index,follow" />


	<link rel="apple-touch-icon" sizes="180x180" href="img/logo.png">

	<link rel="preconnect" href="https://ajax.googleapis.com/">
	<link rel="preconnect" href="https://www.googletagmanager.com/">
	<link rel="preconnect" href="https://www.google-analytics.com/">
	<link rel="dns-prefetch" href="https://ajax.googleapis.com/">
	<link rel="dns-prefetch" href="https://www.googletagmanager.com/">
	<link rel="dns-prefetch" href="https://www.google-analytics.com/">

	<meta name="format-detection" content="telephone=no">

	<link rel="stylesheet" type="text/css" href="css/stylesheet.min-v%3d21-3-2019_11-57-09AM.css" media="all" />

	<style>
		.alert {
			padding: 15px;
			margin-bottom: 20px;
			border: 1px solid transparent;
			border-radius: 4px;
			font-size: 15px;
		}

		.alert-success {
			color: #3c763d;
			background-color: #dff0d8;
			border-color: #d6e9c6;
		}

		.form-cols .col {
			position: relative
		}

		label.error {
			color: red;
			font-size: 11px;
			font-weight: normal;
			position: absolute;
			bottom: -14px;
		}

		.ajax_loader {
			float: left;
			width: 100%;
			text-align: center
		}

		.ajax_loader img {
			display: inline
		}

		.hide {
			display: none !important
		}

		/* [Object] Modal * =============================== */
		.modal {
			opacity: 0;
			visibility: hidden;
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			text-align: left;
			background: rgba(0, 0, 0, .9);
			transition: opacity .25s ease;
		}

		.modal__bg {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			cursor: pointer;
		}

		.modal-state {
			display: none;
		}

		.modal-state:checked+.modal {
			opacity: 1;
			visibility: visible;
			z-index: 100;
		}

		.modal-state:checked+.modal .modal__inner {
			top: 0;
		}

		.modal__inner {
			transition: top .25s ease;
			position: absolute;
			top: -20%;
			right: 0;
			bottom: 0;
			left: 0;
			width: 50%;
			margin: auto;
			overflow: auto;
			background: #fff;
			border-radius: 5px;
			padding: 5px;
			height: 80%;
			overflow: inherit
		}

		.modal__close {
			position: absolute;
			right: 1em;
			top: 1em;
			width: 1.1em;
			height: 1.1em;
			cursor: pointer;
		}

		.modal__close:after,
		.modal__close:before {
			content: '';
			position: absolute;
			width: 2px;
			height: 1.5em;
			background: #ccc;
			display: block;
			transform: rotate(45deg);
			left: 50%;
			margin: -3px 0 0 -1px;
			top: 0;
		}

		.modal__close:hover:after,
		.modal__close:hover:before {
			background: #aaa;
		}

		.modal__close:before {
			transform: rotate(-45deg);
		}

		@media screen and (max-width: 768px) {
			.modal__inner {
				width: 90%;
				height: 90%;
				box-sizing: border-box;
			}
		}
	</style>
</head>

<body class="fr">


	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXP4DVV" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6GH3JN" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>



	<div class="conteneur">





		<main id="main" class="contenu clearfix" role="main">
			<section role="region" class="strate-edifice2 strate-edifice2--petite">
				<div class="strate-edifice_inner">


					<div class="layout" style="margin-top: 100px;">
						<div class="strate-edifice2_boite">
							<a href="index.html" class="btn-retour">
								<svg class="icon icon-btn-fleche-droite">
									<use xlink:href="img/icones.svg#icon-btn-fleche-droite"></use>
								</svg>
								Retour
							</a>





							<div class="both"></div>
							<div class="texte centrer">
								<p class="etage">Etage <?php echo $etage; ?></p>
								<p class="sansMarge">Cliquer sur une unité<br class="mobileSeul"> pour en savoir plus</p>
							</div>
							<div align="center" class="row" style="position: absolute; top:10px; left: 740px;">
								<div style="text-align:center;padding-left:auto;padding-right:auto;">
									<div class="etiquette_dispo col-sm-4">disponible</div>
									<div class="etiquette_reserve col-sm-4">réservé</div>
									<div class="etiquette_vendu col-sm-4">vendu</div>
								</div>
							</div>

							<div id="plansEtages" class="relatif">

								<div id="etage<?php echo $etage; ?>" class="js-plan-etage">
									<div class="mapWrap">
										<?php
										$result = mysqli_query($link, "SELECT * FROM etages_immeuble WHERE etage='$etage'");
										if (!$result) {

											printf("Error: %s\n", mysqli_error($link));
											exit();
										}

										while ($row = mysqli_fetch_array($result)) {
											$etage_id = $row['id'];

										?>
											<img src="img/plans_etages/<?php echo $row['plan_etage']; ?>" class="notResizedInit" />

											<svg id="calque" class="calque" style="position: absolute; top:<?php echo $row['svg_top'] . 'px'; ?>; left: <?php echo $row['svg_left'] . 'px'; ?>; width: 100%;" height="420px" version="1.1" xmlns="http://www.w3.org/2000/svg">
												<?php
												$result_detail = mysqli_query($link, "SELECT * FROM details_etage WHERE etage_id='$etage_id'");
												if (!$result_detail) {

													printf("Error: %s\n", mysqli_error($link));
													exit();
												}

												while ($row_detail = mysqli_fetch_array($result_detail)) {


												?>
													<polygon id="poly<?php echo $row_detail['id']; ?>" class="hoverable <?php if ($row_detail['disponibilite'] == 'disponible') {
																															echo 'dispo';
																														} else if ($row_detail['disponibilite'] == 'reserve') {
																															echo 'reserve';
																														} else if ($row_detail['disponibilite'] == 'vendu') {
																															echo 'vendu';
																														} else {
																															echo 'hoverable';
																														} ?>" points="<?php echo $row_detail['coords']; ?>" onClick="zoning('<?php echo $row_detail['etage_id']; ?>', '<?php echo $row_detail['reference']; ?>');" onmouseover="displayEtiquette('etiquette<?php echo $row_detail['id']; ?>');" onmouseout="hideEtiquette('etiquette<?php echo $row_detail['id']; ?>');" />
												<?php
												}

												?>

											</svg>
											<?php
											$result_detail = mysqli_query($link, "SELECT * FROM details_etage WHERE etage_id='$etage_id'");
											if (!$result_detail) {

												printf("Error: %s\n", mysqli_error($link));
												exit();
											}

											while ($row_detail = mysqli_fetch_array($result_detail)) { ?>



												<div id="etiquette<?php echo $row_detail['id']; ?>" class="etiquette" style=" display: none; top: <?php echo $row_detail['etiquette_top'] . 'px'; ?>; left: <?php echo $row_detail['etiquette_left'] . 'px'; ?>; z-index: 100;">
													<?php echo $row_detail['reference']; ?>
												</div>
										<?php
											}
										}
										?>
									</div>

								</div>


								<div class="plans-etage_legende">
									<span class="legende_txt legende_txt--dispo">Disponible</span>
									<span class="legende_txt legende_txt--vendu">Vendu</span>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>


		</main>

	</div>

	<footer class="piedPage" role="contentinfo">
		<div class="layout piedPage_inner">
			<div class="piedPage_ctn">
				<small class="copyrights">
					<span class="noWrap">&copy; 2019 AL OMRANE CASABLANCA SETTAT. &nbsp;Tous droits réservés. &nbsp;</span>
				</small>



			</div>


		</div>
	</footer>







	<script type="text/javascript" src="js/jquery.min.js"></script>

	<script type="text/javascript" src="js/modernizr.js" defer></script>


	<script type="text/javascript" src="js/detectizr.js" defer></script>


	<script>
		window.jQuery || document.write('<script src="js/jquery/jquery-3.3.1.min.html"><\/script>')
	</script>


	<script>
		var p = '04_200';
		var l = 'fr';
	</script>


	<script type="text/javascript" src="js/picturefill.min.js" defer></script>


	<script type="text/javascript" src="js/svgxuse.min.js" defer></script>


	<script type="text/javascript" src="js/jQuery/swiper.min-v%3d4.js" defer></script>


	<script type="text/javascript" src="js/jQuery/magnific-popup.js" defer></script>


	<script type="text/javascript" src="js/jQuery/jquery.easing.js" defer></script>



	<script type="text/javascript" charset="ISO-8859-1">
		function chargeCarte() {
			var latlng = new google.maps.LatLng(45.51900, -73.781105);
			var myOptions = {
				zoom: 15,
				center: latlng,
				disableDefaultUI: true,
				gestureHandling: 'cooperative',
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: [{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [{
						"color": "#e9e9e9"
					}, {
						"lightness": 17
					}]
				}, {
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [{
						"color": "#f5f5f5"
					}, {
						"lightness": 20
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#ffffff"
					}, {
						"lightness": 17
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#ffffff"
					}, {
						"lightness": 29
					}, {
						"weight": 0.2
					}]
				}, {
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [{
						"color": "#ffffff"
					}, {
						"lightness": 18
					}]
				}, {
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [{
						"color": "#ffffff"
					}, {
						"lightness": 16
					}]
				}, {
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [{
						"color": "#f5f5f5"
					}, {
						"lightness": 21
					}]
				}, {
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [{
						"color": "#dedede"
					}, {
						"lightness": 21
					}]
				}, {
					"elementType": "labels.text.stroke",
					"stylers": [{
						"visibility": "on"
					}, {
						"color": "#ffffff"
					}, {
						"lightness": 16
					}]
				}, {
					"elementType": "labels.text.fill",
					"stylers": [{
						"saturation": 36
					}, {
						"color": "#333333"
					}, {
						"lightness": 40
					}]
				}, {
					"elementType": "labels.icon",
					"stylers": [{
						"visibility": "off"
					}]
				}, {
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [{
						"color": "#f2f2f2"
					}, {
						"lightness": 19
					}]
				}, {
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#fefefe"
					}, {
						"lightness": 20
					}]
				}, {
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#fefefe"
					}, {
						"lightness": 17
					}, {
						"weight": 1.2
					}]
				}]
			};
			// Créer la carte
			var map = new google.maps.Map(document.getElementById("carteEmplacement"), myOptions);

			// --------------- Créer un marqueurs -----------------
			var image_1 = '../../gx/m/pin2_fr.png';
			var latlng_1 = new google.maps.LatLng(45.520314, -73.781105);
			var marqueur_1 = new google.maps.Marker({
				position: latlng_1,
				map: map,
				icon: image_1
			}); /* Pointeur image */

			var image_2 = '../../gx/m/pin1.png';
			var latlng_2 = new google.maps.LatLng(45.5146133, -73.7719413);
			var marqueur_2 = new google.maps.Marker({
				position: latlng_2,
				map: map,
				icon: image_2
			}); /* Pointeur image */

			google.maps.event.addListener(marqueur_1, 'click', function() {
				document.getElementById("map").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d225.8690176798035!2d-73.78066788180068!3d45.52020091586998!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9233889737ce3%3A0x5e8d9c462eb7db5e!2sCondos+Aquablu+-+Bureau+des+ventes!5e1!3m2!1sen!2sca!4v1557343112035!5m2!1sen!2sca");
				$("#modal1_clickbtn").click();
			});
			google.maps.event.addListener(marqueur_2, 'click', function() {
				document.getElementById("map").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2356205808023!2d-73.77355635717839!3d45.51470628285965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b4f4c650f61be1e!2sAQUABLU+CONDOMINIUMS+1!5e1!3m2!1sen!2sca!4v1557430458087!5m2!1sen!2sca");
				$("#modal1_clickbtn").click();
			});
		}

		$(document).ready(function() {
			chargeCarte();
			$("#carteEmplacement").click(function(event) {
				location = "#myModal";
			});
		});
	</script>

	<script src="js/jquery.imagemapster.min.js" defer></script>
	<script defer>
		function resizePlan(imgEl) {
			var image = imgEl,
				imgWidth = image.width(),
				conteneurWidth = image.parent().parent().parent().find('.mapWrap').width();

			if (conteneurWidth > 1600) {
				conteneurWidth = conteneurWidth + 17;
			}

			// Détermine la vraie largeur de l'image
			var imageOriginal = new Image();
			imageOriginal.src = image.attr("src");
			var vraiWidth = imageOriginal.width;

			// Détermine si l'image doit être redimensionnée
			if (conteneurWidth <= vraiWidth || imgWidth <= vraiWidth) {
				if (conteneurWidth < vraiWidth) {
					image.mapster('resize', conteneurWidth);
				} else {
					image.mapster('resize', vraiWidth);
				}
			}
		}

		// Cherche les <areas> de la <map>
		function initAreas() {

			var arreas = $('map').find('area');
			var arrayAreas = [];

			arreas.each(function() {
				// Texte de l'infobulle
				var infoUnite = $(this).attr('id').split('|');

				// Choix du style
				var typeUnite = $(this).attr('data-type');
				// Numéro unique
				var nomUnite = $(this).attr('data-zoneId');

				// Disponible
				var contenuInfobulle = '<div class="contenuInfobulle">' + infoUnite[0] + '</div>';
				var texteDisponible = 'Available';
				if (l == 'fr') {
					texteDisponible = 'Disponible'
				}
				var backgroundInfobulle = '0f2131';

				// État différent
				var couleurBloc = backgroundInfobulle;
				var etatBloc = false;
				var etatSurvol = true;
				/*if ( $(this).hasClass('inactif')  ){
					couleurBloc = 'ededed';
					etatBloc = true;
					etatSurvol = false;
					contenuInfobulle = '<div class="contenuInfobulle inactif">' + $(this).attr('data-dispo') + '</div>';
				} else if( $(this).hasClass('reserve')  ){
					couleurBloc = 'ededed';
					etatBloc = true;
					etatSurvol = false;
					contenuInfobulle = '<div class="contenuInfobulle reserve">' + $(this).attr('data-dispo') + '</div>';
				} else*/
				if ($(this).hasClass('actif')) {
					contenuInfobulle = '<div class="contenuInfobulle">' + texteDisponible + '</div>';
				} else if ($(this).hasClass('etage') && $(this).hasClass('actif')) {
					etatBloc = true;
				}

				arrayAreas.push({
					key: nomUnite,
					highlight: true,
					toolTip: contenuInfobulle,
					render_highlight: {
						fillColor: backgroundInfobulle,
						fade: false
					},
					render_select: {
						fillColor: couleurBloc,
						fade: false
					},
					staticState: etatBloc,
					isSelectable: false,
					highlight: etatSurvol
				});
			});

			return arrayAreas;
		}
	</script>
	<script src="js/unite-v%3d1.0.js" defer></script>



	<script src="js/main-v%3d22-3-2019_05-49-46PM.js" defer></script>





	<script type="text/javascript" src="js/swap.js"></script>


	<script type="text/javascript" language="javascript">
		function search_date() {

			var filtre_chambres = $("#filtre_chambres").val();


			$(".unite-resultat_item").removeClass('hide');

			if (filtre_chambres != "") {
				$(".unite-resultat_item").addClass('hide');
				$("." + filtre_chambres).removeClass('hide');
			}





		}
	</script>

	<style type="text/css">
		.hide {
			display: none;
		}
	</style>


	<script type="text/javascript">
		function displayEtiquette(etiquette) {
			$("#" + etiquette).css("display", "block");
		}

		function hideEtiquette(etiquette) {
			$("#" + etiquette).css("display", "none");
		}

		function zoning(etage, lot) {
			window.location.href = 'detail.php?etage_id=' + etage + '&lot=' + lot;
		}
	</script>


</body>

<!-- Mirrored from www.condosaquablu.com/fr/plans/4-terrasse.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 23 Sep 2019 15:16:33 GMT -->

</html>