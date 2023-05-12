import React, { useEffect } from 'react'

const TwoDIvComponents = ({first, second}) => {
    useEffect(() => {
      console.log(document.querySelector('.TwoDIvComponents'));
      console.log(first);
    }, [])
    
  return (
    <>
        <div className="TwoDIvComponents">
            {first}
            {second}
        </div>
    </>
  )
}

export default TwoDIvComponents