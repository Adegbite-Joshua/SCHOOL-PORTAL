import React from 'react'

const LandingPageVideoDiv = () => {
  return (
    <>
        <div style={{minHeight: '100vh'}} className='w-100 bg-light p-5'>
            <div style={{height: '50vh'}} className="w-50 d-block mx-auto border border-2 border-danger">
                <video src="vid.mp4" width='100%' height='100%'></video>
            </div>
            <h1 className='text-center'>Welcome to Hope Academy</h1>
            <p className='w-50 d-block mx-auto text-center'>At Hope Academy, we recognize and cultivate each student’s strengths and talents, while providing individualized instruction to meet his or her unique learning needs. Our unique approach of embedding therapeutic supports throughout the academic school day allows us to provide students with an environment in which they feel safe to learn, grow, and build positive relationships. Each student at Hope Academy receives individualized instruction aligned with the Connecticut State Standards as well as targeted intervention using specialized methodologies when appropriate. Emphasis is placed on college and career readiness, and the development of executive functioning skills for all students.</p>
            <button className='btn btn-warning d-block mx-auto'>LEARN MORE</button>
        </div>
    </>
  )
}

export default LandingPageVideoDiv