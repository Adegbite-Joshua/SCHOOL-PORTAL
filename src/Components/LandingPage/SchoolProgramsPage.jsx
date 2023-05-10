import React from 'react'
import Program from './Program'

const SchoolProgramsPage = () => {
  return (
    <>
        <div className='w-100 SchoolProgramsPage py-3' style={{minHeight: '70vh', background: '#E4E9EC'}}>
            <Program title='Academic Programming' body='Hope Academy offers a comprehensive curriculum aligned with Connecticut State Standards.'/>
            <Program title='Therapeutic Approach' body='Our Therapeutic Approach is what makes Hope Academy a truly unique school environment for our students.'/>
            <Program title='School Engagement Services' body='We recognize that school is not easy for many students. For some students, it is simply overwhelming.'/>
            <Program title='Transition Services' body='In working with even our youngest students, we have their long-term future in mind.'/>
        </div>
    </>
  )
}

export default SchoolProgramsPage