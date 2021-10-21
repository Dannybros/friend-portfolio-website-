import React, {useState, useEffect} from 'react';
import './Header.css';
import ugly from '../img/ugly.jpg';
import { FaBars } from 'react-icons/fa';

import { Link } from "react-scroll";
import '../Intro/Intro.css';
import '../Education/Education.css';


function Header() {

    const [navColor, setNavColor] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [showBar, setShowBar] = useState(false);

    useEffect(() =>{
        const resizing=()=>{

            if(window.innerWidth <= 480){
                setIsTablet(true);
            }else{
                setIsTablet(false);
            }
            
        }
        window.addEventListener('resize', resizing);
        resizing();
    })

    const changeBg = () =>{
        if(window.scrollY >= 80){
            if(!showBar){

                setNavColor(true);
            }else{
                setNavColor(false);
            }
        }
        else{
            setNavColor(false);
        }
    }

    const clickBar =()=>{
        setShowBar(!showBar);
    }

    window.addEventListener('scroll', changeBg);

    return (
        <div className={navColor? "nav active"  : "nav"}>
            <div className="nav-container">
                {navColor? 
                    <div className="pfp_box">
                        TRUNG LE QUANG
                    </div>
                :
                    <img src={ugly} className="pfp-pic" alt="profilePic"/>
                }
                {isTablet?
                    <FaBars onClick={clickBar} style={{transform:"scale(1.5)"}} className="barIcon"/>
                    :
                    <div className= "nav-option">
                        <ul>
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
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section2"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section3"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    Education
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section4"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section5"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                }
            </div>
            {showBar &&
                <div style={{width:"100%", maxheight:"100vh",margin:"0", marginTop:"-80px", background:"#ddd", overflow:"hidden", zIndex:30, position: 'sticky'}}>
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
                                    onClick={clickBar}
                                >
                                    Intro
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section2"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={clickBar}
                                >
                                    Skill
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section3"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={clickBar}
                                >
                                    Education
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section4"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="section5"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            
            }
        </div>
    )
}

export default Header
