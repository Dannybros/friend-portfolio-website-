import React, {useRef , useEffect, useState} from 'react'
import * as d3 from 'd3'
import { update } from 'd3';
import '../Skill.css'

function BusinessBarchart() {

    const BBarChart = useRef();
    const update = useRef(false);

    const [dimension, setDimension] =useState({
        width :  window.innerWidth * 0.8,
        height : window.innerHeight * 0.6,
        // margin: 
    }) 

    const data = [
        { name:'communication', value:50},
        { name:'planning', value:70},
        { name:'Leadership', value:90},
        { name:'Teamwork', value:40},
        { name:'Analysis', value:30},
        { name:'Bullshit', value:90}
    ]
    const levels = [{name:'Basic', value:25}, {name:'Intermediate', value:50}, {name:'Master',  value:75}, {name:'Expert',  value:95}]
    
    const margin = window.innerWidth < 1000 ? {top: 30, right: 40, bottom: 100, left:50} : {top: 30, right: 100, bottom: 50, left: 100}

    const showdata=(data, dimension)=>{

        const width = dimension.width;
        const height = dimension.height;

        
        const svg = d3.select(BBarChart.current)
            .attr('width', width)
            .attr('height', height)
            .style('background-color', 'white')
        
        const x = d3.scaleBand()
                .domain(data.map(d => d.name))
                .range([margin.left, width - margin.right])
                .padding(0.4)
    
        const y = d3.scaleLinear()
                .domain([0, 100]).nice()
                .range([height - margin.bottom, margin.top])
    
        const xAxis = g => g
                .attr("transform", `translate(0,${height - margin.bottom })`)
                .call(d3.axisBottom(x).tickSizeOuter(0))
                .attr('class', 'bsBarXaxis')
                .selectAll('text')
                    .attr('class', 'Xaxis-textBs')
                    .attr("dx", `${window.innerWidth<710 ? '-3.4em' : '0'}`)
                    .attr("dy", "1em")
                    .style("font-family", "'monospace")
                    .style("text-transform", "uppercase")
    
                
        const yAxis = g => g
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))
                .style('color', 'black')
                
    
        const gx = svg.append('g')
                    .call(xAxis)
    
        const gy = svg.append('g')
                    .call(yAxis)
    
        const bar = svg.append("g")
                .attr("fill", "steelblue")
            .selectAll("rect")
            .data(data)
            .join("rect")
                .attr("class", "bars_busi")
                .attr("x", d => x(d.name))
                .attr("y", d => y(d.value))
                .attr("height", d => y(0) - y(d.value))
                .attr("width", x.bandwidth());
    
        const addlevel =(i)=>{
    
            svg.append('line')
                .attr('class', 'levelLine')
                .attr("x1", margin.left)
                .attr("y1", y(i))
                .attr("x2", width - 10)    
                .attr("y2", y(i))
        }
    
        const addText =(i, text)=>{
    
            svg.append('text')
                .attr('class', 'levelText')
                .attr('x', width - margin.right +10)
                .attr('y', y(i) -5)
                .attr('text-anchor', 'middle')
                .text(text);
        }
    
        levels.map((item)=>{
            addlevel(item.value)
            addText(item.value, item.name)
        })
    }
    
    useEffect(async() => {

        await window.addEventListener('resize', ()=>{
            setDimension({
                width :  window.innerWidth * 0.8,
                height : window.innerHeight * 0.6
            })

            if(update.current){
               d3.select(BBarChart.current).selectAll("*").remove();
            }else{update.current = true}
        })
        
       await showdata(data, dimension)
    }, [dimension])


    return (
        <div id="barchartBs">
            <div className="bs_title" style={{width:`${dimension.width}px`}}>This is my overall Business Skills</div>
            <svg ref={BBarChart}/>
        </div>
    )
}

export default BusinessBarchart
