import React from 'react'
import Activity from './Activity'

const ActivityMainDiv = () => {
  return (
    <>
        <div className="ActivityMainDiv border border-2 border-danger topSpace px-5">
            <table className='w-100'>
                <thead>
                    <tr>
                        <td>NAME</td>
                        <td>ASSIGNEE</td>
                        <td>DURATION</td>
                        <td>DUE DATE</td>
                        <td>STATUS</td>
                    </tr>
                </thead>
                <tbody>
                    <Activity/>
                    <Activity/>
                    <Activity/>
                    <Activity/>
                    <Activity/>
                    <Activity/>
                    <Activity/>
                    <Activity/>
                    <Activity/>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ActivityMainDiv