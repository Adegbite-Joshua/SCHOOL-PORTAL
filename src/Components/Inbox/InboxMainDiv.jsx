import React, { useEffect } from 'react'
import ReceiverMessage from './ReceiverMessage'
import SenderMessage from './SenderMessage'


const InboxMainDiv = () => {
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
        <div className='InboxMainDiv p-5 position-relative'>
            <h3 className='position-sticky top-0 text-center'>Adegbite Joshua</h3>
            <div id='messageContainer' className='messageContainer'>
                <ReceiverMessage/>    
                <SenderMessage/>    
                <SenderMessage/>    
                <ReceiverMessage/>    
                <ReceiverMessage/>    
                <SenderMessage/>    
                <SenderMessage/>    
                <ReceiverMessage/>    
                <ReceiverMessage/>    
                <SenderMessage/>    
                <SenderMessage/>    
                <ReceiverMessage/>    
            </div>
        {/* {document.getElementById("messageContainer").onscroll = measure} */}
        </div>
    </>
  )
}

export default InboxMainDiv