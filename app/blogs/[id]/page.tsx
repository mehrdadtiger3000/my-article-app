import Container from '@/components/container'
import data from '@/database/db.json' 

interface IArticleProps {
    params: Promise<{ id: string }>,
}

// این تابع برای خروجی استاتیک (GitHub Pages) حیاتی است
export async function generateStaticParams() {
    return data.articles.map((article: any) => ({
        id: article.id.toString(),
    }));
}

async function Article(props: IArticleProps) {
    const { id } = await props.params;
    
    // پیدا کردن مقاله مورد نظر از فایل JSON
    const article = data.articles.find((item: any) => item.id.toString() === id);

    if (!article) {
        return (
            <Container>
                <div className="py-10 text-center">مقاله پیدا نشد.</div>
            </Container>
        );
    }

    return (
        <Container>
            <div className="py-10 text-right" dir="rtl">
                <h1 className="text-3xl font-bold my-4">  
                    {article.title} 
                </h1>
                <hr className="my-4" />
                <p className="text-lg leading-relaxed whitespace-pre-line"> 
                    {article.description}
                </p>
            </div>
        </Container>
    )
}

export default Article
