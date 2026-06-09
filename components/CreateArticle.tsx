"use client";
import Container from "@/components/container";
import { useState } from "react";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false); // برای نمایش وضعیت در حال ارسال

  const handleCreateArticle = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });

      if (res.ok) {
        alert("مقاله با موفقیت ذخیره شد!");
        setTitle(""); // پاک کردن فرم بعد از موفقیت
        setDescription("");
      } else {
        alert("خطایی در ذخیره مقاله رخ داد.");
      }
    } catch (error) {
      console.error("خطا:", error);
      alert("خطای ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="bg-slate-200 py-24 flex flex-col px-8">
        <label>title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-600 p-2 rounded focus:outline-none focus:border-blue-500"
          type="text"
        />
        <label>description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-600 p-2 rounded focus:outline-none focus:border-blue-500"
        ></textarea>
        <button
          onClick={handleCreateArticle}
          disabled={loading}
          className={`mt-4 text-white px-4 py-2 rounded-md transition ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "در حال ارسال..." : "Submit"}
        </button>
      </div>
    </Container>
  );
}

export default CreateArticle;
