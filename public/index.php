<?php 
require_once __DIR__ . '/../includes/app.php';


use MVC\Router;
use Controllers\AppController;
use Controllers\ComandoController;
use Controllers\GraficaController;
use Controllers\LoginController;
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

//comando alfa
$router->get('/comando', [ComandoController::class, 'index']);
$router->get('/API/comando/buscar', [ComandoController::class,'buscarComandoAPI']);

//login
// $router->get('/', [LoginController::class, 'login']);
// $router->get('/logout', [LoginController::class, 'logout']);
// $router->get('/menu', [LoginController::class, 'menu']);
// $router->get('/registro', [LoginController::class, 'registro']);
// $router->post('/API/registro', [LoginController::class, 'registroAPI']);
// $router->post('/API/login', [LoginController::class, 'loginAPI']);




// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();
