import React, { useEffect } from 'react'
import ReceiverMessage from './ReceiverMessage'
import SenderMessage from './SenderMessage'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'



const InboxMainDiv = ({func, partnerId, messages}) => {
    useEffect(() => {
        // console.log(document.getElementById("messageContainer").scrollHeight)
        document.getElementById("messageContainer").scrollTop = document.getElementById("messageContainer").scrollHeight
        // showPartnerName()
    }, [])
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);    
    let allStaffs = useSelector((state)=>state.studentInformation.allStaffs);    
    let allStudents = useSelector((state)=>state.studentInformation.allStudents);    
    let fetching = useSelector((state)=>state.studentInformation.staffFetchingState);

    const sendMessage =()=>{
        console.log(studentInfo);
        let messageDetails = {
            messageDate: new Date().toLocaleDateString(),
            messageTime: new Date().toLocaleTimeString(),
            message: document.getElementById('message').value,
            senderId: studentInfo._id
        }
        let endpoint = 'http://localhost:7777/student/sendmessage'
        // axios.post(endpoint, messageDetails)
        // .then((res)=>{
        //     console.log(res);
        // })
        // .catch((error)=>{
        //     console.log(error);
        // })
    }

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
                {partnerId?studentInfo.messages.map((message, index)=>(
                    <>
                        <SenderMessage messageBody={message} message={message.messageBody} time={`Date: ${message.messageDate} Time: ${message.messageTime}`}/> {/* src={message.senderRelationship=='student'?allStudents[0].find((student)=>student.class==message.senderClass):'vite.svg'} */}
                    </>
                )):<>
                    <div className='d-flex h-100 w-100 bg-light justify-content-center align-items-center'>
                        <p>Select A Partner Name</p>
                    </div>
                </>}                    
            </div>
            <div id='sendContainer'>
                <p className='text-center fw-bold'>{partnerId?partnerId:'Select A Name'}</p>
                <div>
                    <input type="text" id='message' className='form-control my-2' />
                    <button onClick={sendMessage} className='btn btn-info my-2'>Send Message</button>
                </div>
            </div>
        {/* {document.getElementById("messageContainer").onscroll = measure} */}
        </div>
    </>
  )
}

export default InboxMainDiv