import React from 'react'

const Loader = ({isLoading}) => {
  return (
    <>
    {isLoading && <div className='loader'></div>}
    </>
  )
}

export default Loader