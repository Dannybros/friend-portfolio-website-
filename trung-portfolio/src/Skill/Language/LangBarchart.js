import React, {useRef, useEffect, useState} from 'react'
import * as d3 from 'd3'
import '../Skill.css'

function LangBarchart() {

    const update = useRef(false);
    const data = [
        {id:'l1', name:'English', value:0.89, level:"Advance"},
        {id:'l2', name:'Vietnamese', value:1, level:"Native"},
        {id:'l3', name:'Thailand', value:0.54, level:"Intermediate"},
        {id:'l4', name:'Lao', value:0.45, level:"Intermediate"},
        {id:'l5', name:'Chinese', value:0.16, level:"Beginner"},
        {id:'l6', name:'Japanese', value:0.26, level:"Beginner"}
    ]

    const d3Chart = useRef();

    const [dimension, setDimension] = useState({
        width: window.innerWidth < 1000? window.innerWidth * 0.9: window.innerWidth * 0.5,
        height: window.innerHeight * 0.5,
        font: window.innerWidth < 1000? 10:14,
    });

    const drawBar = (data, dimensions) =>{

        const width = dimensions.width - margin.left - margin.right;
        const height = dimensions.height - margin.top - margin.bottom;

            // overall svg box
        const svg = d3.select(d3Chart.current)
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .style('background', '#fff')

            // x
        const x = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .range([margin.left, width + 20])
        
            // y
        const y = d3.scaleBand()
            .domain(d3.range(data.length))
            .rangeRound([margin.top, height - margin.bottom])
            .padding(0.2)

            // y-axis
        svg.append('g')
            .attr("transform", `translate(${margin.left }, 0)`)
            .style('font-size', dimension.font)
            .style('color', 'black')
            .call(d3.axisLeft(y).tickFormat(i => data[i].name).tickSizeOuter(0))

            // x-axis
        svg.append('g')
            .attr("transform", `translate(0,${margin.top})`)
            .style('font-size', dimension.font)
            .style('color', 'black')
            .style('font-weight', 'bold')
            .call(d3.axisTop(x).ticks(width / 80, "%"))
            .append('text')
                .attr('class', 'axis-level')
                .attr('y', height/2)
                .attr('x', 16)
                .attr('fill', 'black')
                .text('LANGUAGES')
                .style('writing-mode', ' vertical-rl')

            // rectangle bars
        const bar = svg.append("g")
            .attr("fill", "green")
            .selectAll("rect")
            .data(data)
            .join("rect")
                .attr("x", -400)
                .attr("y", (d, i) => y(i))
                .attr("height", y.bandwidth())
                .attr("width", d => x(d.value)-margin.left-2)
                .attr('cursor', 'pointer')
                .on('mouseover', function(d, i, event){
                    d3.select(this)
                        .transition()
                        .duration('500')
                        .attr('opacity', 0.7);
                })
                .on('mouseout', function (d, i) {
                    d3.select(this)
                        .transition()
                        .duration('500')
                        .attr('opacity', 1);
                })
                .order()
                .transition()
                    .duration(1500)
                    .delay((d, i)=> i*20)
                    .attr('x', margin.left +2)

            // text-levels
        svg.append("g")
                .attr("fill", "white")
                .attr("text-anchor", "end")
                .attr("font-family", "sans-serif")
                .attr("font-size", dimension.font)
            .selectAll("text")
            .data(data)
            .join("text")
                .attr("x", 0)
                .attr("y", (d, i) => y(i) + y.bandwidth() / 2)
                .attr("dy", "0.35em")
                .attr("dx", -7)
                .style("font-weight", "bold")
                .text(d => d.level)
            .call(text => text.filter(d => x(d.value) - x(0) < 50) // short bars
                .attr("dx", +4)
                .attr("fill", "black")
                .attr("text-anchor", "start"))
            .transition()
                    .duration(1500)
                    .delay((d, i)=> i*20)
                    .attr('x', d => x(d.value));
    }

    const margin = {top: 30, right: 0, bottom: 10, left: 100};

    useEffect(() => {

        window.addEventListener('resize', ()=>{
            setDimension({
                width: window.innerWidth < 1000? window.innerWidth *0.9: window.innerWidth * 0.5,
                height: window.innerHeight * 0.5,
                font: window.innerWidth < 1000? 10:14,
            })

            if(update.current){
                d3.selectAll('g').remove();
            }else{update.current = true}
        })

       drawBar(data, dimension)
    }, [dimension])

    return (
        <div style={{background:"#fff"}}>
            <h4 style={{marginTop:20, textAlign:'center'}} className="langBar_title">language Skills</h4>
            <div id="d3Chart_box">
                <svg ref={d3Chart}></svg>
            </div>
        </div>
    )
}

export default LangBarchart
