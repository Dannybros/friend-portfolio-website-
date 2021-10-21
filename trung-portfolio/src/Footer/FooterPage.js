import React, {useState} from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { send } from 'emailjs-com';

const initial = { name: '', email: '', message: ''}
function FooterPage() {
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: '',
    });

    const openInNewTab = (url)=>{
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const sendEmail=(e)=>{
        e.preventDefault();
        send(
            'service_5yfosvt',
            'template_php78ej',
            toSend,
            'user_yzx5ofK5oUxcWlWwb2Xor'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setToSend(initial);
            alert('Email has been succesfully sent')
        })
        .catch((err) => {
            console.log('FAILED...', err);
            alert('Error Occured. Try again.')
            setToSend(initial);
        });
    }

    const handleChange=(e)=>{
        setToSend({...toSend, [e.target.name]:[e.target.value]})
    }

    return (
        <div className="footer" id="section5">
            <div className="footer__container">
                <div className="email__section">
                    <h1>Wanna Contact Me?</h1>
                    <p>please fill in the form below or send email to Youmom@gmail.com</p>
                    <div>
                        <form className="contact-form" onSubmit={sendEmail}>
                           <input
                                type='text'
                                name='name'
                                placeholder='Name'
                                value={toSend.name}
                                onChange={handleChange}
                            />
                            <input
                                type='text'
                                name='email'
                                placeholder='Email'
                                value={toSend.email}
                                onChange={handleChange}
                            />
                            <textarea
                                type='text'
                                name='message'
                                placeholder='Your message'
                                value={toSend.message}
                                onChange={handleChange}
                            />
                            <button type="submit" >Submit</button>
                        </form>
                    </div>
                </div>
                <div className="footer__section">
                    Connect
                    <ul>
                        <li className="social__link" onClick={()=>openInNewTab('https://www.facebook.com/trunglequang96858585')}> <FacebookIcon/></li>
                         <li className="social__link" onClick={()=>openInNewTab('https://www.instagram.com')}> <InstagramIcon/></li>
                         <li className="social__link" onClick={()=>openInNewTab('https://www.twitter.com')}> <TwitterIcon/></li>
                         <li className="social__link" onClick={()=>openInNewTab('https://www.linkedin.com')}> <LinkedInIcon/></li>
                    </ul>
                    
                </div>
            </div>
            
            <div className="emailpng"></div>
        </div>
    )
}

export default FooterPage
