"use client";
import Container from "@/components/container";
import { useState } from "react";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleCreateArticle = () => {
    fetch("http://localhost:8000/articles", {
      method: "post",
      body: JSON.stringify({
        id: Math.floor(Math.random() * 10),
        title: title,
        description: description,
      }),
    });
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
          className="bg-blue-500 mt-4 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>
    </Container>
  );
}

export default CreateArticle;
