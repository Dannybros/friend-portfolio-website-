import React, {useState, useRef, useEffect} from 'react'
import './Skill.css'
import LangBarchart from './Language/LangBarchart';
import PieChart from './Language/PieChart';
import LangLinechart from './Language/LangLinechart';
import Lined3 from './Language/Lined3';
import BusinessBarchart from './Business/BusinessBarchart';
import LangDescription from './Language/LangDescription';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {
    const lang = useRef();
    const busi = useRef();

    const [skillNav, setSkillNav] = useState();

    const changeSkill =(e)=>{

        const clickedLi = e.target.innerText;
        
        if(clickedLi == 'LANGUAGES'){
            lang.current.className='activer';
            busi.current.className='skill_navItem';
            
            setSkillNav(false);
            
        }else{
            busi.current.className='activer';
            lang.current.className='skill_navItem';
            
            setSkillNav(true);
        }

        console.log(skillNav);
    }

    useEffect(() => {
         setSkillNav(false);
         AOS.init();
    }, [])


    return (
        <div className="skill" id="section2">
            <div style={{width:"100%", height:"30px", background:"white"}}/>
            <div className="skill-top">
                <h1>Skills</h1>

                <div className="skill_nav">
                    <ul>
                        <li ref={lang} onClick={changeSkill} className="activer">LANGUAGES</li>
                        <li ref={busi} onClick={changeSkill} className="skill_navItem">BUSINESS</li>
                    </ul>
                </div>
                   
            </div>

            {!skillNav?
                 
                     <>
                        <div className="skill_box">
                            <LangBarchart />
                            <PieChart/>
                        </div>
                        <div className="skill_progress"  data-aos="zoom-in-down">
                            <LangLinechart/>
                            <Lined3/>
                        </div>
                        <LangDescription/>
                    </>
                :
                    <>
                        <BusinessBarchart/>
                        <div className="langDes">
                            As you can see, you will never find such amazing skill statistic like mine. I have average communication skill, 
                            but with help of leadershipp and bullshit, I can manage every situation calmly. I find very joyable to work with team 
                            and idea of meeting new people and working together excites me. I have worked with various kind of people such as black,
                            white, kind, idiot, smart, lazy... which shows my experinece in dealing with all kinds of people.
                            Also,I can guarentee that I was the wisest and the most hard working person in every team-group.
                        </div>
                    </>
            }
           

         
        </div>
    )
}

export default Skill