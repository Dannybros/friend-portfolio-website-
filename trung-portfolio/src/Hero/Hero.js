import React from 'react';
import './Hero.scss';
import Typical from 'react-typical';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    return (
        <div className="Hero">
            <div className="container">
                <div className="Type_intro">
                    <div className="type">
                        <p>Hi! 👋</p>
                        <p> My Name is Trung. 🔥 </p>
                        <p> 172cm, very handsome. 💪🥰</p>
                    </div>
                    <Typical
                        className="typing"
                        loop={Infinity}
                        wrapper='p'
                        steps={[
                            ' I AM A BUINESS STUDENT',
                            5000,
                            ' I AM ALSO LOOKING FOR HOT GIRLFRIEND',
                            8000
                        ]}
                    />
                </div>
                {Array(100).fill().map((item)=>(
                    <div className="circle-container">
                        <div className="circle"></div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Hero
