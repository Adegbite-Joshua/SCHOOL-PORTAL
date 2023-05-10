import React from 'react'

const Alert = () => {
  const hideAlert =(e)=>{
    // console.log(document.getElementById('Alert').style.height);
    document.getElementById('Alert').style.height = '0px';
    document.getElementById('Alert').style.display = 'none';

  }
  return (
    <div id='Alert' className='w-75 blue500 mx-auto p-5 position-relative blue400 rounded-3' style={{zIndex: '1', height: '200px', display: 'flex'}}>
        <i className='position-absolute top-5 start-5 fa fa-bell'></i> <i onClick={(e)=>hideAlert(e.target)} className='position-absolute top-5 end-0 me-5 fa fa-close float-end'></i>
        <h3 className='align-self-center'>PROADE SCHOOL is currently operating full-time, in-person learning.</h3>
    </div>
  )
}

export default Alert