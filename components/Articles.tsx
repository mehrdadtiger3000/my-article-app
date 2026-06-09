"use client";
import { useEffect, useState } from "react";
import Container from "./container";

function Articles() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    // گرفتن لیست مقالات از API که ساختیم
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.blogs) {
          setBlogs(data.blogs);
        }
      })
      .catch((err) => console.error("خطا در دریافت مقالات:", err));
  }, []);

  return (
    <Container>
      <div className="flex flex-col gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="shadow p-4 border rounded">
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p>{blog.description}</p>
            <p className="text-sm text-gray-400 mt-2">
              تاریخ: {new Date(blog.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Articles;
