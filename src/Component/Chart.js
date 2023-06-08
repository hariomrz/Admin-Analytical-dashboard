import React from 'react';
import { Line } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip} from 'chart.js';
ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip
)

const TotalVisitsChart = () => {
    const data = {
      labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
      datasets: [
        {
          label: 'Total Visits',
          data: [ 30000, 22000, 40000, 28000, 44000, 38000],
          fill: false,
          borderColor: '#8E7CFD',
          backgroundColor: '#8E7CFD',
          pointBorderColor:'aqua',
          tension:0.4
        },
      ],
    };

    const options ={
        plugins:{
            legend: true,
        },
        scales:{
            y:{
              min:10000,
              max:50000
            }
        }
    }
  
    return(
      <div className='visul-data'>
        <div className='d-flex justify-content-between'>
        <h4>Total visits</h4>
        <h4 style={{color:'#7166F9', fontWeight:'bold'}}>42, 43M</h4>
        </div>
        
     <hr />
     <Line data={data} options={options} />

      </div>
    )
  };
  
  export default TotalVisitsChart;