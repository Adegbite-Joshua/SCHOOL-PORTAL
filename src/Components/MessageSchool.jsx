import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'

const MessageSchool = () => {
    const openForm =()=> {
        document.getElementById("myForm1").style.display = "block";
    }
    const closeForm =()=> {
        document.getElementById("myForm1").style.display = "none";
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: (values)=>{
            console.log(values);
            let messageEndpoint = 'http://localhost:7777/student/messageschool'
            axios.post(messageEndpoint, {values})
            .then((response)=>{
                if (response.status == 200) {
                   alert('Message sent') 
                } else{
                    alert('errpr in sending message')
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    })
  return (
    <>
        <button className="open-button1 p-2 rounded-pill" onClick={openForm}>Message Us</button>
        <div className="chat-popup1" id="myForm1">
        <form className="form-container1" onSubmit={formik.handleSubmit}>
            <h1>Chat</h1>
            <small>Having any question, suggestion or issue?</small>
            <label for="msg"><b>Message Hope Academy Admin</b></label>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' {...formik.getFieldProps('name')} placeholder='Your Name' className='form-control mt-1' />
            <label htmlFor="email">Email</label>
            <input type="email" name='email' {...formik.getFieldProps('email')} placeholder='Your email' className='form-control mt-1' />
            <textarea placeholder="Type message.." {...formik.getFieldProps('msg')} className='form-control mt-1' name="msg" required></textarea>
            <button type="submit" className="btn1"><i className='fas fa-send'></i></button>
            <button type="button" className="btn1 cancel1 btn rounded-pill" onClick={closeForm}>Close</button>
        </form>
        </div>
    </>
  )
}

export default MessageSchool


