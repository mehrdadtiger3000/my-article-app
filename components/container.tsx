import React, { Children } from 'react'

function Container({children}: {children:React.ReactNode}) {
  return (
    <div className='container mx-auto px-4'>
        {children}
    </div>
  )
}

export default Container