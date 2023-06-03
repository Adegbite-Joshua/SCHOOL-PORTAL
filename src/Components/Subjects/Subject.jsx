import React from 'react'

const Subject = ({name, subjectIndex, func}) => {
  return (
    <>
        <div onClick={()=>func(subjectIndex)} className='w-100 p-2 my-2'>
            <img src="/vite.svg" className='float-left' alt="" />
            <h5 className='d-inline'>{name}</h5>
        </div>
    </>
  )
}

export default Subject