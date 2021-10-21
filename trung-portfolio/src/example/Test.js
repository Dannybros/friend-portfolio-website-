import React from 'react'
import './test.css'
import laptop from '../img/R.png'
import * as d3 from 'd3';
import BusinessBarchart from '../Skill/Business/BusinessBarchart';

function Test() {
    const move =()=>{
        const height = parseInt( window.pageYOffset/20);

        // if(height > 45){
        //     height = 45
        // };

        d3.select('#testbar')
            .style('transform', `rotateX(${-height}deg)`)
    }

    // window.addEventListener('scroll', move);
    return (
        <div >
            <div className="test" >
                <div className="testbar" id="testbar">
                    <BusinessBarchart />
                </div>
                <img src={laptop} className="laptop"/>
            </div>
            <div style={{width:"100%", height:'50vh'}}></div>
        </div>
    )
}

export default Test
