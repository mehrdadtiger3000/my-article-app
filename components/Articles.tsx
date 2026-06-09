"use client";
import { useEffect, useState } from "react";
import Container from "./container";

type Blog = {
  id: number;
  title: string;
  description: string;
  created_at: string;
};

function Articles() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");

        if (!res.ok) {
          throw new Error("خطا در دریافت اطلاعات");
        }

        const data = await res.json();
        console.log("داده‌های دریافتی از دیتابیس:", data);

        if (data.blogs) {
          setBlogs(data.blogs);
        }
      } catch (err) {
        console.error("خطا در دریافت مقالات:", err);
        setError("مشکلی در دریافت مقالات پیش آمده");
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <Container>
        <p className="text-center mt-10">در حال بارگذاری مقالات...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p className="text-center text-red-500 mt-10">{error}</p>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex flex-col gap-4">
        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">هنوز مقاله‌ای ثبت نشده است.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="shadow p-4 border rounded bg-white">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p>{blog.description}</p>
              <p className="text-sm text-gray-400 mt-2">
                تاریخ:{" "}
                {blog.created_at
                  ? new Date(blog.created_at).toLocaleDateString("fa-IR")
                  : ""}
              </p>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}

export default Articles;
