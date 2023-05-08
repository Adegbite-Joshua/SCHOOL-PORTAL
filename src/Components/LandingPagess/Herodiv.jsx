import React from 'react'

const Herodiv = ({title, body} = props) => {
  return (
    <>
        <div id='divHero' className='mt-auto text-light text-center'>
            <h3 className='text-center'>{title}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In autem dolores error.</p>
            <button className='btn btn-warning rounded-pill p-1 d-block mx-auto'>LEARN MORE</button>
        </div>
    </>
  )
}

export default Herodiv