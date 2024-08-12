import '../../css/home/home.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import React from 'react';

const Travel = () => {
    return (
        <div className='hor'>
            <div id='block1' className='box'><i><FaMapMarkerAlt className='icon-box'/><input type='text' id='from' placeholder='from..' className='input_txt'/></i></div>
            <div className='diff'></div>
            <div className='box'><i><FaMapMarkerAlt className='icon-box'/><input type='text' id='to' placeholder='to..' className='input_txt'/></i></div>
            <div className='diff'></div>
            <div className='box'><i><FaRegCalendarAlt className='icon-box'/><input type='date' id='date' className='input_txt'/></i></div>
            <div className='diff'></div>
            <div className='box'><i><FaUser className='icon-box'/><input type='number' id='person' min={1}className='input_txt'/></i></div>
            {/* <div className='diff'></div> */}
            <button id='search'>Search</button>
        </div>
    )
}
export default Travel;