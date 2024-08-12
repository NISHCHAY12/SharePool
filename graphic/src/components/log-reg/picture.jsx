import React, { useState , useEffect } from 'react';
import '../../css/log-reg/register.css'
import '../../css/log-reg/picture.css'
// import Profile from '../../images/reglog/profile.jpg'
import { NavLink , useNavigate } from 'react-router-dom';

const Picture = () => {

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

    const [fileData, setFileData] = useState();

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0]);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("picture", fileData);
        // console.log(userData._id)

        fetch("http://localhost:4000/single", {
            method: "POST",
            body: data,
        })
            .then((result) => {
                console.log("File Sent Successful");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };




    return (
        <div style={{ width: '15vw' }}>
            <div id='profpic'>
                <form onSubmit={onSubmitHandler}>

                    <label htmlFor='propic' id='piclbl'>
                        <img id='picpic' src={userData.profilepic} alt='profile-pic' />
                    </label>
                    <input type='file' accept='.jpeg,.png,.jpg' id='propic' name='picture' label="Image" onChange={fileChangeHandler}></input>
                    <button id='btnsub' type='submit'>Submit Image</button>
                </form>
            </div>


            <NavLink to="/log" className='lnk-log'>Wrong Info? Edit Profile!</NavLink>
        </div>
    )
}

export default Picture;