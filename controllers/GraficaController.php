<?php

namespace Controllers;

use Exception;
use Model\Operaciones;
use MVC\Router;

class GraficaController
{
    public static function index(Router $router)
    {
        $productos = Operaciones::find(2);
        $router->render('grafica/index');
    }

    public static function estadisticaAPI(){
        try {
            $sql = "SELECT 
    com_nombre AS comando,
    COUNT(ope_codigo) AS cantidad_operaciones
FROM 
    comandos 
LEFT JOIN 
    operaciones  ON com_codigo = ope_comando
GROUP BY 
    com_nombre;
    ";
            
            $datos = Operaciones :: fetchArray($sql);
            echo json_encode($datos);
        }catch(Exception $e){
            echo json_encode([
                'detalle' => $e->getMessage(),
                'mensaje' => 'Ocurrio un error',
                'codigo' => 0
            ]);

        }
    }





   
}
