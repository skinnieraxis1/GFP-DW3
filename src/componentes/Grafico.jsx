import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './Grafico.css'

ChartJS.register(ArcElement, Tooltip, Legend);

function Grafico () {
    
    const data = {
        labels: ['Comida', 'Alquiler', 'Luz', 'Agua', 'Ropa', 'Electronicos'],
        datasets: [
          {
            label: '# of Votes',
            data: [10, 20, 10, 5, 25, 20],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };

    return (
        <>
            <div className='espacio-grafico'>
                <Pie data={data} />
            </div>
        </>
    );
}

export default Grafico