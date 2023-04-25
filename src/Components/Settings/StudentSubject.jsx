import React from 'react'
import Subject from './Subject'


const ErrorPage = () => {
    // document.querySelector("title").innerText = `404 - Error Page`
  return (
    <>
        <div className='w-100 px-4'>
            <div>
            <h3>Choose New Subject To Add</h3>
            <select name='' id='' className='form-control my-2'>
                <Subject/>
                <Subject/>
                <Subject/>
                <Subject/>
                <Subject/>
            </select>
            <button className='btn btn-info my-2 w-100'>Add Subject(s)</button>
            </div>
            <div>
            <h3>Choose The Subject To Remove</h3>
            <select name='' id='' className='form-control my-2'>
                <Subject/>
                <Subject/>
                <Subject/>
                <Subject/>
                <Subject/>
            </select>
            <button className='btn btn-info my-2 w-100'>Remove Subject(s)</button>
            </div>
        </div>
    </>
  )
}

export default ErrorPage