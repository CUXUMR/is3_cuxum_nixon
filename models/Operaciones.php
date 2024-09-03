<?php

namespace Model;

class Operaciones extends ActiveRecord
{
    protected static $tabla = 'operaciones';
    protected static $idTabla = 'ope_codigo';
    protected static $columnasDB = ['ope_nombre', 'ope_fecha_operacion', 'ope_comando', 'ope_origen_lat', 'ope_origen_lon', 'ope_destino_lat', 'ope_destino_lon',  'ope_estado', 'ope_situacion'];

    public $ope_codigo;
    public $ope_nombre;
    public $ope_fecha_operacion;
    public $ope_comando;
    public $ope_origen_lat;
    public $ope_origen_lon;
    public $ope_destino_lat;
    public $ope_destino_lon;
    public $ope_estado;
    public $ope_situacion;


    public function __construct($args = [])
    {
        $this->ope_codigo = $args['ope_codigo'] ?? null;
        $this->ope_nombre = $args['ope_nombre'] ?? '';
        $this->ope_fecha_operacion = $args['ope_fecha_operacion'] ?? '';
        $this->ope_comando = $args['ope_comando'] ?? '';
        $this->ope_origen_lat = $args['ope_origen_lat'] ?? '';
        $this->ope_origen_lon = $args['ope_origen_lon'] ?? '';
        $this->ope_destino_lat = $args['ope_destino_lat'] ?? '';
        $this->ope_destino_lon = $args['ope_destino_lon'] ?? '';
        $this->ope_estado = $args['ope_estado'] ?? '';
        $this->ope_situacion = $args['ope_situacion'] ?? 1;
    }

   
    public static function obtenerOperacionesconQuery()
    {
        $sql = "SELECT * FROM Operaciones where ope_situacion = 1";
        return self::fetchArray($sql);
    }

     
    public static function obtenerComandoconQuery()
    {
        $sql = "SELECT 
    c.com_nombre AS comando,
    o.ope_nombre,
    o.ope_fecha_operacion,
    o.ope_origen_lat AS origen_latitud,
    o.ope_origen_lon AS origen_longitud,
    o.ope_destino_lat AS destino_latitud,
    o.ope_destino_lon AS destino_longitud,
    e.est_descripcion AS ope_estado
FROM 
    operaciones o
JOIN 
    comandos c ON o.ope_comando = c.com_codigo
JOIN 
    estado_operacion e ON o.ope_estado = e.est_codigo
WHERE 
    c.com_nombre = 'Comando Alfa';";
        return self::fetchArray($sql);
    }



    
}
