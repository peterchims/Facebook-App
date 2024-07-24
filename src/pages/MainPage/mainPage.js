import React from 'react'
import './mainPage.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
import { MdOndemandVideo } from 'react-icons/md'
import { FaGamepad, FaPlusCircle,  FaStoreAlt, FaUsers } from 'react-icons/fa'
import { FaBell, FaFacebookMessenger } from 'react-icons/fa6'
import MainArea from '../Mainarea/mainArea'

function HeaderSection(){
    return(
     <div className='HomePage'>
        <div className='header'>

            <div className='header-1'>
                <div className='logo'>
                   <img src="/images/fb-logo.png" alt='logo' />
                </div>
                <div className='Search'>
                    <AiOutlineSearch className='search' />
                <input placeholder="Search Facebook" type="Search"/>
                </div>
            </div>
            <div className='middle-header'> 
                <div className='icon'> 
                    <span className='icon-b-bt'>   <AiFillHome className="home" /></span>
                </div>
              
                <div className='icon'>
                    <MdOndemandVideo className="icons" />
                </div>
                <div className='icon'>
                    <FaStoreAlt className="icons" />
                </div>
                <div className='icon'>
                    <FaUsers className="icons" />
                </div>
                <div className='icon'>
                    <FaGamepad className="icons" />
                </div>
            
            </div>
            <div className='header-3'>
               
                <div className='plus-2'>
                <FaPlusCircle className='fa-plus' />
                </div>
                <div className='plus-2'>
                <FaFacebookMessenger className='fa-plus' />
                </div>
                <div className='plus-2'>
                <FaBell className='fa-plus' />
                </div>
                <div className='plus-1'>
                    <img src="/images/d.jpg" className="img-d" alt="dp" />
                </div>
            </div>
        </div>
        <MainArea />
     </div>
   
    )
}
export default HeaderSection;