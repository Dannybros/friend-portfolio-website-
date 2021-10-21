import React from 'react'
import {Line} from 'react-chartjs-2'
import '../Skill.css'

function LangLinechart() {
    
    const data = {
        labels: ['2016', '2017', '2018', '2019', "2020", '2021'],
        datasets: [
            {
                label: 'English',
                data: [3, 5, 7, 7.6, 8, 8.8],
                fill: true,
                borderColor: ['rgba(170, 28, 28)'],
                backgroundColor:['rgba(170, 28, 28,0.2)'],
                lineTension: 0.4, 
                pointRadius: 0, 
                
            },
            {
                label: 'Vietnam',
                data: [9, 9.3, 9.5, 9.2, 9.6, 9.5],
                borderColor: 'green',
                lineTension: 0.4, 
                  pointRadius: 0,     
            },
            {
                label: 'Chinese',
                data: [1.2, 1.3, 2, 1.7, 1.6, 1.5],
                fill: true,
                borderColor: ['rgba(75,192,192,1)'],
                backgroundColor:['rgba(75,192,192,0.2)'],
                lineTension: 0.4, 
                pointRadius: 0,    
            },
            {
                label: 'Lao',
                data: [1.5, 3, 4.7, 4.8, 5, 4.5],
                fill: true,
                borderColor: ['rgba(207, 235, 82 ,1)'],
                backgroundColor:['rgba(207, 235, 82, 0.2)'],
                lineTension: 0.4, 
                pointRadius: 0,    
            },
            {
                label: 'Thai',
                data: [0, 0, 0, 0.3, 3.2, 5.5],
                fill: true,
                borderColor: ['rgba(113, 15, 250, 1)'],
                backgroundColor:['rgba(113, 15, 250, 0.2)'],
                lineTension: 0.4, 
                pointRadius: 0,    
            },
            {
                label: 'Japanese',
                data: [0, 0, 1, 1.5, 3, 2.2],
                fill: true,
                borderColor: ['rgba(75,102,192,1)'],
                backgroundColor:['rgba(75,102,192,0.2)'],
                lineTension: 0.4, 
                pointRadius: 0,    
            },
        ]
    };

    return (
        <div  className="langlinechart" data-aos="zoom-in-down">
            <h3 style={{marginBottom:"20px"}}>Language Skills Progress from 2016 to 2021</h3>
            <Line 
                data={data} className="linechartjs" options={{maintainAspectRatio: false}}
            />
        </div>
    )
}

export default LangLinechart
