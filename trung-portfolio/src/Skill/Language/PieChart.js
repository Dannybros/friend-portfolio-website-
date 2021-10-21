import React from 'react'
import Chart from 'react-apexcharts'
import '../Skill.css'

function PieChart () {
    
    const state = {
        options: {
            chart: {
                width: 500,
                type: 'donut',
            },
            labels: ["English", "Vietnamese", "Thai", "Lao", "Chinese", 'Janpanese'],
            
            plotOptions: {
                pie: {
                    dataLabels: {
                    offset: -5
                    }
                },
               
            },
            tooltip: {
                enabled:false,  
            },
            dataLabels: {
                enabled: true,
                style: {
                  colors: ['#111'],
                  fontSize: 12
                },
                background: {
                  enabled: true,
                  foreColor: '#fff',
                  borderWidth: 0
                }
            },
            stroke: {
                width: 4
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300
                    },
                    dataLabels: {
                        style:{
                            colors: ['#111'],
                            fontSize:8
                        } 
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
        series: [30, 40, 15, 10, 2, 3],
    }

    return (
      <div 
        className="donut" 
        style={{
            background:"#fff", 
            borderRadius: 20, 
            // marginBottom:"40px", 
            display:"flex", 
            flexDirection:'column', 
            justifyContent:"center"
        }}>

        <h4 style={{marginBottom:20, textAlign:'center', color:'#000', textTransform:"uppercase", height:"10%"}}>
            Percentage of languages I spoke since 2010 
        </h4>

        <Chart 
            options={state.options} 
            series={state.series} 
            type="pie" 
            width="400" 
            style={{display:"flex", justifyContent:"center", alignContent:"center"}}/>
      </div>
    )
}

export default PieChart
