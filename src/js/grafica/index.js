import { Dropdown } from "bootstrap";

import { Chart } from "chart.js/auto";

const canvas = document.getElementById('chartOperaciones')
const ctx = canvas.getContext('2d');
const btnactualizar = document.getElementById('actualizar')

const data = {
    labels: [],
    datasets: [{
        label: 'operaciones por comando',
        data: [],
        borderWidth: 5,
        backgroundColor: [] 
    }]
}





const chartOperaciones = new Chart(ctx, {
    type: 'bar',
    data: data,

})

const getEstadisticas = async () => {
    const url= '/is3_cuxum_nixon/API/grafica/index';
    const config= { method: "GET" };
    const response = await fetch(url, config);
    const data = await response.json();

    if (data) { 
        if (chartOperaciones.data.datasets[0]) {
            chartOperaciones.data.labels = [];
            chartOperaciones.data.datasets[0].data = [];
            chartOperaciones.data.datasets[0].backgroundColor = [];

            data.forEach(r => {
                chartOperaciones.data.labels.push(r.comando);
                chartOperaciones.data.datasets[0].data.push(r.cantidad_operaciones);
                chartOperaciones.data.datasets[0].backgroundColor.push(generateRandomColor());
            });
        }
    }
    chartOperaciones.update();
}



const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rebColor = `rgb(${r}, ${g}, ${b})`;
    return rebColor;
}


btnactualizar.addEventListener('click', getEstadisticas);