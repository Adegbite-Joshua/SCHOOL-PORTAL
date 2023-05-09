import React, { useEffect, useState } from 'react'

const LandingPageCarousel = () => {
    useEffect(() => {
        carousel();
    }, [])

    const [myIndex, setmyIndex] = useState(0)
    

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        // for (i = 0; i < x.length; i++) {
        //     x[i].style.display = "none";  
        // }
        document.querySelectorAll('.mySlides').forEach(img => {
            img.style.display = "none";
            // console.log(img);  
        });
        setmyIndex(myIndex + 1)
        if (myIndex > x.length) {myIndex = 1} 
        // console.log(document.getElementsByClassName("mySlides"));   
        document.querySelectorAll('.mySlides').forEach((img, index) => {
            if (index==myIndex) {
                img.style.display = "block"
            }
        });
        setTimeout(()=>carousel(), 2000); // Change image every 2 seconds

    }


  return (
    <>
        <div class="w3-content w3-section" style={{width: '100vw', height: '500px'}}>
            <img id='img0' src="teachers/bg-image-5.jpeg" class="mySlides" />
            <img id='img1' src="teachers/bg-image-3.jpg" class="mySlides" />
            <img id='img2' src="teachers/5.png" class="mySlides" />
        </div>
        {/* <div style={{height: '400px'}} className='position-relative w-100'>
            <img src="teachers/5.png" className='w-100 position-absolute top-0 bottom-0 start-0 end-0' alt="" />
        </div> */}
    </>
  )
}

export default LandingPageCarousel