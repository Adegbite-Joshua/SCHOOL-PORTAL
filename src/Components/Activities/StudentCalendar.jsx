import React, { useEffect, useState } from 'react'



const StudentCalendar = () => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const [date, setdate] = useState(new Date())
    const [currentYear, setcurrentYear] = useState(date.getFullYear())
    const [currentMonth, setcurrentMonth] = useState(date.getMonth()) 
    console.log(months);
    // console.log(date.getDate())
    const renderCalendar =()=>{
        // const [daysNumber, setdaysNumber] = useState(new Date(currentYear, currentMonth+1, 0).getDate())
        let daysNumber = new Date(currentYear, currentMonth+1, 0).getDate();// last date of current month
        // let nextMonthDaysNumber = new Date(currentYear, currentMonth+1, 0).getDate();// 
        let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay();//first day of the month
        let lastDayofPrevMonth = new Date(currentYear, currentMonth, 0).getDate();// last date of previous of the month
        let lastDayofMonth = new Date(currentYear, currentMonth, daysNumber).getDay();
        // console.log(lastDayofMonth);
        // console.log(daysNumber);
        header.innerText = `${months[currentMonth]} ${currentYear}`
        document.getElementById('daysList').innerHTML = ''
        for (let i = firstDayofMonth; i > 0; i--) {
            document.getElementById('daysList').innerHTML += `<li className='inactive'>${lastDayofPrevMonth
                - i+1}</li>`
        }
        for (let i = 1; i <= daysNumber; i++) {
            let currentDay = i===date.getDate() && currentYear === date.getFullYear() && currentMonth===date.getMonth()?'active':''
            // console.log(currentDay);
            document.getElementById('daysList').innerHTML += `<li className='${currentDay}'>${i}</li>`
            // console.log(`<li className='${currentDay}'>${i}</li>`);
        }
        for (let i = lastDayofMonth; i < 6 ; i++) {
            document.getElementById('daysList').innerHTML += `<li className=''>${(i-lastDayofMonth+1)}</li>`
        }
        console.log(currentMonth);
        console.log(currentYear);
    }
    
    useEffect(() => {
        renderCalendar()
    
    },[])
    
    document.querySelectorAll('.icon').forEach(icon => {
        // console.log(icon);
        icon.addEventListener('click', ()=>{
            if (icon.id==='prev') {
                // console.log(icon);
                if (currentMonth==0) {
                    let newYear = Number(currentYear)-1;
                    setcurrentYear(newYear)
                    setcurrentMonth(11)
                    // setdate(new Date(currentYear, currentMonth))
                    // currentYear = date.getFullYear();
                    // currentMonth = date.getMonth();

                    renderCalendar()
                } else{
                    let newMonth = currentMonth(currentMonth)-1;
                    setcurrentMonth(newMonth)
                    // renderCalendar()
                }
            } else if (icon.id==='next') {
                // console.log(icon);
                if (currentMonth==11) {
                    let newYear = Number(currentYear)+1;
                    setcurrentYear(newYear)
                    setcurrentMonth(0)
                    // renderCalendar()
                    // setdate(new Date(currentYear, currentMonth))
                } else {
                    let newMonth = Number(currentMonth)+1;
                    setcurrentMonth(newMonth)
                    // renderCalendar()
                }
            }// } else{
                // renderCalendar()
            // }
            // console.log(currentMonth)
            // console.log(currentYear)
        })
    });
  return (
    <>
        <div className='StudentCalendar mx-auto my-auto border border-2 topSpace'>
            <header className='d-flex justify-content-between px-5'>
                <h3 id='header'>September 23</h3>
                <span>
                    <i className='icon mx-2' id='prev'>&#10094;</i>
                    <i className='icon mx-2' id='next'>&#10095;</i>
                </span>
            </header>
            <div className="calendar w-100">
                <div className="weeks">
                    <ul>
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                    </ul>
                </div>
                <div className="days">
                    <ul id='daysList'>
                        
                    </ul>
                </div>
                
            </div>
        </div>
        
    </>
  )
}

export default StudentCalendar