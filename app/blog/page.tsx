export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-lg mb-12">Expert cleaning advice and insights</p>
      <div className="grid md:grid-cols-2 gap-8">
        
        <article className="border rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4">Top 10 cleaning tips for Seattle homeowners</h2>
          <p className="text-gray-600 mb-4">Published by Test Cleaning Seattle</p>
          <a href="/blog/post-1" className="text-blue-600 hover:underline">Read more →</a>
        </article>
        
        <article className="border rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4">How to choose the best cleaning service</h2>
          <p className="text-gray-600 mb-4">Published by Test Cleaning Seattle</p>
          <a href="/blog/post-2" className="text-blue-600 hover:underline">Read more →</a>
        </article>
        
        <article className="border rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4">cleaning trends in 2025</h2>
          <p className="text-gray-600 mb-4">Published by Test Cleaning Seattle</p>
          <a href="/blog/post-3" className="text-blue-600 hover:underline">Read more →</a>
        </article>
        
        <article className="border rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4">DIY vs Professional cleaning: What you need to know</h2>
          <p className="text-gray-600 mb-4">Published by Test Cleaning Seattle</p>
          <a href="/blog/post-4" className="text-blue-600 hover:underline">Read more →</a>
        </article>
        
        <article className="border rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4">Ultimate cleaning guide for WA residents</h2>
          <p className="text-gray-600 mb-4">Published by Test Cleaning Seattle</p>
          <a href="/blog/post-5" className="text-blue-600 hover:underline">Read more →</a>
        </article>
        
      </div>
    </div>
  );
}