import React from 'react'
import ResultsDisplay from './ResultsDisplay'
import SubjectPerformance from './SubjectPerformance'

const PerformanceContainer = () => {
  return (
    <>
        <div className="px-4 resultDiv overflow-auto" style={{minWidth: '100%'}}>
            <ResultsDisplay/>
        </div>
        <div className="d-flex gap-2 text-center mt-3 performanceDiv">
            <SubjectPerformance/>
            <SubjectPerformance/>
            <SubjectPerformance/>
        </div>
    </>
  )
}

export default PerformanceContainer