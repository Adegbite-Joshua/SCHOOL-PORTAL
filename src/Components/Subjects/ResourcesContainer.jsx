import React, {useEffect}from 'react'
import SubjectResource from './SubjectResource'

const ResourcesContainer = () => {
  useEffect(({subjectIndex})=>{
    if(subjectIndex){
      let endpoint = 'http://localhost:7777/student/fetchsubjectresources'
      axios.post(endpoint, payload)
    }
  }, [fetchSubjectResources])
  return (
    <>
        <SubjectResource/>
        <SubjectResource/>
        <SubjectResource/>
        <SubjectResource/>
        <SubjectResource/>
        <SubjectResource/>
        <SubjectResource/>
    </>
  )
}

export default ResourcesContainer