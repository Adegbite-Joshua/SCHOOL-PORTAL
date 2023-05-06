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
                        <td>NAME</td>
                        <td className=' d-none d-sm-block'>ASSIGNEE</td>
                        <td>DURATION</td>
                        <td>DUE DATE</td>
                        <td>STATUS</td>
                    </tr>
                </thead>
                <tbody>
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