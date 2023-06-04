import React from 'react'
import { useSelector } from 'react-redux';
import subjects from '../../subjectArray';
import Subject from './Subject'


const ErrorPage = () => {
    // document.querySelector("title").innerText = `404 - Error Page`
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    let addedSubjects = [];
    studentInfo.subjects.map((subject, index)=>{
        addedSubjects.push({subjectIndex: subject.subjectIndex, index:index});
    })
    let unAddedSubjects = [0,1,2,3,4,5,6,7,8,9,10,11,12];
    // for (let i = 0; i < subjects.length; i++) {
    //     console.log();
    //     // addedSubjects.map((subject, index)=>{
    //     //     let found = [];
    //     //     if (subject.subjectIndex!=i && !unAddedSubjects.includes(i)) {
    //     //         unAddedSubjects.push(i)
    //     //     }
    //     // })
    // }
    // console.log(addedSubjects);
    // addedSubjects.map((subject, index)=>{
    //     if (unAddedSubjects.includes(subject.subjectIndex)) {
    //         unAddedSubjects.splice(subject.subjectIndex,1)
    //     }
    // })
    for (let i = 0; i < 11; i++) {
        
        
    }
    console.log(addedSubjects);
    console.log(unAddedSubjects);
  return (
    <>
        <div className='w-100 px-4'>
            <div>
                <h3>Choose New Subject To Add</h3>
                <select name='' id='' multiple className='form-control my-2'>
                    
                </select>
                <button className='btn blue500 my-2 w-100'>Add Subject(s)</button>
            </div>
            <div>
                <h3>Choose The Subject To Remove</h3>
                <select name='' id='' multiple className='form-control my-2'>
                    <Subject/>
                    <Subject/>
                    <Subject/>
                    <Subject/>
                    <Subject/>
                </select>
                <button className='btn blue500 my-2 w-100'>Remove Subject(s)</button>
            </div>
        </div>
    </>
  )
}

export default ErrorPage