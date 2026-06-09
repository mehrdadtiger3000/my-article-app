import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (<div className='my-5 '>
    <div className='  shadow p-4 m-4'>
        <Link className=' inline-block shadow p-4 mr-3 mb-2' href="/">Home</Link>
        <Link href="/blogs" className=' mr-3 shadow p-4'>blogs</Link>
        <Link href="/create-blog" className='shadow p-4'  >Create</Link>

    </div >
    </div>
  )
}

export default  Navbar