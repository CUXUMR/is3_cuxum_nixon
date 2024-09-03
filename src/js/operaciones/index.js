import { Dropdown } from "bootstrap";
import { Toast, validarFormulario } from "../funciones";
import Swal from "sweetalert2";
import DataTable from "datatables.net-bs5";
import { lenguaje } from "../lenguaje";


const tabla = document.getElementById('tablaOperaciones')
const estado = {
    1: 'Activo',
    2: 'Inactivo',
    3: 'Pendiente',
    2: 'Completado',
    3: 'Cancelado',

};

let contador = 1;
const datatable = new DataTable('#tablaOperaciones', {
    data: null,
    language: lenguaje,
    pageLength: '5',
    lengthMenu: [3, 9, 11, 25, 100],
    columns: [
        {
            title: 'No.',
            data: 'per_codigo',
            width: '2%',
            render: (data, type, row, meta) => {
                // console.log(meta.ro);
                return meta.row + 1;
            }
        },
        {
            title: 'nombre operacion',
            data: 'ope_nombre'
        },
        {
            title: 'fecha',
            data: 'ope_fecha_operacion'
        },
        {
            title: 'comando',
            data: 'ope_comando'
        },
        {
            title: 'origen latitud',
            data: 'ope_origen_lat'
        },
        {
            title: 'origen longitud',
            data: 'ope_origen_lon'
        },
        {
            title: 'destino latitud',
            data: 'ope_destino_lat'
        },
        {
            title: 'destino longitud',
            data: 'ope_destino_lon'
        },
        {
           
            title: 'estado',
            data: 'ope_estado',
            render: (data, type, row, meta) => {
                // Usa el mapa de estados para obtener el nombre correspondiente
                return estado[data] || 'Desconocido'; // 'Desconocido' en caso de que el estado no esté en el mapa
        },
        }
       

    ]
})


const buscar = async () => {
    try {
        const url = "/is3_cuxum_nixon/API/operaciones/buscar"
        const config = {
            method: 'GET',
        }

        const respuesta = await fetch(url, config);
        const data = await respuesta.json();
        const { codigo, mensaje, detalle, datos } = data;

        // tabla.tBodies[0].innerHTML = ''
        // const fragment = document.createDocumentFragment();
        console.log(datos);
        datatable.clear().draw();

        if (datos) {
            datatable.rows.add(datos).draw();
        }
        // if (codigo == 1) {
        //     let counter = 1;
        //     datos.forEach(usuario => {
        //         const tr = document.createElement('tr');
        //         const td1 = document.createElement('td');
        //         const td2 = document.createElement('td');
        //         const td3 = document.createElement('td');
        //         const td4 = document.createElement('td');
        //         const buttonModificar = document.createElement('button');
        //         const buttonEliminar = document.createElement('button');
        //         td1.innerText = counter
        //         td2.innerText = producto.nombre
        //         td3.innerText = producto.precio

        //         buttonModificar.classList.add('btn', 'btn-warning')
        //         buttonEliminar.classList.add('btn', 'btn-danger')
        //         buttonModificar.innerText = 'Modificar'
        //         buttonEliminar.innerText = 'Eliminar'

        //         buttonModificar.addEventListener('click', () => traerDatos(producto))
        //         buttonEliminar.addEventListener('click', () => eliminar(producto))

        //         td4.appendChild(buttonModificar)
        //         td4.appendChild(buttonEliminar)

        //         counter++

        //         tr.appendChild(td1)
        //         tr.appendChild(td2)
        //         tr.appendChild(td3)
        //         tr.appendChild(td4)
        //         fragment.appendChild(tr)
        //     })
        // } else {
        //     const tr = document.createElement('tr');
        //     const td = document.createElement('td');
        //     td.innerText = "No hay productos"
        //     td.colSpan = 4

        //     tr.appendChild(td)
        //     fragment.appendChild(tr)
        // }

        // tabla.tBodies[0].appendChild(fragment)

    } catch (error) {
        console.log(error);
    }
}
buscar();

