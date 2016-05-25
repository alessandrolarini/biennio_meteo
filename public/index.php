<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Coolate</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

        <!-- web fonts -->
        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

        <!-- font-awesome -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

        <!-- CSS -->
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/responsive.css">

        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <div id="app" class="container-fluid">

          <!-- loading -->
          <section id="loading">
            <div class="row">
              <div class="col-sm-12">
                <div id="loading-message">loading...</div>
              </div>
            </div>
          </section>

          <!-- home -->
          <section id="home">
            <div class="row">
              <div class="col-sm-12">
                <div id="content-home" class="content centered-holder">
                  <div id="background">
                    <ul id="scene">
                        <li class="layer1 layer" data-depth="0.50"><img /></li>
                        <li class="layer2 layer" data-depth="0.40"><img /></li>
                        <li class="layer3 layer" data-depth="0.30"><img /></li>
                        <li class="layer4 layer" data-depth="0.20"><img /></li>
                        <li class="layer5 layer" data-depth="0.10"><img /></li>
                    </ul>
                  </div>
                  <div id="weather" class="centered">
                    <div id="today" class="weather">
                      <div class="city"></div>
                      <div class="weather-icon"></div>
                      <div id="dati">
                        <div class="temp">
                          <ul>
                            <li class="high"></li>
                            <li class="low"></li>
                          </ul>
                        </div>
                        <div class="humidity"></div>
                        <div class="wind"></div>
                      </div>
                    </div>
                    <ul id="forecast">
                    <ul>
                    <div id="map">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- info -->
          <section id="info">
            <div class="row">
              <div id="content-info" class="col-sm-12 centered-holder">
                <div class="centered">
                  <p>This is the info section</p>
                </div>
              </div>
            </div>
          </section>


          <footer>
            <a href="./" class="link-home"><i class="fa fa-home"></i></a>
            <a href="#" class="link-refresh"><i class="fa fa-refresh"></i></a>
            <a href="#" class="link-info"><i class="fa fa-info"></i></a>
          </footer>
        </div>


        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
        <script src="js/purl.js"></script>
        <script src="js/plugins.js"></script>

        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

        <script src="http://maps.google.com/maps/api/js?sensor=false"
        async defer></script>

        <script src="js/shake.js"></script>
        <script src="js/jquery.simpleWeather.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='https://www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script>



        <!-- SCRIPT INIT -->
        <script>

          $(document).ready(function(){
            init()
            showSection("loading")
            getPosition()

          })
        </script>


        <!-- parallax JavaScript -->
    <script src="js/parallax.js"></script>
    <script>
        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);
    </script>

    </body>
</html>
