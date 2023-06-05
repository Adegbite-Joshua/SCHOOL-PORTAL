import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ResultsDisplay from './ResultsDisplay'
import SubjectPerformance from './SubjectPerformance'
import axios from 'axios'
import subjects from '../../subjectArray';


const PerformanceContainer = ({subjectIndex}) => {
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    let allStaffs = useSelector((state)=>state.studentInformation.allStaffs);
    const [fileName, setfileName] = useState('')
    const [fileBase64, setfileBase64] = useState('')
    const selectFile =(e)=>{
        let file = e.target.files[0]
        setfileName(file.name)
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload=()=>{
            setfileBase64(reader.result)
        }

    }
    const sendSubmit =()=>{
        let submitDetails = {
            studentEmail: studentInfo.email,
            fileName,
            fileBase64,
            staffClass: Number(studentInfo.class),
            // staffEmail: '',
            subjectName: subjects[subjectIndex],
            fileDescription: document.getElementById('fileDescription').value
        }
        console.log(submitDetails);
        let endpoint = 'http://localhost:7777/student/sendsubmit'
        // let {fileName, ...rest} = submitDetails
        axios.post(endpoint, submitDetails)
        .then((res)=>{
            if(res.status==200){
                alert('submit sent')
            } else if(res.status==402){
                alert('an error occurred, try again')
            }
            console.log(res.data);
        })
        .catch((error)=>{
            console.log(error);
        })
        
    }

  return (
    <>
        <div className='w-100'>
            <div className="resultDiv overflow-auto" style={{width: '100%'}}>
                <ResultsDisplay subjectIndex={subjectIndex}/>
            </div>
            <div className="d-flex gap-2 text-center mt-3 performanceDiv">
                <SubjectPerformance/>
                <SubjectPerformance/>
                <SubjectPerformance/>
            </div>
            <div>
                <h4>Make a submit to your teacher</h4>
                <label htmlFor="">File Description</label>
                <input className='form-control my-2' type="text" id='fileDescription' placeholder='File Description' />
                <input onChange={(e)=>selectFile(e)}className='form-control my-2' type="file" accept='.pdf, .docx, .txt' />
                <button onClick={sendSubmit} className='btn blue500 my-1 p-2 w-50 d-block mx-auto'>Send</button>
            </div>
        </div>
    </>
  )
}

export default PerformanceContainer