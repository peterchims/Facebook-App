import React from 'react'
import {  FaAngleDown, FaFacebookMessenger, FaFontAwesomeFlag, FaGrin, FaMedrt, FaPlusCircle, FaSearch, FaUserFriends } from 'react-icons/fa'

import './mainArea.css'
import { MdMoreHoriz, MdVideoCall } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

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
            <img src="/images/d.jpg" alt="logo" className='profile-display'/>
       <div> Tech Community </div>
        </div>
        <div className='profiles'>
            <img src="/images/p1.jpg" alt="logo" className='profile-display'/>
       <div> Football Community </div>
        </div>
        <div className='profiles'>
            <img src="/images/p2.jpg" alt="logo" className='profile-display'/>
       <div> Tech Community </div>
        </div>
        <div className='pros'>
        <FaAngleDown />
        <div> See More</div>
        </div>
    </div>

    <div className='MainArea'>
        <div className='addStory'>
         <div className='story' >
        <div className='bg-story'>
        <img src="/images/p3.jpg" alt="IMG" className='img-story-1' />
        <FaPlusCircle className='fa-plus' />
       <h2>Create a Story</h2>
   </div>
   </div>
    <div className='story' id='bg-container'>
        <img src="/images/d.jpg" alt="IMG" className='img-story-2' />
        <h2> Lola Peter's</h2>
    </div>
    <div className='story' id="bg-container-2">
        <img src="/images/p2.jpg" alt="IMG" className='img-story-3' />
        <h2> Lola Peter's</h2>
    </div>
    <div className='story' id="bg-container-3" >
        <img src="/images/p1.jpg" alt="IMG" className='img-story-4' />
        <h2> Lola Peter's</h2>
    </div>
    
</div>
<div className='message'>
    <div className='text'>
        <div className='post'>
            <img src="/images/p1.jpg" alt='PIC' />
            <input type="Mind" placeholder="What's on your Mind, Username" /> 
        </div>
        <hr  className='divider'/>
        <div className='Call'>
            <div className='ico'>
                <div className='icone'>
                    <MdVideoCall  class="fa-video"  />
                    <div>LiveVideo</div>
                </div>
                <div className='icone'>
                    <AiFillFileImage className='fa-photo'/>
                    <div> Photo/Video</div>
                </div>
                <div className='icone'>
                    <FaGrin className='fa-grin' />
                    <div>Felling/Activity</div>
                </div>
            </div>
        </div>
    </div>
    <div className='message-section-content'>
    <div className="message-card">
        <div className="message-container">
        <img src="/images/p3.jpg" alt="IMG" className='img-story-1' />
      <h4>Peter4Tech</h4>
        </div>
    </div>
</div>
</div>

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
            <img src="/images/p1.jpg" alt="logo" className='profile-display'/>
       <div className='profile-text'>  Tech Community </div>
        </div>
        <div className='profiles-1'>
            <img src="/images/p2.jpg" alt="logo" className='profile-display'/>
       <div className='profile-text'> Football Community </div>
        </div>
        <div className='profiles-1'>
            <img src="/images/p3.jpg" alt="logo" className='profile-display'/>
       <div className='profile-text'> Tech Community </div>
        </div>
     </div>
    </div>
</div>
    );

}
export default MainArea;