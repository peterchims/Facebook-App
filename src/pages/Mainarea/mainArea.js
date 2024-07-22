import React from 'react'
import {  FaAngleDown, FaFacebookMessenger, FaFontAwesomeFlag, FaMedrt, FaSearch, FaUserFriends } from 'react-icons/fa'

import './mainArea.css'
import { MdMoreHoriz, MdVideoCall } from 'react-icons/md';

function MainArea() {
    return(
<div className='Main'>

    <div className='Lside'>
        <div className='profile'>
            <img src='/images/d..jpg' className='profile' alt='bd' />
       Peter Lola
        </div>
        <div className='pro'>
        <FaUserFriends className='fa-mess' />
        <div> Friends </div>
        </div>
        <div className='pro'>
            <FaFontAwesomeFlag  className='flag' />
            <div> Pages </div>
        </div>
        <div className='pro'>
            <FaMedrt className='hrt' />
            <div> Covid-19 Center</div>
        </div>
        <div className='pro'>
        <FaFacebookMessenger className='fa-mess' />
        <div> Messenger Kids</div>
        </div>
        
        <div className='pro'>
        <FaAngleDown className='fa-ang' />
        <div> See More</div>
        </div>
        <hr />
        <div className='profiles'>
            <img src="/images/d..jpg" alt="logo" className='profile-display'/>
       <div> Tech Community </div>
        </div>
        <div className='profiles'>
            <img src="/images/d..jpg" alt="logo" className='profile-display'/>
       <div> Football Community </div>
        </div>
        <div className='profiles'>
            <img src="/images/d..jpg" alt="logo" className='profile-display'/>
       <div> Tech Community </div>
        </div>
        <div className='pros'>
        <FaAngleDown />
        <div> See More</div>
        </div>
    </div>
    <div className='MainArea'>
      middle
    </div>
    <div className='Rside'>
     <div className='Contact'>
        <div className='Contacts'>
            Contacts
        </div>
     
     <div className='chatIcon'>
        <div className="icons">
            <MdVideoCall />
        </div>
        <div className="icons">
            <FaSearch  />
        </div>
        <div className="icons">
            <MdMoreHoriz />
        </div>
     </div>
     </div>
     <div className='concise'>
     <div className='profiles-1'>
            <img src="/images/d..jpg" alt="logo" className='profile-display'/>
       <div className='profile-text'>  Tech Community </div>
        </div>
        <div className='profiles-1'>
            <img src="/images/d..jpg" alt="logo" className='profile-display'/>
       <div className='profile-text'> Football Community </div>
        </div>
        <div className='profiles-1'>
            <img src="/images/d..jpg" alt="logo" className='profile-display'/>
       <div className='profile-text'> Tech Community </div>
        </div>
     </div>
    </div>
</div>
    );

}
export default MainArea;