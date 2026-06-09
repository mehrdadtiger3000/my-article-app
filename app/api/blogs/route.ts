import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { title, description } = await request.json();

    // اجرای کوئری برای ذخیره در دیتابیس
    await sql`
      INSERT INTO blogs (title, description)
      VALUES (${title}, ${description});
    `;

    return NextResponse.json({ message: "مقاله با موفقیت ایجاد شد" }, { status: 201 });
  } catch (error) {
    console.error("خطای دیتابیس:", error);
    return NextResponse.json({ error: "خطا در ذخیره سازی" }, { status: 500 });
  }
}
