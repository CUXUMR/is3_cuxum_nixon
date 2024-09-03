<?php

namespace Controllers;

use Exception;
use Model\Operaciones;
use MVC\Router;

class ComandoController
{
    public static function index(Router $router)
    {
        $comando = Operaciones::find(2);
        $router->render('comando/index', [
            'comando$comando' => $comando
        ]);
    }



    public static function buscarAPI()
    {
        try {
            // ORM - ELOQUENT
            // $comando = Operaciones::all();
            $comando = Operaciones::obtenerOperacionesconQuery();
            http_response_code(200);
            echo json_encode([
                'codigo' => 1,
                'mensaje' => 'Datos encontrados',
                'detalle' => '',
                'datos' => $comando
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'codigo' => 0,
                'mensaje' => 'Error al buscar comando$comando',
                'detalle' => $e->getMessage(),
            ]);
        }
    }

    
    public static function buscarComandoAPI()
    {
        try {
            // ORM - ELOQUENT
            // $comando = Operaciones::all();
            $comando = Operaciones::obtenerComandoconQuery();
            http_response_code(200);
            echo json_encode([
                'codigo' => 1,
                'mensaje' => 'Datos encontrados',
                'detalle' => '',
                'datos' => $comando
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'codigo' => 0,
                'mensaje' => 'Error al buscar comando$comando',
                'detalle' => $e->getMessage(),
            ]);
        }
    }
    

    


}
