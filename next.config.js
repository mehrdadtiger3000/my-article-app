/** @type {import('next').NextConfig} */
const nextConfig = {
  // این خطوط برای Vercel نباید باشند یا باید غیرفعال شوند
  // output: 'export', 
  // basePath: '/my-article-app',
  
  images: {
    unoptimized: true, // این می‌تواند بماند، اما برای عملکرد بهتر در Vercel می‌توانید حذفش کنید
  },
}

module.exports = nextConfig

