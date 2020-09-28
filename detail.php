<?php
require 'config.php';
if (isset($_GET["etage_id"]) && isset($_GET["lot"])) {
	$etage_id = urldecode($_GET["etage_id"]);
	$etage_id = htmlspecialchars($_GET["etage_id"]);
	$etage_id = strip_tags($_GET['etage_id']);
	$lot = urldecode($_GET["lot"]);
	$lot = htmlspecialchars($_GET["lot"]);
	$lot = strip_tags($_GET['lot']);
}
?>
<!doctype html>
<html class="no-js" xml:lang="fr" lang="fr">

<head>


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
	<meta name="theme-color" content="#003767">
	<meta name="msapplication-TileColor" content="#ffffff">




	<link rel="preconnect" href="https://ajax.googleapis.com/">
	<link rel="preconnect" href="https://www.googletagmanager.com/">
	<link rel="preconnect" href="https://www.google-analytics.com/">
	<link rel="dns-prefetch" href="https://ajax.googleapis.com/">
	<link rel="dns-prefetch" href="https://www.googletagmanager.com/">
	<link rel="dns-prefetch" href="https://www.google-analytics.com/">



	<link rel="stylesheet" type="text/css" href="./maquette_borjalouaha/css/stylesheet.min-v%3d21-3-2019_11-57-09AM.css" media="all" />
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

		.tt {
			height: 100%;
			font: 800 2.125em montserratregular, Arial, sans-serif;
			margin: 10px;

		}
	</style>
</head>

<body class="fr">



	<!-- <script>
		$(".btn-close").on("click", function() {
			a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), g.$element.find(g.selector + ", .backdrop, " + g.selector + ", #lightbox-loader").remove(), g.$element.trigger("close")
		});
	</script> -->

	<!-- <div class="btn-close">
		<a href="#" id="kkk" class="btn-circle">
			<svg viewBox="0 0 155 155" width="40px" height="40px">
				<g>
					<path d="M 103.92969 46.794922 L 77.765625 72.921875 L 51.693359 47.068359 L 47.910156 50.84375 L 73.982422 76.699219 L 47.669922 102.97461 L 51.425781 106.77734 L 77.777344 80.462891 L 104.36523 106.82812 L 108.15039 103.05273 L 81.560547 76.685547 L 107.6875 50.595703 L 103.92969 46.794922 z "></path>
				</g>
			</svg>
		</a>
	</div> -->

	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXP4DVV" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6GH3JN" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>


	<?php
	$result = mysqli_query($link, "SELECT * FROM etages_immeuble WHERE id='$etage_id'");
	if (!$result) {

		printf("Error: %s\n", mysqli_error($link));
		exit();
	}
	while ($row = mysqli_fetch_array($result)) {
		$etage = $row['etage'];
	}
	?>

	<div class="tt">
		<?php
		$result = mysqli_query($link, "SELECT * FROM details_etage WHERE etage_id='$etage_id' AND reference='$lot'");
		if (!$result) {

			printf("Error: %s\n", mysqli_error($link));
			exit();
		}
		while ($row = mysqli_fetch_array($result)) {
			$nbre_chambres = $row['nbre_chambres'];
			$nbre_sdb = $row['nbre_sdb'];
			$superficie = $row['superficie'];
			$terrasse = $row['terrasse'];
			$disponibilite = $row['disponibilite'];
			$plan_2d_image = $row['plan_2d_image'];
			$plan_2d_pdf = $row['plan_2d_pdf'];
		}
		?>

		<div class="detail">
			<div class="detail_col1">
				<img src="./maquette_borjalouaha/img/plans_lots/<?php echo $plan_2d_image; ?>" alt="">
			</div>
			<div class="detail_col2">
				<p class="detail_txt1">
					<?php if ($nbre_chambres > 0) {
						echo $nbre_chambres . ' CHAMBRES + SALON <br>';
					}
					if ($nbre_sdb > 0) {
						echo $nbre_sdb . ' SALLES DE BAIN';
					} ?>

				</p>

				<dl class="detail_liste">
					<dt>Superficie:</dt>
					<dd><?php echo $superficie; ?> m<sup>2</sup></dd>
					<dt>Terrasse:</dt>
					<dd><?php echo $terrasse; ?> m<sup>2</sup></dd>
					<dt>Total:</dt>
					<dd><?php echo $terrasse + $superficie; ?> m<sup>2</sup></dd>
					<dt>Étage:</dt>
					<dd> <?php echo $etage; ?><sup>e</sup> étage </dd>
				</dl>
			</div>
		</div>
		<div class="strate-edifice2_ctnBoutons">


			<a href="./maquette_borjalouaha/pdf/<?php echo $plan_2d_pdf; ?>" target="_blank" class="bouton2">Le plan</a>
		</div>






	</div>






	<script type="text/javascript" src="js/modernizr.js" defer="defer"></script>


	<script type="text/javascript" src="js/detectizr.js" defer="defer"></script>


	<script src="js/jquery.min.js"></script>
	<script>
		window.jQuery || document.write('<script src="js/jquery/jquery-3.3.1.min.html"><\/script>');
	</script>


	<script>
		var p = '04_300';
		var l = 'fr';
	</script>


	<script type="text/javascript" src="js/picturefill.min.js" defer="defer"></script>


	<script type="text/javascript" src="js/svgxuse.min.js" defer="defer"></script>


	<script type="text/javascript" src="js/jQuery/swiper.min-v%3d4.js" defer="defer"></script>


	<script type="text/javascript" src="js/jQuery/magnific-popup.js" defer="defer"></script>


	<script type="text/javascript" src=".js/jQuery/jquery.easing.js" defer="defer"></script>






	<script src="js/main-v%3d22-3-2019_05-49-46PM.js" defer="defer"></script>





	<script type="text/javascript" src="cdn.callrail.com/companies/586157599/fca1e1f4891fc9492c70/12/swap.js"></script>







</body>

<!-- Mirrored from www.condosaquablu.com/fr/plans/terrasse/15-amalfi.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 23 Sep 2019 15:18:05 GMT -->

</html>