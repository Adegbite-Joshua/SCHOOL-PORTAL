import React from 'react'

const ReceiverMessage = ({message, time}) => {
  return (
    <>
        <div class="container1">
            <img src="/vite.svg" alt="Avatar" />
            <p>{message}</p>
            <span class="time-right1">{time}</span>
        </div>
    </>
  )
}

export default ReceiverMessage

