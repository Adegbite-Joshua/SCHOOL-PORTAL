import React from 'react'

const SubjectPerformance = () => {
  return (
    <>
        <div className=' basis-auto'>
            <h3>Classwork Performance</h3>
            <div style={{height: '30px', width: '100%'}} class="progress" role="progressbar" aria-label="Animated striped" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                <div style={{height: '30px', width: '85%'}} class="progress-bar progress-bar-striped progress-bar-animated">85%</div>
            </div>
            <h6>You performed excellently in your last classwork</h6>
        </div>
    </>
  )
}

export default SubjectPerformance