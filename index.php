<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <title>Maquette 360</title>
  <script>
    var support = false;
    var canvas = function() {
      var elem = document.createElement("canvas");
      return !!(elem.getContext && elem.getContext("2d"));
    };
    var svg = function() {
      return document.implementation.hasFeature(
        "http://www.w3.org/TR/SVG11/feature#Image",
        "1.1"
      );
    };
    if (!canvas || !svg) {
      document.getElementByTagName("body")[0].className += "not-supported";
    } else {
      support = true;
    }
  </script>

  <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1" />
  <link rel="stylesheet" href="css/style.min.css" />

  <script></script>
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

  <link href="https://fonts.googleapis.com/css?family=Montserrat Alternates" rel="stylesheet" />

  <link rel="stylesheet" href="./css/reset.css" />
  <link rel="stylesheet" href="./css/style.css" />
  <link rel="stylesheet" href="./TOAST2/css/style.css" />
</head>

<body>
  <canvas id="canvas-1" style="width: 100vw; height: 100vh;"></canvas>

  <div id="maquette-loader" class="loader">
    <img src="loader.svg" />
  </div>

  <div id="menu"></div>
  <div id="typologies"></div>
  <div id="tooltips">

  </div>

  <script src="init.js"></script>
  <script src="js/lang.js"></script>
  <script>
    var loader = document.getElementById("maquette-loader");
    loader.style.backgroundColor = config.options.color;
  </script>
  <script src="js/jquery.min.js"></script>

  <script src="js/jquery.maquette.1.1.6.min.js"></script>

  <script>
    $("body").maquette();
  </script>
  <script src="js/main.js"></script>
  <!-- Resource jQuery -->
</body>

</html>



<!-- <div class="container">
  <ul>
    <li style="border-radius: 14px 14px 0 0;">
      <span style="color: #000000;"> C2 </span>
    </li>
    <li>
      <span style="color: #000000;"> T4 </span>
    </li>
    <li>
      <span style="color: #000000;">149.00 m²</span>
    </li>
    <li class="primary">
      <span
        ><i class="fa fa-cube"></i> <br />
        Plan</span
      >
    </li>
  </ul>

  <div class="rectangle">
    <img src="./TOAST2/img/Polygone_2.png" alt="" />
  </div>
</div> -->


