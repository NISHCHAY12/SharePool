import React , { useState } from 'react';
import '../../css/log-reg/register.css'
import Register from '../../images/reglog/regbg.png'
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { NavLink , useNavigate } from 'react-router-dom';
import { FaLock } from "react-icons/fa";

const Reg = () => {

    const navigate = useNavigate();

    const [user , setUser] = useState({
        name: "",email: "",phone: "",address: "",age: "",password: "",cpassword: ""
    });

    let a , value;
    const handleinput = (e) => { 
        console.log(e)
        a = e.target.name;
        value = e.target.value;

        setUser({...user , [a]:value})
    }

    const senddata = async (e) => {
        e.preventDefault();

        const { name,email,phone,address,age,password,cpassword} = user;

        const resp = await fetch('/signup' , {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name,email,phone,address,age,password,cpassword
            })
        })

        const data = await resp.json()

        if(resp.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("invalid registration");
        } else{
            window.alert("Registration successfull");
            console.log("registration successfull");

            navigate("/log", { replace: true });
        }
    }

    return(
        <div className='reg-block'>
            <div style={{height:'45vh' , background:'#00dfa2'}}></div>
                <div id='cloud'>
                    <div id='form'>
                        <h2 style={{marginBlock:'0px' ,marginBottom:'5vh' , fontSize : '1.8rem'}}>Sign Up</h2>

                        <form method='POST' id='sub-form'>
                            <div className='field'>
                                <label htmlFor='name'>< FaUser /></label>
                                <input type='text' name='name' id='name' autoComplete='off'
                                    value={user.name}
                                    onChange={handleinput}
                                    placeholder='Name'/>
                            </div>

                            <div className='field'>
                                <label htmlFor='email'>< FaEnvelope /></label>
                                <input type='text' name='email' id='email' autoComplete='off'
                                    value={user.email}
                                    onChange={handleinput}
                                    placeholder='e-mail'/>
                            </div>

                            <div className='field'>
                                <label htmlFor='phone'>< FaPhoneAlt /></label>
                                <input type='number' name='phone' id='phone' autoComplete='off' 
                                    value={user.phone}
                                    onChange={handleinput}
                                    placeholder='Phone Number'/>
                            </div>

                            <div className='field'>
                                <label htmlFor='address'>< FaHouseUser /></label>
                                <input type='text' name='address' id='address' autoComplete='off' 
                                    value={user.address}
                                    onChange={handleinput}
                                    placeholder='Your Address'/>
                            </div>

                            <div className='field'>
                                <label htmlFor='age'>< FaUser /></label>
                                <input type='number' name='age' id='age' autoComplete='off' 
                                    value={user.age}
                                    onChange={handleinput}
                                    placeholder='Age'/>
                            </div>

                            <div className='field'>
                                <label htmlFor='password'>< FaLock /></label>
                                <input type='password' name='password' id='password' autoComplete='off' 
                                    value={user.password}
                                    onChange={handleinput}
                                    placeholder='password'/>
                            </div>

                            <div className='field'>
                                <label htmlFor='cpassword'>< FaLock /></label>
                                <input type='password' name='cpassword' id='cpassword' autoComplete='off' 
                                    value={user.cpassword}
                                    onChange={handleinput}
                                    placeholder='confirm password'/>
                            </div>

                            <div className='sub'>
                                <input type='submit' name='signup' id='signup' value='Register' onClick={senddata} className='sub-btn'/>
                            </div>
                        </form>

                    </div>
                    


                    <div style={{width: '15vw'}}>
                        <img id='img-reg' src={Register} alt='register'/>
                        <NavLink to="/log" className='lnk-log'>Already signed up? Log in!</NavLink>
                    </div>
                </div>

        </div>
    )
}

export default Reg;