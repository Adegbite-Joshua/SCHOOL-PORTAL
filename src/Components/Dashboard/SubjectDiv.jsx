import React from 'react'

const SubjectDiv = ({subject}) => {
  return (
    <>
        <div className='text-center bg-light bg-light shadow-lg rounded-4 p-2'>
            <h4>{subject}</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <img src="/vite.svg" style={{height: '30px', width: '30px', float: 'center'}} alt="" />
        </div>
    </>
  )
}

export default SubjectDiv