import React, {useEffect}from 'react'
import { useSelector } from 'react-redux';
import subjects from '../../subjectArray';
import SubjectResource from './SubjectResource'

const ResourcesContainer = ({subjectIndex}) => {
  let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
  const fetchResources = ()=>{
    // if(subjectIndex){
      let endpoint = 'http://localhost:7777/student/fetchsubjectresources'
      let payload = {
        class: studentInfo.class,
        subject: subjects[subjectIndex]
      }
      console.log(payload);
      axios.post(endpoint, payload)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
  useEffect(()=>{
    fetchResources()
  }, [subjectIndex])
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