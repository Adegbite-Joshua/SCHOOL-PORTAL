import React from 'react'
import ResultsDisplay from './ResultsDisplay'
import SubjectPerformance from './SubjectPerformance'

const PerformanceContainer = () => {
    const selectFile =(e)=>{
        let file = e.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload=()=>{
            console.log(reader.result);
        }

    }
  return (
    <>
        <div className='w-100'>
            <div className="resultDiv overflow-auto" style={{width: '100%'}}>
                <ResultsDisplay/>
            </div>
            <div className="d-flex gap-2 text-center mt-3 performanceDiv">
                <SubjectPerformance/>
                <SubjectPerformance/>
                <SubjectPerformance/>
            </div>
            <div>
                <h4>Make a submit to your teacher</h4>
                <label htmlFor="">File Description</label>
                <input className='form-control my-2' type="text" placeholder='File Description' />
                <input onChange={(e)=>selectFile(e)}className='form-control my-2' type="file" accept='.pdf, .docx, .txt' />
                <button className='btn blue500 my-1 p-2 w-50 d-block mx-auto'>Send</button>
            </div>
        </div>
    </>
  )
}

export default PerformanceContainer