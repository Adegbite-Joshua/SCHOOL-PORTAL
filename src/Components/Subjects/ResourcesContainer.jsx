import axios from 'axios';
import React, {useEffect, useState}from 'react'
import { useSelector } from 'react-redux';
import FileViewer from '../../FileViewer';
import subjects from '../../subjectArray';
import SubjectResource from './SubjectResource'

const ResourcesContainer = ({subjectIndex}) => {
  let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
  let fetching = useSelector((state)=>state.studentInformation.staffFetchingState);
  const [studentResources, setstudentResources] = useState([])
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
        setstudentResources(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
      // ?
  }
  useEffect(()=>{
    fetchResources()
  }, [subjectIndex])

  return (
    <>
        {studentResources.length>0?studentResources.map((resource, index)=>(
          <SubjectResource resource={resource}/>
        )):'No displaying resources yet'}
    </>
  )
}

export default ResourcesContainer