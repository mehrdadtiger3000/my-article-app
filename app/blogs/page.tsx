import Articles from "@/components/Articles";
import Container from "@/components/container";
import Link from "next/link";
import React from "react";
export interface IGetArticles {
  id?: number,
  title?: string,
  description?: string
}
async function Blogs() {
  const result = await fetch("http://localhost:8000/articles")
  const data= await result.json() as IGetArticles[]
  
  return (
    <Container>
      <div className="grid grid-cols-4 gap-4 py-12">
        {
          data.map((item)=>(
          <Link key={item.id} href={`/blogs/${item.id}`} >
          <Articles key={item.id} {...item } /></Link>
        ))
        }

      </div>
    </Container>
  );
}

export default Blogs;
