import Box from "../../images/home/speechwbg.png"
// import Boxrev from "../../images/home/speechrev.png"
import conf from '../../images/home/confwbg.png'
import '../../css/home/home.css'
import React from 'react';

const Help = () => {
    return (
        <div className='help'>
                <h2>SharePool help Center</h2>
                <div className='help-dia'>
                    <div className='help-box'>
                        <img className='help-img' src={Box} alt='box'/>
                        <div className='help-txt'>
                            <h3>How do I book a carpool ride?</h3>
                            <p>You can book a carpool ride on Sharepool site.
                                Simply search for your destination, choose the date you want to travel and 
                                pick the carpool that suits you best! </p>
                        </div>
                    </div>

                    <div className='help-box'>
                        <img className='help-img' src={Box} alt='box'/>
                        <div className='help-txt'>
                            <h3>How do I book a carpool ride?</h3>
                            <p>You can book a carpool ride on Sharepool site.
                                Simply search for your destination, choose the date you want to travel and 
                                pick the carpool that suits you best! </p>
                        </div>
                    </div>

                    <div className='help-box'>
                        <img className='help-img' src={Box} alt='box'/>
                        <div className='help-txt'>
                            <h3>How do I book a carpool ride?</h3>
                            <p>You can book a carpool ride on Sharepool site.
                                Simply search for your destination, choose the date you want to travel and 
                                pick the carpool that suits you best! </p>
                        </div>
                    </div>

                    <div className='help-box'>
                        <img className='help-img' src={Box} alt='box'/>
                        <div className='help-txt'>
                            <h3>How do I book a carpool ride?</h3>
                            <p>You can book a carpool ride on Sharepool site.
                                Simply search for your destination, choose the date you want to travel and 
                                pick the carpool that suits you best! </p>
                        </div>
                    </div>

                    <img className="conf-img" src={conf} alt='confused'/>
                </div>

                <button id='help-but'>Have a Question?</button>
            </div>
    )
}

export default Help;