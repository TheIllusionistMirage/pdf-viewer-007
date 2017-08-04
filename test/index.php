<?php

  // Include dependencies
  require('../vendor/autoload.php');

  // Create new app
  $app = new Silex\Application();

  // Register view rendering
  $app->register( new Silex\Provider\TwigServiceProvider() ,
                  array( 'twig.path' => __DIR__.'/views'   , )
                );

  // Add web handlers
  $app->get( '/' ,
             function() use($app)
             {
               return $app['twig']->render('index.twig');
             }
           );

  $app->run();

?>
