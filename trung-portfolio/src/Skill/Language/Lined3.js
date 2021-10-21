import React, {useRef, useEffect, useState} from 'react'
import * as d3 from 'd3'
import '../Skill.css'
import {vietnamese, english, chinese, lao, thai, japanese} from './LanguageInfo';

function Lined3() {

   
    const lineChart = useRef();
    const update = useRef(false);

    const margin = ({top: 20, right: 30, bottom: 30, left: 40})

    
    const [dimension, setDimension] = useState({
        width: window.innerWidth < 1000?  window.innerWidth * 0.8: window.innerWidth * 0.4,
    });
    
    useEffect(() => {

        window.addEventListener('resize', ()=>{
            setDimension({
                width: window.innerWidth < 1000?  window.innerWidth * 0.8: window.innerWidth * 0.4,
            })

            if(update.current){
                d3.selectAll('g').remove();
                d3.selectAll('path').remove();
            }else{update.current =true}
        })

        
        const width = dimension.width;
        const height = parseInt(d3.select('#lineD3').style('height')) - 50 -margin.bottom;

        const svg = d3.select(lineChart.current)
                    .attr('width', width)
                    .attr('height', height)
                    .style('background', 'white')
                    .style("-webkit-tap-highlight-color", "transparent")
                    .style("overflow", "visible");

        const line = d3.line()
            .defined(d => !isNaN(d.value))
            .x(d => x(d.name))
            .y(d => y(d.value))

        const x = d3.scaleTime()
                .domain(d3.extent(english, d => d.name))
                .range([margin.left, width - margin.right])

        const y = d3.scaleLinear()
                .domain([0, 100]).nice()
                .range([height - margin.bottom, margin.top])

            // xAxis
        svg.append('g')
                .attr("transform", `translate(0, ${height - margin.bottom})`)
                .attr("class", "xAxis")
                .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
                .style('color', 'black')
        
            // yAxis
        svg.append('g')
                .attr('transform', `translate(${margin.left}, 0)`)
                .attr("class", "yAxis")
                .style('color', 'black')
                .call(d3.axisLeft(y))
                .call(g => g.select(".tick:last-of-type text").clone()
                    .attr('x', 3)
                    .attr("text-anchor", "start")
                    .style('color', 'black')
                    .attr("font-weight", "bold")
                    .text(english.y));

            // x-gridline
        d3.selectAll("g.yAxis g.tick")
            .append("line")
            .attr("class", "gridline")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", width-margin.left - margin.right)
            .attr("y2", 0)
            .style('stroke-opacity', '0.2');


            // y-gridline
        d3.selectAll("g.xAxis g.tick")
            .append("line")
            .attr("class", "gridline")
            .attr("x1", 0)
            .attr("y1", -height + margin.bottom + margin.top)
            .attr("x2", 0)
            .attr("y2", 0)
            .style('stroke-opacity', '0.2');



            // lines
        const addline =(data, color)=>{
            svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr('class', 'test')
                .attr("stroke", color)
                .attr("stroke-width", 2)
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("d", line)
                .transition()
                    .duration(1000)
                    .ease(d3.easeLinear)
                    .on('start', function repeat() {
                        d3.active(this)
                            .transition()
                            .duration(2000)
                            .delay(2000)
                            .attrTween("stroke-dasharray", function() {
                                const length = this.getTotalLength();
                                return d3.interpolate(`0,${length}`, `${length},${length}`);
                            })
                            .on('end', repeat);
                    });
        }

        addline(english, 'red');
        addline(vietnamese, 'green');
        addline(chinese, 'rgba(75,192,192,1)');
        addline(lao, 'gold')
        addline(thai, 'purple')
        addline(japanese, 'steelblue')
    }, [dimension])

   
    return (
        <div id="lineD3">
            <h3 style={{margin:"20px 0px"}}>Language Skills Progress from 2006 to 2021</h3>
            <svg ref={lineChart}/>
        </div>
    )
}

export default Lined3
