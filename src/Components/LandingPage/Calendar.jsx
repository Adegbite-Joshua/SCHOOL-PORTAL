import React from 'react'

const Calendar = ({range}) => {
  return (
    <>
        <li>
            <span>22 Aug <br /> 2022</span> <span>Professional Development - Staff Only</span> <span className='text-end ms-auto'>{range}</span>
        </li>
    </>
  )
}

export default Calendar