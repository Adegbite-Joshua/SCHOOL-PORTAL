import React from 'react'
import Calendar from './Calendar'

const UpcomingCalendar = () => {
  return (
    <>
        <div className='UpcomingCalendar'>
            <div className='' name='img'>
                {/* <img src="" className='h-100 w-100' alt="" /> */}
            </div>
            <div>
                
                <ul className='bg-light'>
                <div className='w-100' style={{height: '150px'}}>
                    <h1></h1>
                </div>
                    <Calendar range={(<>August 22-26, <br /> 2022</>)}/>
                    <Calendar/>
                    <Calendar/>
                    <Calendar/>
                    <Calendar/>
                    <Calendar/>
                    <Calendar/>
                    <Calendar/>
                    <Calendar/>
                    <Calendar/>
                    <Calendar/>
                    <Calendar/>
                    <Calendar/>
                    <Calendar/>
                    <Calendar/>
                    <Calendar/>
                </ul>
            </div>
        </div>
    </>
  )
}

export default UpcomingCalendar