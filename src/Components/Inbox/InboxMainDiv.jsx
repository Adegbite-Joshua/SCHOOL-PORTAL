import React, { useEffect } from 'react'
import ReceiverMessage from './ReceiverMessage'
import SenderMessage from './SenderMessage'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'



const InboxMainDiv = ({func, category, individualEmail, clas}) => {
    useEffect(() => {
        console.log(document.getElementById("messageContainer").scrollHeight)
        document.getElementById("messageContainer").scrollTop = document.getElementById("messageContainer").scrollHeight
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
            receiverClass: clas,
            receiverEmail: individualEmail,
            senderRelationship: 'student',
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
  return (
    <>
        <div className='InboxMainDiv p-5 position-relative topSpace'>
            <h3 className='position-sticky top-0 text-center'>Adegbite Joshua <span id='toggleIcon' onClick={func} className='float-end border border-2 p-2 rounded-3'><i className='fas fa-bars'></i></span></h3>
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
            <div style={{marginTop: '-50px'}}>
                <input type="text" id='message' className='form-control my-2' />
                {/* <button className='btn btn-info my-2'>Send Message</button> */}
                <button onClick={sendMessage} className='btn btn-info my-2'>Send Message</button>
            </div>
        {/* {document.getElementById("messageContainer").onscroll = measure} */}
        </div>
    </>
  )
}

export default InboxMainDiv