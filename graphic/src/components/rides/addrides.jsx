import '../../css/rides/addrides.css'
import { FaUser } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";
import Slider from './slider'
import React, { useEffect,useState } from 'react';

const Add = () =>{
 
    const [ride , setRide] = useState({
        from: "",to: "",time: "",passenger:""
    });
    const [date , setDate] = useState([]);

    const handleDateChange = (event) => {
        setDate(event.target.value);
        console.log(date)
    };

    let value;
    const handleinput = (e) => { 
        console.log(e)
        value = e.target.value;

        setRide({...ride , [e.target.name]:value})
    }

    const callAdd = async () => {
        try{
            const { from,to,time,passenger } = ride;
            console.log(ride)
            const res = fetch('/addr' , {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
            body:JSON.stringify({
                from:from,
                to:to,
                date:date,
                time:time,
                passenger:passenger
            }),
                credentials:"include"
            }) 
        }catch(err){ 
            console.log(err);
        }
    } 

    useEffect(() => {
        callAdd();
    },[]);
    
    return(
        <div className='screen'> 
            <div className='bg-ride'></div>
            <h2 id='txt-ride'>Make Money while you Drive .. List your ride Now</h2>
            <div className='ride-box'>
                <h2>Publish a Ride</h2>
                <input type='text' name='from' value={ride.from} onChange={handleinput} className='ride-info' placeholder='From..'/>
                <input type='text' name='to' value={ride.to} onChange={handleinput} className='ride-info' placeholder='To..'/>
                <input type='date' name='date' value={date} onChange={handleDateChange} className='ride-info'/>
                <input type='time' name='time' value={ride.time} onChange={handleinput} className='ride-info'/>
                <input type='number' name='passenger' value={ride.passenger} onChange={handleinput} min='1' max='5' 
                // onClick={popup} 
                id='per' className='ride-info'/>
                <p id='hue' className='help-ride'>Remaining Seats in your car?</p>
                <button id='sub' onClick={callAdd}>Publish</button>
            </div>
            <Slider/>

            <h2 id='pros-head'>Get Started in just minutes.</h2>
            <div style={{marginTop:'5vh'}} className='pros'>
                <div className='pros-cont'>
                    <FaUser className='pros-sym'/>
                    <h3>Create a SharePool Account</h3>
                    <p>Add your profile picture, a few words about you and your phone number to increase trust between members.</p>
                </div>
                <div className='pros-cont'>
                    <FaCarAlt className='pros-sym'/>
                    <h3>Publish your ride</h3>
                    <p>Indicate departure and arrival points, the date of the ride and 
                        check our recommended price to increase your chances of getting your first passengers and ratings.</p>
                </div>
                <div className='pros-cont'>
                    <BsFillLightningFill className='pros-sym'/>
                    <h3>Accept booking requests</h3>
                    <p>Review passenger profiles and accept their requests to ride with you. 
                        That’s how easy it is to start saving on travel costs!</p>
                </div>
            </div>
        </div>
    )
}

// var a = 1;
// var x = 0;

// function popup(){
//     if(document.getElementById("sli-box"))
//     {
//         document.getElementById("sli-box").style.scale = a%2;
//         if(a%2 === 0)
//         {
//             x = document.getElementById("sl").value;
//             document.getElementById("per").value = x;
//             document.getElementById("sli-box").classList.remove("ani");
//         }
//         else{
//             document.getElementById("sli-box").classList.add("ani");
//         }
//         a++;
//     }
// }

export default Add;