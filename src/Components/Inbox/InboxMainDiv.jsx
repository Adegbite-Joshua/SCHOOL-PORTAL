import React, { useEffect, useState } from 'react'
import ReceiverMessage from './ReceiverMessage'
import SenderMessage from './SenderMessage'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'



const InboxMainDiv = ({func, partnerName, messages, partnerCommonId, sendMessage}) => {
    useEffect(() => {
        // console.log(document.getElementById("messageContainer").scrollHeight)
        document.getElementById("messageContainer").scrollTop = document.getElementById("messageContainer").scrollHeight
        // showPartnerName()
    }, [messages])
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);    
    let allStaffs = useSelector((state)=>state.studentInformation.allStaffs);    
    let allStudents = useSelector((state)=>state.studentInformation.allStudents);    
    let fetching = useSelector((state)=>state.studentInformation.staffFetchingState);
    const [messageInput, setmessageInput] = useState('')
    // console.log(messages);
    let chattingWithName = ''
    // const showPartnerName =()=>{
    //     if(category==0 && mainindex!=''){
    //         alert('yes')
    //         let ff = allStaffs[mainindex].find((individual, index)=>individual.email=individualEmail)
    //         console.log(allStaffs[mainindex])
    //      } else if(category==1 && mainindex!=''){
    //         alert('no')
    //          let gg = allStudents[mainindex].find((individual, index)=>individual.email=individualEmail)
    //          console.log(gg)
    //       }
    // }
  return (
    <>
        <div className='InboxMainDiv p-5 position-relative topSpace'>
            <h3 className='position-sticky top-0 text-center'>Adegbite Joshua <span id='toggleIcon' onClick={func} className='float-end border-2 p-2 rounded-3'><i className='fas fa-bars'></i></span></h3>
            <div id='messageContainer' className='messageContainer'>                
                {messages?.length>=1?messages.map((message, index)=>(
                    message.senderId==studentInfo._id?<SenderMessage messageBody={message} message={message.message} time={`Date: ${message.messageDate} Time: ${message.messageTime}`}/>:<ReceiverMessage messageBody={message} message={message.message} time={`Date: ${message.messageDate} Time: ${message.messageTime}`}/>
                )):<>
                    <div className='d-flex h-100 w-100 bg-light justify-content-center align-items-center'>
                        <p>You currently have no message with this user</p>
                    </div>
                </>}                    
            </div>
            <div id='sendContainer'>
                <p className='text-center fw-bold'>{partnerName?partnerName:'Select A Name'}</p>
                <div>
                    <input type="text" id='message' onChange={(e)=>setmessageInput(e.target.value)} className='form-control my-2' />
                    <button onClick={()=>{sendMessage(messageInput);message.value=''}} className='btn btn-info my-2'>Send Message</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default InboxMainDiv