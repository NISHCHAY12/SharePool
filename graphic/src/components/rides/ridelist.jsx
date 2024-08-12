import '../../css/rides/ridelist.css'
import Travel from '../home/travel_info'
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Ride = () => {

    const [userData, setUserData] = useState('');

    const navigate = useNavigate();

    const callProf = async () => {
        try {
            const res = await fetch('/ride', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            
            // // console.log("works"+res);
            
            const dat = await res.json();
            // // console.log("works"+dat);
            setUserData(dat)
            console.log(userData)
            console.log("hello " + Array.isArray(userData))

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;
            }

        } catch (err) {
            console.log("hi" + err);
            navigate("/log");
        }
    }

    useEffect(() => {
        callProf();
    }, []);

//   useEffect(() => {
//     axios.get('/ride')
//       .then(res => { 
//         res = res.json();
//         setUserData(res.userData)
//         // setRecord(res.data)
//         console.log("hello" + Array.isArray(userData))
//         console.log(typeof userData); 
//       })
//       .catch(err => console.log(err))
//   }, [])


    return (
        <div className='yo'>
            <div className='bg-img'>
                <div className='pos' />
                <Travel />

            </div>

            <div className='list'>
                <div className='sort-bar'>
                    <h3>Sort By</h3>
                    <a href='#1'>Ride Length</a>
                    <a href='#1'>Price</a>
                    <a href='#1'>Earliest Departure</a>
                </div>

                <div id='seperate'></div>

                <div className='ri-list'>
                    {/* {userData.map((resp, i) => (
                        <div className='card' key={i}>
                            <div className='data'>
                                <h3 className='unam'>User : {resp.publisher}</h3>
                                <h3>date : </h3>
                                <h3>from : </h3>
                                <h3>to : </h3>
                                <h3>seats : </h3>
                            </div>
                            <button className='book'>Book Now</button>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export default Ride;