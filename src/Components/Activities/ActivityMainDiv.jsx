import React from 'react'
import Activity from './Activity'

const ActivityMainDiv = ({func}) => {
  return (
    <>
        <div className="ActivityMainDiv border border-2 border-danger topSpace px-5 position-relative">
            <button onClick={func} className='position-absolute top-5 end-0 rounded-3 p-2'><i className='fas fa-bars'></i></button>
            <table className='w-100'>
                <thead>
                    <tr>
                        <td className='widthTd'>NAME</td>
                        <td className=' d-none d-sm-inline-block'>ASSIGNEE</td>
                        <td className=' d-none d-sm-inline-block'>DURATION</td>
                        <td className=' d-none d-sm-inline-block'>DUE DATE</td>
                        <td className=' d-none d-sm-inline-block'>STATUS</td>
                    </tr>
                </thead>
                <tbody className='activity'>
                    <Activity name='School Excursion' assignee='Martins Werner' duration='30 mins' date='07/09/2009' status='Pending'/>
                    <Activity name='School Excursion' assignee='Martins Werner' duration='30 mins' date='07/09/2009' status='Pending'/>
                    <Activity name='School Excursion' assignee='Martins Werner' duration='30 mins' date='07/09/2009' status='Pending'/>
                    <Activity name='School Excursion' assignee='Martins Werner' duration='30 mins' date='07/09/2009' status='Pending'/>
                    <Activity name='School Excursion' assignee='Martins Werner' duration='30 mins' date='07/09/2009' status='Pending'/>
                    <Activity name='School Excursion' assignee='Martins Werner' duration='30 mins' date='07/09/2009' status='Pending'/>
                    <Activity name='School Excursion' assignee='Martins Werner' duration='30 mins' date='07/09/2009' status='Pending'/>
                    <Activity name='School Excursion' assignee='Martins Werner' duration='30 mins' date='07/09/2009' status='Pending'/>
                    <Activity name='School Excursion' assignee='Martins Werner' duration='30 mins' date='07/09/2009' status='Pending'/>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ActivityMainDiv