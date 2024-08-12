import React , { useEffect, useState } from 'react';
import '../../css/log-reg/register.css'
// import Profile from '../../images/reglog/profile.jpg'
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { NavLink , useNavigate } from 'react-router-dom';
// import axios from 'axios'
import Picture from './picture'

// const url = "http://localhost:4000/uploads/"

const Prof = () => {

    // const [postImage,setPostImage] = useState({profilepic:''})

    // const createPost = async (newImage) => {
    //     try{
    //         await axios.post("http://localhost:4000/uploads/",newImage,);
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     createPost(postImage)
    //     console.log(postImage+"uploaded")
    // }

    // const handleFileUpload = async (e) => {
    //     const file = e.target.files[0];
    //     const base64 = await convertToBase64(file);
    //     console.log(base64)
    //     setPostImage({ ...postImage,profilepic:base64})
    // }

    const [ userData , serUserData] = useState('');

    const navigate = useNavigate();

    const callProf = async () => {
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
        callProf();
    },[]);


    // const profpic = {
    // overflow:'hidden',
    // width:'10vw',
    // height:'30vh',
    // marginLeft:'4vw',
    // marginTop:'15vh',
    // marginBottom:'5vh',
    // borderRadius:'2vh'
    // };

    // const picpic = {
    //     width:'10vw',
    //     height:'22vh',
    //     scale:'1.2',
    //     cursor:'pointer',
    // }

    // const insepic = {
    //     display:'none'
    // }


    return(
        <div className='reg-block'>
            <div style={{height:'45vh' , background:'#00dfa2'}}></div>
                <div id='cloud'>
                    <div id='form'>
                        <h2 style={{marginBlock:'0px' ,marginBottom:'5vh' , fontSize : '1.8rem'}}>User Profile</h2>

                        <form method='GET' id='sub-form'>
                            <div className='field'>
                                <label htmlFor='name'>< FaUser /></label>
                                <input type='text' name='name' id='name' autoComplete='off'
                                    defaultValue={ userData.name }
                                    placeholder='Name'/>
                            </div>

                            <div className='field'>
                                <label htmlFor='email'>< FaEnvelope /></label>
                                <input type='text' name='email' id='email' autoComplete='off'
                                    defaultValue={ userData.email }
                                    placeholder='e-mail'/>
                            </div>

                            <div className='field'>
                                <label htmlFor='phone'>< FaPhoneAlt /></label>
                                <input type='number' name='phone' id='phone' autoComplete='off' 
                                    defaultValue={ userData.phone }
                                    placeholder='Phone Number'/>
                            </div>

                            <div className='field'>
                                <label htmlFor='address'>< FaHouseUser /></label>
                                <input type='text' name='address' id='address' autoComplete='off' 
                                    defaultValue={ userData.address }
                                    placeholder='Your Address'/>
                            </div>

                            <div className='field'>
                                <label htmlFor='age'>< FaUser /></label>
                                <input type='number' name='age' id='age' autoComplete='off' 
                                    defaultValue={ userData.age }
                                    placeholder='Age'/>
                            </div>
                        </form>

                    </div>
                    

                    <Picture/>
                    {/* <div style={{width: '15vw'}}>
                        <div style={profpic}>
                            <form onSubmit={handleSubmit}>
                                
                                <label htmlFor='propic' id='piclbl'>
                                    <img style={picpic} src={Profile} alt='profile-pic'/>
                                </label>
                                <input style={insepic} type='file' accept='.jpeg,.png,.jpg' id='propic' name='picture' label="Image" onChange={(e) => handleFileUpload(e)}></input>
                                <button style={{width:'5vw',height:'5vh'}} type='submit'>Change</button>
                            </form>
                        </div>
                        

                        <NavLink to="/log" className='lnk-log'>Wrong Info? Edit Profile!</NavLink>
                    </div> */}
                </div>

        </div>
    )
}

export default Prof;

// function convertToBase64(file){
//     return new Promise((resolve,reject) => {
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(file);
//         fileReader.onload = () => {
//             resolve(fileReader.result)
//         };
//         fileReader.onerror = (error) => {
//             reject(error)
//         }
//     })
// }