import React, { useEffect } from 'react'
import ReceiverMessage from './ReceiverMessage'
import SenderMessage from './SenderMessage'
import {useSelector, useDispatch} from 'react-redux'



const InboxMainDiv = ({func}) => {
    useEffect(() => {
        console.log(document.getElementById("messageContainer").scrollHeight)
        document.getElementById("messageContainer").scrollTop = document.getElementById("messageContainer").scrollHeight
    }, [])
    let allStaffs = useSelector((state)=>state.studentInformation.allStaffs);    
    let allStudents = useSelector((state)=>state.studentInformation.allStudents);    
  return (
    <>
        <div className='InboxMainDiv p-5 position-relative topSpace'>
            <h3 className='position-sticky top-0 text-center'>Adegbite Joshua <span id='toggleIcon' onClick={func} className='float-end border border-2 p-2 rounded-3'><i className='fas fa-bars'></i></span></h3>
            <div id='messageContainer' className='messageContainer'>                
                <SenderMessage message="Hey! I'm fine. Thanks for asking!" time='11:01PM'/>    
                <SenderMessage message="Hey! I'm fine. Thanks for asking!" time='11:01PM'/>                                    
                <SenderMessage message="Hey! I'm fine. Thanks for asking!" time='11:01PM'/>    
                <SenderMessage message="Hey! I'm fine. Thanks for asking!" time='11:01PM'/>                                    
                <SenderMessage message="Hey! I'm fine. Thanks for asking!" time='11:01PM'/>    
                <SenderMessage message="Hey! I'm fine. Thanks for asking!" time='11:01PM'/>                    
            </div>
        {/* {document.getElementById("messageContainer").onscroll = measure} */}
        </div>
    </>
  )
}

export default InboxMainDiv