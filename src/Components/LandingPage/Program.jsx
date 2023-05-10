import React from 'react'

const Program = ({title, body, img}) => {
  return (
    <>
        <div className='Program align-items-center px-5'>
            <img src={img} className='rounded-circle bg-light' style={{width: '150px', aspectRatio: '1'}} alt="" />
            <h3 style={{color: '#498EFC'}}>{title}</h3>
            <p>{body}</p>
            <button style={{background: '#FFA800'}} className='btn p-2 d-block mx-auto'>LEARN MORE</button>
        </div>
    </>
  )
}

export default Program