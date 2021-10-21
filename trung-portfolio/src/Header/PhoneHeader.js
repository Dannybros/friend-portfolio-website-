import React from 'react'
import './Header.css'
import { useHistory } from 'react-router';
import { FaBars } from 'react-icons/fa';

import { Link, animateScroll as Scroll } from "react-scroll";

function PhoneHeader() {
    const history =  useHistory();
    const clickBar =()=>{
        history.push('/')
    }
    return (
        <div>
            <div className="nav active">
                 <div className="nav-container">
                     <div className="pfp_box">
                        TRUNG LE QUANG
                    </div>
                     <FaBars onClick={clickBar} className="barIcon"/>
                 </div>
            </div>
            <div style={{width:"100%", height:"calc(100vh - 80px)", background:"#ddd"}}>
                <ul className="phoneBarlist" style={{display:"flex", height:"100%", flexDirection:"column", justifyContent:"space-evenly", alignItems:"center", listStyle:"none"}}>
                    
                    <li>
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Intro
                        </Link>
                    </li>
                    <li>Skills</li>
                    <li>Education</li>
                    <li>Experience</li>
                    <li>Contact</li>
                </ul>
            </div>
            
        </div>
    )
}

export default PhoneHeader
