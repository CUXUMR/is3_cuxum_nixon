<?php 
require_once __DIR__ . '/../includes/app.php';


use MVC\Router;
use Controllers\AppController;
use Controllers\GraficaController;
use Controllers\MapaController;
use Controllers\OperacionesController;

$router = new Router();
$router->setBaseURL('/' . $_ENV['APP_NAME']);

$router->get('/', [AppController::class,'index']);



//operaciones
$router->get('/operaciones', [OperacionesController::class,'index']);
$router->get('/API/operaciones/buscar', [OperacionesController::class,'buscarAPI']);

//grafica
$router->get('/grafica', [GraficaController::class, 'index']);
$router->get('/API/grafica/index', [GraficaController::class, 'estadisticaAPI']);

//mapa

$router->get('/mapa', [MapaController::class, 'index']);






// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();
