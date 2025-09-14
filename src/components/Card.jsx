import React from 'react'

const Card = ({username}) => {

  return (
    <>
        <h1 className='text-center mt-5 bg-black py-5 text-white font-extrabold text-2xl'>
            This Is Card Component And Using Props
        </h1>
          <h1> Hy I am a Card From {username} </h1> 
    </>
  )
}

export default Card
