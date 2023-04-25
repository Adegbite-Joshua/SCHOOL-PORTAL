import React from 'react'
import Subject from './Subject'


const SubjectSideDiv = () => {
  return (
    <>
        <div className='SubjectSideDiv'>
            <h3 className='text-center'>Subjects</h3>
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