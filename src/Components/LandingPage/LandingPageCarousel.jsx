import React, { useEffect, useState } from 'react'

const LandingPageCarousel = () => {
    // useEffect(() => {
    //     carousel();
    // }, [])

    const [myIndex, setmyIndex] = useState(0)


    // function carousel() {
    //     // var i;
    //     var x = document.getElementsByClassName("mySlides");
    //     // for (i = 0; i < x.length; i++) {
    //     //     x[i].style.display = "none";  
    //     // }
    //     document.querySelectorAll('.mySlides').forEach(img => {
    //         img.style.display = "none";
    //         // console.log(img);  
    //     });
    //     if (myIndex > x.length) {myIndex = 1} 
    //     // console.log(document.getElementsByClassName("mySlides"));   
    //     document.querySelectorAll('.mySlides').forEach((img, index) => {
    //         if (index==myIndex) {
    //             img.style.display = "block"
    //         }
    //     });
    //     setTimeout(()=>carousel(), 2000); // Change image every 2 seconds
    //     setmyIndex(myIndex + 1)

    // }


    return (
        <>
            {/* <div class="w3-content w3-section" style={{width: '100vw', height: '500px'}}>
            <img id='img0' src="teachers/bg-image-5.jpeg" class="mySlides w-100 h-100" />
            <img id='img1' src="teachers/bg-image-3.jpg" class="mySlides w-100 h-100" />
            <img id='img2' src="vite.svg" class="mySlides w-100 h-100" />
        </div> */}
            {/* <div style={{height: '400px'}} className='position-relative w-100'>
            <img src="teachers/5.png" className='w-100 position-absolute top-0 bottom-0 start-0 end-0' alt="" />
        </div> */}

            <div style={{height: '80vh'}} className='position-relative border border-2 border-danger overflow-hidden' >
                <div id="carouselExampleAutoplaying" style={{zIndex: '-99999'}} class="carousel slide h-100 position-absolute w-100" data-bs-ride="carousel">
                    <div class="carousel-inner w-100 h-100">
                        <div class="carousel-item active w-100 h-100" data-bs-interval="2000">
                            <img src="teachers/bg-image-5.jpeg" class="d-block w-100 h-100" alt="..." />
                        </div>
                        <div class="carousel-item w-100 h-100" data-bs-interval="2000">
                            <img src="teachers/bg-image-3.jpg" class="d-block w-100 h-100" alt="..." />
                        </div>
                        <div class="carousel-item w-100 h-100" data-bs-interval="2000">
                            <img src="teachers/vite.svg" class="d-block w-100 h-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div className='carouselOverlay w-100 h-100 position-absolute d-flex justify-content-center align-items-center ' style={{zIndex: '-8888'}}>
                    <div id='carouselCenter' className='justify-content-center align-items-center'>
                        <h3 className='text-center text-light'>Our mission is to educate the whole child. <br /> Because every child deserves a little HOPE...</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPageCarousel