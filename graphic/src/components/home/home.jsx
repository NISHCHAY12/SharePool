import '../../css/home/home.css'
import safe from "../../images/home/safewbg.png"
import Travel from '../home/travel_info'
import { FaRupeeSign } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { FaRoad } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import Help from '../home/help'
import React from 'react';

const Home = () => {
    return (
        <div>
            <div id='bg-img'></div>
            <div className='txt-bg'>
                <h2>Save Money , While saving Environment...</h2>
                <h2>Get CarPooling!</h2>
            </div>
            <div className='place'><Travel/></div>


            <div className='pros'>
                <div className='pros-cont'>
                    <FaRupeeSign className='pros-sym'/>
                    <h3>Your pick of rides at low prices</h3>
                    <p>No matter where you’re going, by bus or carpool, 
                        find the perfect ride from our wide range of destinations and routes at low prices.</p>
                </div>
                <div className='pros-cont'>
                    <FaIdCard className='pros-sym'/>
                    <h3>Trust who you travel with</h3>
                    <p>We take the time to get to know each of our members and bus partners. 
                        We check reviews, profiles and IDs, so you know who you’re travelling with and 
                        can book your ride at ease on our secure platform.</p>
                </div>
                <div className='pros-cont'>
                    <BsFillLightningFill className='pros-sym'/>
                    <h3>Scroll, click, tap and go!</h3>
                    <p>Booking a ride has never been easier! 
                        Thanks to our simple app powered by great technology, 
                        you can book a ride close to you in just minutes.</p>
                </div>
            </div>

            <div className='safe'>
                <img id='safe-img' src={safe} alt='detective'/>
                <div id='safe-txt'>
                    <h3>Your Safety is our priority.</h3>
                    <p>At Sharepool, we're working hard to make our platform as secure as it can be. 
                        But when scams do happen, we want you to know exactly how to avoid and report them.
                        Every user who lists a ride on our platform is required to first upload his Driving Liscense.
                        Users who complete 3 rides are rewarded with a verified status.</p>
                </div>
            </div>

            <div className='working'>
                <h2>How does sharePool works?</h2>
                <div style={{display:'flex'}}>
                    <div className='work-box'>
                        <BsListUl className='ic-work'/>
                        <h3>Choose from posted Rides</h3>
                        <p>Drivers post rides on our platform where the user can find the ride of their choice.</p>
                    </div>

                    <div className='work-box'>
                        <FaRegCreditCard className='ic-work'/>
                        <h3>Seat booking & payment</h3>
                        <p>Passenger books and pays its seat online. Driver & passenger then communicate by phone or email.</p>
                    </div>

                    <div className='work-box'>
                        <FaRoad className='ic-work'/>
                        <h3>Rideshare</h3>
                        <p>Driver & passenger meet for the rideshare. During the ride, the passenger gives the confirmation code.</p>
                    </div>

                    <div className='work-box'>
                        <FaRupeeSign className='ic-work'/>
                        <h3>Money transfer</h3>
                        <p>Driver confirms the ride with the code and cashes the money via direct deposit in its bank account.</p>
                    </div>
                </div>
            </div>

            <Help/>
        </div>
    )
}

export default Home;