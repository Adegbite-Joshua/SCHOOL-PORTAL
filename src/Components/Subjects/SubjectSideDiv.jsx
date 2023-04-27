import React from 'react'
import Subject from './Subject'


const SubjectSideDiv = () => {
  return (
    <>
        <div className='SubjectSideDiv topSpace'>
            <h3 className='text-center'>Subjects <span id='toggleIcon' className='float-end border border-2 p-2 rounded-3'><i className='fas fa-close'></i></span></h3>
            <div className='w-100 SubjectSideDiv' style={{height: '80vh', overflowY: 'auto'}}>
                <Subject/>
                <Subject/>
                <Subject/>
                <Subject/>
                <Subject/>
                <Subject/>
            </div>
        </div>
    </>
  )
}

export default SubjectSideDiv