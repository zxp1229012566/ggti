export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white/20 mb-4">404</h1>
        <p className="text-white/40 mb-8">页面不存在</p>
        <a href="/" className="px-6 py-3 rounded-xl glass text-white/60 hover:text-white transition-colors">
          返回首页
        </a>
      </div>
    </div>
  );
}
