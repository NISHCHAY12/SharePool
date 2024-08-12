import '../css/footer.css'
import { FaCog } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import Icon from "../images/logo.png"
import React from 'react';

const Footer = () => {
    return (
        <div className="foot">
            <div className='foot-cont'>
                <div id='yt-video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YC8NBxo4S68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h3>Benefits of Carpooling.</h3>
                </div>

                <div id='about'>
                    <h2>About</h2>
                    <div className='about-link'><FaCog className='about-icon'/><a href='/*'>How it works</a></div>
                    <div className='about-link'><FaCog className='about-icon'/><a href='/*'>About Us</a></div>
                    <div className='about-link'><FaCog className='about-icon'/><a href='/*'>Help Centre</a></div>
                    <div className='about-link'><FaCog className='about-icon'/><a href='/*'>Contact Us</a></div>
                    <div className='about-link'><FaCog className='about-icon'/><a href='/*'>Social</a></div>
                </div>

                <div className='soc-icons'>
                    <h2 className='social'>Accounts<FaSortDown/></h2>
                    <div className='soc'>
                        <a href='#1'><FaFacebookSquare style={{color:'#0165E1'}} className='ic'/></a>
                        <a href='#1'><FaGithubSquare style={{color:'#000000'}} className='ic'/></a>
                        <a href='#1'><FaLinkedin style={{color:'#0A66C2'}} className='ic'/></a>
                        <a href='#1'><FaTwitterSquare style={{color:'#1D9BF0'}} className='ic'/></a>
                    </div>
                </div>
            </div>

            <div className='last'>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img id='last-icon' src={Icon} alt='last-icon'/>
                    <h3>SharePool</h3>
                    <p>, 2023 &#169;</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;