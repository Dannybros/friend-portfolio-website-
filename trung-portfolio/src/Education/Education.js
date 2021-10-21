import React, {useRef, useEffect} from 'react'
import './Education.css'
import UTCC from '../img/utcc.jpg'
import japan from '../img/kindergarten.jpg'
import kis from '../img/kis.jpg'
import kis1 from '../img/kis1.jpg'
import * as d3 from 'd3';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Education() {

    const wav1 =useRef();
    const wav2 = useRef();

    
    useEffect(() => {
       AOS.init();
    }, [])
    
    const tellv=()=>{
        
        const value1 =window.scrollY + 300;
        const value2 =window.scrollY + 140;

        d3.select( wav1.current)
            .style('background-position-x', `${value1}px`);

        d3.select( wav2.current)
            .style('background-position-x', `${value2}px`);
    }

    window.addEventListener('scroll', tellv)

    return (
        <div className="education_section" id="section3">
            {/* waves */}
            <div className="wave" id="wave1" ref={wav1}/>
            <div className="wave" id="wave2" ref={wav2}/>
            <div className="edu_container">
                <div className="edu_title">
                    Education
                </div>
                <div className="edu_listBox">

                    {/* kindergarden */}
                    <div className="edu_box"  data-aos="fade-up">
                        <div className="edu_boxTop">
                            <img src={japan} alt="schoolimage"/>
                            <div className="edu_UniInfo">
                                <div className="edu_UniTitle">
                                    Morning Star International Kindergarten (MSIK)
                                </div>
                                <div className="edu_UniDes">
                                    yea, that's right! I am weeb!!
                                </div>
                                <div className="edu_boxBot">
                                    2005 ~ 2012
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* middle School */}
                    <div className="edu_box" data-aos="fade-up" data-aos-delay="500">
                        <div className="edu_boxTop">
                            <img src={kis1} alt="schoolimage"/>
                            <div className="edu_UniInfo">
                                <div className="edu_UniTitle">
                                    Kiettisack International Middle School (KIMS)
                                </div>
                                <div className="edu_UniDes">
                                   It is International elementary School in Laos
                                </div>
                                <div className="edu_boxBot">
                                    2012 ~ 2016
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* HighSchool */}
                    <div className="edu_box" data-aos="fade-up" data-aos-delay="500">
                        <div className="edu_boxTop">
                            <img src={kis} alt="schoolimage"/>
                            <div className="edu_UniInfo">
                                <div className="edu_UniTitle">
                                    Kiettisack International High School (KIHS)
                                </div>
                                <div className="edu_UniDes">
                                   It's no.2 International HighSchool in entire Laos
                                </div>
                                <div className="edu_boxBot">
                                    2016 ~ 2020
                                </div>
                            </div>
                        </div>
                    </div>

                     {/* Institution */}
                    <div className="edu_box" data-aos="fade-up" data-aos-delay="500">
                        <div className="edu_boxTop">
                            <img src={kis} alt="schoolimage"/>
                            <div className="edu_UniInfo">
                                <div className="edu_UniTitle">
                                    English IGCSE Study Camp (EISC)
                                </div>
                                <div className="edu_UniDes">
                                   I met a lot of retards there, including gays
                                </div>
                                <div className="edu_boxBot">
                                    2018 ~ 2020
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* University */}
                    <div className="edu_box" data-aos="fade-up" data-aos-delay="500">
                        <div className="edu_boxTop">
                            <img src={UTCC} alt="schoolimage"/>
                            <div className="edu_UniInfo">
                                <div className="edu_UniTitle">
                                   University Of The Thailand Chamber of Commerce
                                </div>
                                <div className="edu_UniDes">
                                    Currently studying Business major
                                </div>
                                <div className="edu_boxBot">
                                    2020 ~ 2024
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Education
