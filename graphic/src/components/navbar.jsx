import '../css/navbar.css';
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import Icon from "../images/logo.png"
import { useNavigate } from 'react-router-dom';
import { FaSortDown } from "react-icons/fa";
import React,{useState,useEffect} from 'react';

const Nav = () => {

    const [ userData , serUserData] = useState('');

    const navigate = useNavigate();

    const callNav = async () => {
        try{
            const res = await fetch('/prof' , {
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            }) 
            console.log("works"+res);

            const dat = await res.json();
            console.log("works"+dat);
            serUserData(dat)
            console.log(userData)

            if(!res.status === 200){
                const error = new Error(res.error)
                throw error;
            }

        } catch(err){
            console.log("hi"+err);
            navigate("/log");
        }
    } 

    useEffect(() => {
        callNav();
    },[]);

    return(
        <div className='nav-bar'>
            <div id='logo-img'>
                <img className='log-o' src={Icon} alt="LoGo"/>
                <h2>SharePool</h2>
            </div>
            <div id='links'>
                <ul>
                    <a href='/'><FaHome className='nav-icon'/><li>Home</li></a>
                    <a href='/addr'><BsPlusCircle className='nav-icon'/><li>Add a Ride</li></a>
                    <a href='/ride'><BsSearch className='nav-icon'/><li>find a ride</li></a>
                </ul> 
                <div style={{position:'relative'}}>
                    <div className='user'>
                        {
                                <div style={{display:'flex' , alignItems:'center'}}>
                                <FaUserCircle className='us' id='rot' style={{fontSize : '2.3rem' , color : '#00DFA2' , marginRight : '0.5vw' , borderRadius: '50px' , cursor : 'pointer'}}/>
                                <h3 style={{color : '#00DFA2' , cursor : 'default' , maxWidth:'8vw' , overflowX:'hidden' , marginRight:'-4vw'}}>{ userData.name }</h3>
                                </div>
                        }
                        
                    </div>
                    <div className='drop-down'>
                        {
                            
                                <div>
                                <a href='/log'>Log In</a>
                                <a href='/prof'>Profile</a>
                                <a href='/reg'>Register</a></div>
                            
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Nav;