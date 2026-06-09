import Container from '@/components/container';
import { sql } from '@vercel/postgres';
import Link from 'next/link';

// این بخش باعث می‌شود صفحه همیشه آخرین داده‌ها را از دیتابیس بگیرد و کش نکند
export const revalidate = 0;

async function BlogsPage() {
    // گرفتن مستقیم داده‌ها از دیتابیس در سمت سرور
    const { rows: articles } = await sql`SELECT * FROM blogs ORDER BY created_at DESC;`;

    return (
        <Container>
            <h1 className="text-3xl font-bold my-8 text-right" dir="rtl">لیست مقالات</h1>
            <div className="grid gap-4" dir="rtl">
                {articles.length === 0 ? (
                    <p className="text-center text-gray-500">هنوز مقاله‌ای ثبت نشده است.</p>
                ) : (
                    articles.map((article) => (
                        <div key={article.id} className="border p-4 rounded shadow-sm text-right bg-white">
                            <h2 className="text-xl font-bold">{article.title}</h2>
                            <p className="text-gray-600 my-2">
                                {article.description}
                            </p>
                            <Link 
                                href={`/blogs/${article.id}`} 
                                className="text-blue-500 hover:underline block mt-2"
                            >
                                ادامه مطلب
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </Container>
    );
}

export default BlogsPage;
