import React from 'react'
import {  FaAngleDown, FaClock, FaCommentAlt, FaFacebookMessenger, FaFontAwesomeFlag, FaGrin, FaMedrt, FaPlusCircle, FaRegShareSquare, FaRegThumbsUp, FaSearch, FaTag, FaUserFriends, FaWhatsapp } from 'react-icons/fa'
import './mainArea.css'
import { MdMoreHoriz, MdVideoCall } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

function MainArea() {
    return(
<div className='Main'>

    <div className='Lside'>
        <div className='profile'>
            <img src='/images/d.jpg' className='profile' alt='bd' />
       Peter Lola
        </div>
        <div className='pro'>
        <FaUserFriends className='fa-mess' />
        <div  className='profile-tag'> Friends </div>
        </div>
        <div className='pro'>
        <FaClock className='fa-mess' />
        <div  className='profile-tag'> Memoriess </div>
        </div>
        <div className='pro'>
        <FaTag className='fa-mess' />
        <div  className='profile-tag'> Saved </div>
        </div>
        <div className='pro'>
            <FaFontAwesomeFlag  className='flag' />
            <div className='profile-tag'> Pages </div>
        </div>
        <div className='pro'>
            <FaMedrt className='hrt' />
            <div className='profile-tag'> Covid-19 Center</div>
        </div>
        <div className='pro'>
        <FaFacebookMessenger className='fa-mess' />
        <div className='profile-tag'> Messenger Kids</div>
        </div>
        <div className='pro'>
        <FaAngleDown className='fa-ang' />
        <div className='profile-tag'> See More</div>
        </div>
        <hr />
        <div className='pro'>
        <FaFacebookMessenger className='fa-mess' />
        <div className='profile-tag'> Messenger Kids</div>
        </div>
        <div className='pro'>
        <FaAngleDown className='fa-ang' />
        <div className='profile-tag'> See More</div>
        </div>
        <hr />
        <div className='profiles'>
            <img src="/images/d.jpg" alt="logo" className='profile-display'/>
       <div className='profile-tag'> Tech Community </div>
        </div>
        <div className='profiles'>
            <img src="/images/p1.jpg" alt="logo" className='profile-display'/>
       <div className='profile-tag'> Football Community </div>
        </div>
        <div className='profiles'>
            <img src="/images/p2.jpg" alt="logo" className='profile-display'/>
       <div className='profile-tag'> Tech Community </div>
        </div>
        <div className='pros'>
        <FaAngleDown />
        <div className='profile-tag'> See More</div>
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
    <div className='story' id='bg-container'>
        <img src="/images/d.jpg" alt="IMG" className='img-story-2' />
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
  <div className='Message-Section'>
    <div className='Message-Content'>
        <div className='Message-Cart'>
            <img src="/images/p3.jpg" alt="content-image" className='profile-img'  />
       Facebook Content
       <div className='update'> Updated his Cover Image.</div>
        </div>
        <div className='edit'><MdMoreHoriz className='fnt-more'/></div>
    </div>
    <div className='caption'>

This is dummy text, This is dummy text 
This is dummy text This is dummy text 
This is dummy text T
his is dummy text This is dummy text
    </div>
    <div className='FacebookImg'>
        <img src="/images/p3.jpg" alt="fb-img" className='fb-img' />
    </div>
    <div className='Comment'>
        <div className="Like">
            <FaRegThumbsUp  color="grey" /> Like
        </div>
        <div className="Like">
            <FaCommentAlt  color="grey" /> Comment
        </div>
        <div className="Like">
            <FaWhatsapp color="grey" /> Send
        </div>
        <div className="Like">
            <FaRegShareSquare  color="grey" /> Share
        </div>
    </div>
  </div>

  {/*  */}
  <div className='Message-Section'>
    <div className='Message-Content'>
        <div className='Message-Cart'>
            <img src="/images/p3.jpg" alt="content-image" className='profile-img'  />
       Facebook Content
       <div className='update'> Updated his Cover Image.</div>
        </div>
        <div className='edit'><MdMoreHoriz className='fnt-more'/></div>
    </div>
    <div className='caption'>
Please Like, Comment and Subscribe to our Youtube Channel.
    </div>
    <div className='FacebookImg'>
        <img src="/images/p3.jpg" alt="fb-img" className='fb-img' />
    </div>
    <div className='Comment'>
        <div className="Like">
            <FaRegThumbsUp  color="grey" /> Like
        </div>
        <div className="Like">
            <FaCommentAlt  color="grey" /> Comment
        </div>
        <div className="Like">
            <FaWhatsapp color="grey" /> Send
        </div>
        <div className="Like">
            <FaRegShareSquare  color="grey" /> Share
        </div>
    </div>
  </div>

  <div className='Message-Section'>
    <div className='Message-Content'>
        <div className='Message-Cart'>
            <img src="/images/p3.jpg" alt="content-image" className='profile-img'  />
       Facebook Content
       <div className='update'> Updated his Cover Image.</div>
        </div>
        <div className='edit'><MdMoreHoriz className='fnt-more'/></div>
    </div>
    <div className='caption'>
Please Like, Comment and Subscribe to our Youtube Channel.
    </div>
    <div className='FacebookImg'>
        <img src="/images/p3.jpg" alt="fb-img" className='fb-img' />
    </div>
    <div className='Comment'>
        <div className="Like">
            <FaRegThumbsUp  color="grey" /> Like
        </div>
        <div className="Like">
            <FaCommentAlt  color="grey" /> Comment
        </div>
        <div className="Like">
            <FaWhatsapp color="grey" /> Send
        </div>
        <div className="Like">
            <FaRegShareSquare  color="grey" /> Share
        </div>
    </div>
  </div>

  <div className='Message-Section'>
    <div className='Message-Content'>
        <div className='Message-Cart'>
            <img src="/images/p3.jpg" alt="content-image" className='profile-img'  />
       Facebook Content
       <div className='update'> Updated his Cover Image.</div>
        </div>
        <div className='edit'><MdMoreHoriz className='fnt-more'/></div>
    </div>
    <div className='caption'>
Please Like, Comment and Subscribe to our Youtube Channel.
    </div>
    <div className='FacebookImg'>
        <img src="/images/p3.jpg" alt="fb-img" className='fb-img' />
    </div>
    <div className='Comment'>
        <div className="Like">
            <FaRegThumbsUp  color="grey" /> Like
        </div>
        <div className="Like">
            <FaCommentAlt  color="grey" /> Comment
        </div>
        <div className="Like">
            <FaWhatsapp color="grey" /> Send
        </div>
        <div className="Like">
            <FaRegShareSquare  color="grey" /> Share
        </div>
    </div>
  </div>
</div>
</div>

 

    <div className='Rside'>
        <div className='Sponsored-ads'>
            <div className='sponsors'>
            <h2> Sponsored</h2>
            </div>
            <div className='sponsored-content'>
                <img src="/images/p3.jpg" className="sponsor-img"   alt="sponsored-img"/>
                <h4> 300 scholarships available for British MBA degrees</h4>          
            </div><br />
            <div className='sponsored-content'>
                <img src="/images/p3.jpg" className="sponsor-img"   alt="sponsored-img"/>
                <h4> 300 scholarships available for British MBA degrees</h4>          
            </div>
        </div>
        <hr className='sp-divider'/>
        <br/>
        <div className='pages'>
            <div className='page-header'>
                <h4> Your Pages and Profile </h4>
            </div>
            <div className='page-content'>
                <div className='sub-section'>
                    <img src="/images/p3.jpg" style={{}} alt="page-img" />
                    <h3> Contents Preview </h3>
                </div>
            </div>
        </div>
     <div className='Contact'>
        <div className='Contacts'>
            Contacts
        </div>
     
     <div className='chatIcon'>
        
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