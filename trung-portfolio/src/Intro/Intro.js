import React, {useState, useEffect} from 'react'
import './Intro.css'
import bs from '../img/business.jpg'
import '../Hero/Hero.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro =()=> {
 
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() =>{
        const resizing=()=>{

            if(window.innerWidth <= 1237){
                setIsTablet(true);
            }else{
                setIsTablet(false);
            }
        }

        window.addEventListener('resize', resizing);
        resizing();
         AOS.init();
    })

    return (
        <div className="intro" id="section1">
            <div style={{width:"100%", height:"100%", background:"rgba(194, 242, 21, 0.4)", position:"absolute", zIndex:"-2", clipPath:"circle(50.0% at 100% 50%)"}}/>
            <div style={{width:"100%", height:"100%", background:"skyblue", position:"absolute", zIndex:"-1", clipPath:"circle(40% at 0 0)"}}/>
            <div className="intro_container">
                <h1>INTRODUCTION</h1>
                <div className="intro-box">
                    {/* <Avatar className="avatar"/> */}
                    <img src={bs} className="intro_img" alt="business" data-aos="flip-left"  data-aos-duration="3000"/>
                    <div className="intro_file" data-aos="fade-up" data-aos-anchor-placement="top-center"  data-aos-duration="3000"> 
                        <p>
                            <div className="intro_1">Name:</div>
                            <div className="intro_2">Trung Le Quang <span className="comment">(common name)</span></div>
                        </p>
                        <p>
                            <div className="intro_1">BirthDay:</div>
                            <div className="intro_2">2002 / 03 / 08 <span className="comment">(International Women's Day)</span></div>
                        </p>
                        <p>
                            <div className="intro_1">Nationality:</div>
                            <div className="intro_2">Vietnam </div>
                        </p>

                        <p>
                            <div className="intro_1">Gender:</div>
                            <div className="intro_2">Male. <span className="comment">(You blind if you think I am female or gay.)</span></div>
                        </p>
                        <p>
                            <div className="intro_1">Email:</div>
                            <div className="intro_2">HeheheScercet@gmail</div>
                        </p>
                        <p>
                            <div className="intro_1">Phone:</div>
                            <div className="intro_2">+000 12629 8008</div>
                        </p>
                        <p>
                            <div className="intro_1">Hobby:</div>
                            <div className="intro_2">Swimming, Hot sexy women </div>
                        </p>
                        {!isTablet ?
                            <p className="intro_des" >
                            As you can see in the photo, your excellency here is very Handsome.
                            Not only that perfect face, I have impressive body outline. 
                            <br/><br/>
                            I am Currently University Student in X country, studying Buisness Major.
                            I have chose this major because I realised I am very talented in leading buisnesses to successful.
                            I have several experience in working hotel and restaurant, which revenues got higher as soon as I got my hands on management.
                            You will definitely not regret hiring me.

                            <br/><br/>
                            Hate to admit, but I am kinda desperate to find girlfriend. If you any chance interested in me, please contact me.
                            I am very funny and talented person, surely worth your time.😘
                        </p>:
                        <div></div>
                        }   
                        
                    </div>
                </div>
                {isTablet ?
                    <p className="intro_des2" >
                        As you can see in the photo, your excellency here is very Handsome.
                        Not only that perfect face, I have impressive body outline. 
                        <br/><br/>
                        I am Currently University Student in X country, studying Buisness Major.
                        I have chose this major because I realised I am very talented in leading buisnesses to successful.
                        I have several experience in working hotel and restaurant, which revenues got higher as soon as I got my hands on management.
                        You will definitely not regret hiring me.

                        <br/><br/>
                        Hate to admit, but I am kinda desperate to find girlfriend. If you any chance interested in me, please contact me.
                        I am very funny and talented person, surely worth your time.😘
                    </p>:
                    <div></div>
                }   
            </div>
        </div>
    )
}

export default Intro
