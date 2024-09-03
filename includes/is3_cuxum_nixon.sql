
create database is3_cuxum_nixon


CREATE TABLE operaciones (
    ope_codigo serial, 
    ope_nombre VARCHAR(100) NOT NULL,
    ope_fecha_operacion DATE NOT NULL,
    ope_comando INT,
    ope_origen_lat DECIMAL(9, 6) NOT NULL,
    ope_origen_lon DECIMAL(9, 6) NOT NULL,
    ope_destino_lat DECIMAL(9, 6) NOT NULL,
    ope_destino_lon DECIMAL(9, 6) NOT NULL,
    ope_estado INT,
    ope_situacion smallint DEFAULT 1,
    PRIMARY KEY (ope_codigo),
    FOREIGN KEY (ope_comando) REFERENCES comandos(com_codigo),
    FOREIGN KEY (ope_estado) REFERENCES estado_operacion(est_codigo)
);


drop table operaciones

CREATE TABLE comandos (
    com_codigo serial, 
    com_nombre VARCHAR(50) NOT NULL,
    com_situacion smallint default 1,
    PRIMARY KEY (com_codigo) 
);

CREATE TABLE estado_operacion (
    est_codigo serial, 
    est_descripcion VARCHAR(50) NOT NULL,
    est_situacion smallint default 1,
    PRIMARY KEY (est_codigo)
);

select * from comandos
INSERT INTO comandos (com_nombre) VALUES ('Comando Alfa');
INSERT INTO comandos (com_nombre) VALUES ('Comando Bravo');
INSERT INTO comandos (com_nombre) VALUES ('Comando Charlie');
INSERT INTO comandos (com_nombre) VALUES ('Comando Delta');
INSERT INTO comandos (com_nombre) VALUES ('Comando Echo');

INSERT INTO estado_operacion (est_descripcion) VALUES ('Activo');
INSERT INTO estado_operacion (est_descripcion) VALUES ('Inactivo');
INSERT INTO estado_operacion (est_descripcion) VALUES ('Pendiente');
INSERT INTO estado_operacion (est_descripcion) VALUES ('Completado');
INSERT INTO estado_operacion (est_descripcion) VALUES ('Cancelado');


INSERT INTO operaciones (ope_nombre, ope_fecha_operacion, ope_comando, ope_origen_lat, ope_origen_lon, ope_destino_lat, ope_destino_lon, ope_estado) VALUES ('Operación tikal', '2024-09-03', 1, 14.6349, -90.5069, 14.6699, -90.5069, 1);
INSERT INTO operaciones (ope_nombre, ope_fecha_operacion, ope_comando, ope_origen_lat, ope_origen_lon, ope_destino_lat, ope_destino_lon, ope_estado) VALUES ('Operación maya', '2024-09-03', 2, 14.6349, -90.5069, 14.6349, -90.4719, 2);
INSERT INTO operaciones (ope_nombre, ope_fecha_operacion, ope_comando, ope_origen_lat, ope_origen_lon, ope_destino_lat, ope_destino_lon, ope_estado) VALUES ('Operación tohil', '2024-09-03', 3, 14.6082, -90.5215, 14.6427, -90.5215, 1);
INSERT INTO operaciones (ope_nombre, ope_fecha_operacion, ope_comando, ope_origen_lat, ope_origen_lon, ope_destino_lat, ope_destino_lon, ope_estado) VALUES ('Operación otonka', '2024-09-03', 4, 14.6349, -90.5069, 14.6004, -90.5069, 2);
INSERT INTO operaciones (ope_nombre, ope_fecha_operacion, ope_comando, ope_origen_lat, ope_origen_lon, ope_destino_lat, ope_destino_lon, ope_estado) VALUES ('Operación zutaka', '2024-09-03', 5, 14.6349, -90.5069, 14.6349, -90.5419, 3);

INSERT INTO operaciones (ope_nombre, ope_fecha_operacion, ope_comando, ope_origen_lat, ope_origen_lon, ope_destino_lat, ope_destino_lon, ope_estado) VALUES ('Operación tikal', '2024-09-03', 1, 14.6349, -90.5069, 14.6699, -90.5069, 1);
INSERT INTO operaciones (ope_nombre, ope_fecha_operacion, ope_comando, ope_origen_lat, ope_origen_lon, ope_destino_lat, ope_destino_lon, ope_estado) VALUES ('Operación maya', '2024-09-03', 1, 14.6349, -90.5069, 14.6349, -90.4719, 2);
INSERT INTO operaciones (ope_nombre, ope_fecha_operacion, ope_comando, ope_origen_lat, ope_origen_lon, ope_destino_lat, ope_destino_lon, ope_estado) VALUES ('Operación tohil', '2024-09-03', 3, 14.6082, -90.5215, 14.6427, -90.5215, 1);
INSERT INTO operaciones (ope_nombre, ope_fecha_operacion, ope_comando, ope_origen_lat, ope_origen_lon, ope_destino_lat, ope_destino_lon, ope_estado) VALUES ('Operación otonka', '2024-09-03', 4, 14.6349, -90.5069, 14.6004, -90.5069, 2);
INSERT INTO operaciones (ope_nombre, ope_fecha_operacion, ope_comando, ope_origen_lat, ope_origen_lon, ope_destino_lat, ope_destino_lon, ope_estado) VALUES ('Operación zutaka', '2024-09-03', 1, 14.6349, -90.5069, 14.6349, -90.5419, 3);

SELECT 
    com_nombre AS comando,
    COUNT(ope_codigo) AS cantidad_operaciones
FROM 
    comandos 
LEFT JOIN 
    operaciones  ON com_codigo = ope_comando
GROUP BY 
    com_nombre;
    
 
 
SELECT 
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
    c.com_nombre = 'Comando Alfa';

