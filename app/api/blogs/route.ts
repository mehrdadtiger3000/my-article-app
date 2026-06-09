import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// متد GET برای گرفتن لیست مقالات
export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM blogs ORDER BY created_at DESC;`;
    return NextResponse.json({ blogs: rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "خطا در دریافت مقالات" }, { status: 500 });
  }
}

// متد POST که قبلاً داشتید (به همان شکل باقی بماند)
export async function POST(request: Request) {
  try {
    const { title, description } = await request.json();
    await sql`INSERT INTO blogs (title, description) VALUES (${title}, ${description});`;
    return NextResponse.json({ message: "موفق" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "خطا" }, { status: 500 });
  }
}
