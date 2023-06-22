import React, { useEffect } from 'react'
import ReceiverMessage from './ReceiverMessage'
import SenderMessage from './SenderMessage'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'



const InboxMainDiv = ({func, category, individualEmail, mainindex, partner}) => {
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
            messageSenderClass: studentInfo.class,
            messageSenderEmail: studentInfo.email,
            receiverRelationship: category==1?'staff':'student',
            receiverClass: mainindex,
            receiverEmail: individualEmail,
            senderRelationship: 'student',
            staffStudentNumber: category,
            messageBody: document.getElementById('message').value
        }
        console.log(messageDetails);
        let endpoint = 'http://localhost:7777/student/sendmessage'
        axios.post(endpoint, messageDetails)
        .then((res)=>{
            console.log(res);
        })
        .catch((error)=>{
            console.log(error);
        })
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
                {studentInfo.messages?studentInfo.messages.map((message, index)=>(
                    <>
                        <SenderMessage message={message.messageBody} time='11:01PM'/>
                    </>
                )):<>
                    <div className='d-flex h-100 w-100 bg-light justify-content-center align-items-center'>
                        <p>Click on a name</p>
                    </div>
                </>}                    
            </div>
            <div id='sendContainer'>
                <p className='text-center fw-bold'>{partner?partner:'Select A Name'}</p>
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