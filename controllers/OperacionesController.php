<?php

namespace Controllers;

use Exception;
use Model\Operaciones;
use MVC\Router;

class OperacionesController
{
    public static function index(Router $router)
    {
        $operaciones = Operaciones::find(2);
        $router->render('operaciones/index', [
            'operaciones' => $operaciones
        ]);
    }



    public static function buscarAPI()
    {
        try {
            // ORM - ELOQUENT
            // $operaciones = Operaciones::all();
            $operaciones = Operaciones::obtenerOperacionesconQuery();
            http_response_code(200);
            echo json_encode([
                'codigo' => 1,
                'mensaje' => 'Datos encontrados',
                'detalle' => '',
                'datos' => $operaciones
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'codigo' => 0,
                'mensaje' => 'Error al buscar operaciones',
                'detalle' => $e->getMessage(),
            ]);
        }
    }
    

    


}
