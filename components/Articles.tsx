import { IGetArticles } from '@/app/blogs/page'
import React from 'react'
import Container from './container'

function Articles({title, description}:IGetArticles) {
  return (
    <Container>
   <div className="shadow  p-4 ">
        <h2 className='text-2xl font-bold  mb-2'>{title}</h2>
        <p>{description}</p>
    </div>  
    </Container>
    )
}

export default Articles