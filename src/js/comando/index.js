import { Dropdown } from "bootstrap";
import { Toast, validarFormulario } from "../funciones";
import Swal from "sweetalert2";
import DataTable from "datatables.net-bs5";
import { lenguaje } from "../lenguaje";


const tabla = document.getElementById('tablaComando')

let contador = 1;
const datatable = new DataTable('#tablaComando', {
    data: null,
    language: lenguaje,
    pageLength: '5',
    lengthMenu: [3, 9, 11, 25, 100],
    columns: [
        {
            title: 'No.',
            data: 'com_codigo',
            width: '2%',
            render: (data, type, row, meta) => {
                // console.log(meta.ro);
                return meta.row + 1;
            }
        },
        {
            title: 'nombre Comando',
            data: 'comando'
        },
        {
            title: 'Nombre Operacion',
            data: 'ope_nombre'
        },
        {
            title: 'fecha de operacion',
            data: 'ope_fecha_operacion'
        },
        {
            title: 'origen latitud',
            data: 'origen_latitud'
        },
        {
            title: 'origen longitud',
            data: 'origen_longitud'
        },
        {
            title: 'destino latitud',
            data: 'destino_latitud'
        },
        {
            title: 'destino longitud',
            data: 'destino_longitud'
        },
        {
           
            title: 'estado',
            data: 'ope_estado',
    
        },
        
       

    ]
})


const buscar = async () => {
    try {
        const url = "/is3_cuxum_nixon/API/comando/buscar"
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

