import Container from '@/components/container'
import data from '@/database/db.json' 
import Link from 'next/link'

export interface IGetArticles {
    id: number | string;
    title: string;
    description: string;
}

async function BlogsPage() {
    // خواندن داده‌ها مستقیم از فایل JSON (بدون نیاز به fetch و دیتابیس آنلاین)
    const articles = data.articles as IGetArticles[];

    return (
        <Container>
            <h1 className="text-3xl font-bold my-8 text-right" dir="rtl">لیست مقالات</h1>
            <div className="grid gap-4" dir="rtl">
                {articles.map((article) => (
                    <div key={article.id} className="border p-4 rounded shadow-sm text-right">
                        <h2 className="text-xl font-bold">{article.title}</h2>
                        <p className="text-gray-600 my-2">
                            {article.description.substring(0, 100)}...
                        </p>
                        <Link 
                            href={`/blogs/${article.id}`} 
                            className="text-blue-500 hover:underline"
                        >
                            ادامه مطلب
                        </Link>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default BlogsPage
