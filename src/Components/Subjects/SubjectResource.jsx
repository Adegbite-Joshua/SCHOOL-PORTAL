import React from 'react'

const SubjectResource = () => {
  return (
    <>
        <div className="w-100 position-relative">
            <div className="w-100">
                <h3>File Name: Preview on plant cell</h3>
                <p>Uploaded on: 09-02-7573</p>
                {/* <object id='uploadedfile' data="vid.mp4" controls type="video/webm" pause='true' width="100%" height="100%">
                    <p>Alternative text - include a link <a href="port.pdf">to the PDF!</a></p>
                </object> */}
                <video src="vid.mp4"  width="100%" className='' style={{aspectRatio: '19/7'}} controls pause='true'></video>
            </div>
        </div>
    </>
  )
}

export default SubjectResource