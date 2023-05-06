import React, { useEffect } from 'react'
import ReceiverMessage from './ReceiverMessage'
import SenderMessage from './SenderMessage'


const InboxMainDiv = ({func}) => {
    useEffect(() => {
        console.log(document.getElementById("messageContainer").scrollHeight)
        document.getElementById("messageContainer").scrollTop = document.getElementById("messageContainer").scrollHeight
    }, [])
    
    // const measure =()=>{
    //     // document.getElementById("messageContainer").scrollTop = document.getElementById("messageContainer").scrollHeight
    //     // console.log(document.getElementById("messageContainer").scrollBottom)
    //     // console.log(document.getElementById("messageContainer").scrollHeight)
    // }
    // messageContainer.scrollTop = messageContainer.scrollHeight;
    
  return (
    <>
        <div className='InboxMainDiv p-5 position-relative topSpace'>
            <h3 className='position-sticky top-0 text-center'>Adegbite Joshua <span id='toggleIcon' onClick={func} className='float-end border border-2 p-2 rounded-3'><i className='fas fa-bars'></i></span></h3>
            <div id='messageContainer' className='messageContainer'>
                <ReceiverMessage message='Hello. How are you today?' time='10:56AM'/>    
                <SenderMessage message="Hey! I'm fine. Thanks for asking!" time='11:01PM'/>    
                <SenderMessage message="Hey! I'm fine. Thanks for asking!" time='11:01PM'/>    
                <ReceiverMessage message='Hello. How are you today?' time='10:56AM'/>    
                <ReceiverMessage message='Hello. How are you today?' time='10:56AM'/>    
                <SenderMessage message="Hey! I'm fine. Thanks for asking!" time='11:01PM'/>    
                <SenderMessage message="Hey! I'm fine. Thanks for asking!" time='11:01PM'/>    
                <ReceiverMessage message='Hello. How are you today?' time='10:56AM'/>    
                <ReceiverMessage message='Hello. How are you today?' time='10:56AM'/>    
                <SenderMessage message="Hey! I'm fine. Thanks for asking!" time='11:01PM'/>    
                <SenderMessage message="Hey! I'm fine. Thanks for asking!" time='11:01PM'/>    
                <ReceiverMessage message='Hello. How are you today?' time='10:56AM'/>    
            </div>
        {/* {document.getElementById("messageContainer").onscroll = measure} */}
        </div>
    </>
  )
}

export default InboxMainDiv