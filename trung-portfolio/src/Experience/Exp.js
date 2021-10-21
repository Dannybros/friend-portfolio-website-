import React, {useEffect} from 'react'
import './Exp.css'
import res from '../img/res.jpg'
import shop from '../img/shop.jpeg'
import hotel from '../img/hotel.jpg'
import volunteer from '../img/volunteer.jpg'
import mc from '../img/mc.jpg'
import begger from '../img/begger.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Exp() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="exp" id="section4">
            <div className="exp__row">
                <div className="exp_title">
                    Work Experience
                </div>
                
                <div className="exp__container">

                {/* restaurant */}
                    <div className="exp__box" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500" data-aos-delay="100">
                        <img src={res} alt="restaurant"/>
                        <p className="box__title">
                            Restaurant Manager
                        </p>
                        <p>
                            My family owned family-Restaurant, not too fancy, not too shabby.
                            Just regular sized place filled with debtors. My parents were busy looking after another buisness,
                            so I was interim manager and filled their place as manager since I was 12. 
                            After I took over the restaurant, overall revenues of business rose up due to my excellent business talent.
                            I removed unpopular and too expensive dishes and created new menu targeting specifically for family customers .....
                          
                            
                        </p>
                        <p className="exp__link">see more {">>>"} </p>
                    </div>

                {/* Hotel */}
                     <div className="exp__box"  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500" data-aos-delay="300">
                        <img src={hotel} alt="hotel"/>
                        <p className="box__title">
                            Hotel Receptionist
                        </p>
                        <p>
                            Hotel was another business that my family run. Yea, my family is rich. that's why i was able to go to <b>INTERNATIONAL</b> school.
                            with my fluent language proficiency, i had interacted and dealt all kinds of shitheads. I....
                            
                        </p>
                        <p className="exp__link">see more {">>>"} </p>
                    </div>

                {/* Volunteer */}
                    <div className="exp__box" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500" data-aos-delay="500">
                        <img src={volunteer} alt="volunteer" />
                        <p className="box__title">
                            Volunteer Program
                        </p>
                         <p>
                           what can i say, except I am very kind loving person.
                           I can't stop myself from spending shit ton of money. I feel good whenever poor kids stares me with 
                           admiring looks on their...
                        </p>
                        <p className="exp__link">see more {">>>"} </p>
                    </div>

                {/* Dessert Shop */}
                     <div className="exp__box" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500" data-aos-delay="100">
                        <img src={shop} alt="shop"/>
                        <p className="box__title">
                            Small Dessert Shop
                        </p>
                         <p>
                            although we stared as school project, we eventually turned into real-life business. 
                            of course, I was the team leader with rich buisness management skills. I may be short but I 
                            definietly had better brain than others ...
                            
                        </p>
                        <p className="exp__link">see more {">>>"} </p>
                    </div>
                    
                {/* Trash Cleaner */}
                    <div className="exp__box" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500" data-aos-delay="300">
                        <img src={begger} alt="begger"/>
                        <p className="box__title">
                            Trash Cleaner
                        </p>
                         <p>
                            It seems like picture is showing me throwing up, but you are wrong. i am actually eating what's inside
                            the trash bin. Don't look at me with weird eyes. I know you will be worse than me when you go independent.
                            So hire...
                        </p>
                        <p className="exp__link">see more {">>>"} </p>
                    </div>
                
                {/* Begger */}
                     <div className="exp__box" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500" data-aos-delay="500">
                        <img src={mc} alt="mcdonald"/>
                        <p className="box__title">
                            Begger
                        </p>
                        <p >
                            let's just say this is bullshit. Just because I say mom is bit fat, now I am homeless. Asian mothers sure
                            are scary.
                            If you are wandering why I posted mcdonald, it's because rooftop was my home...
                             
                        </p>
                        <p className="exp__link">see more {">>>"} </p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Exp
