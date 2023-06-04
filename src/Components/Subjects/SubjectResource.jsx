import React from 'react'
import FileViewer from '../../FileViewer'

const SubjectResource = ({resource}) => {
  return (
    <>
        <div className="w-100 position-relative">
            <div className="w-100">
                <h3>File Name: {resource.fileTitle}</h3>
                <p>Uploaded on: 09-02-7573</p>
                <FileViewer fileLink={resource.fileLink} fileType={resource.fileType}/>
            </div>
        </div>
    </>
  )
}

export default SubjectResource