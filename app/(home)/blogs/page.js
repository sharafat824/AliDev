    import Image from "next/image";
    import Link from "next/link";

    export default function Blogs() {
        return (
        <div className="container mx-auto">
            {/* Blog Header */}
            <section className="section">
            <div className="container mx-auto px-6 lg:px-16 text-center">
                <h1 className="section-title">My Tech Blog</h1>
                <p className="section-subtitle">
                Sharing knowledge about web development, programming tips, and tech insights
                </p>
            </div>
            </section>
    
            {/* Featured Post */}
            <section className="pb-20">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="theme-bg rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                <Image
                    src="/images/blog/featured-post.jpg"
                    alt="Featured Post"
                    width={1200}
                    height={630}
                    className="w-full h-64 object-cover"
                />
                <div className="p-8">
                    <span className="theme-badge">
                    Featured
                    </span>
                    <h2 className="mt-4 text-3xl font-bold theme-color">
                    Building Scalable Applications with Next.js
                    </h2>
                    <p className="mt-4 text-lg theme-color">
                    A deep dive into modern web architecture and performance optimization techniques...
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <Image
                        src="/images/avators/profile.png"
                        alt="Author"
                        width={40}
                        height={40}
                        className="rounded-full"
                        />
                        <span className="ml-3 theme-color">Ali · 15 min read</span>
                    </div>
                    <Link 
                        href="/blog/building-scalable-apps" 
                        className="btn-primary"
                    >
                        Read Article
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </section>
    
            {/* Blog Grid */}
            <section className="section">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid-cols-responsive gap-8">
                {/* Blog Post 1 */}
                <article className="card ">
                    <Image
                    src="/images/blog/post-1.jpg"
                    alt="State Management"
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                    <span className="theme-badge">Frontend</span>
                    <h3 className="mt-2 text-xl font-semibold theme-color">
                        Modern State Management in React
                    </h3>
                    <p className="mt-2 theme-color">
                        Exploring Zustand and Jotai as modern alternatives to Redux...
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">May 15, 2024</span>
                        <Link 
                        href="/blog/react-state-management" 
                        className="blog-link"
                        >
                        Read →
                        </Link>
                    </div>
                    </div>
                </article>
    
                {/* Blog Post 2 */}
                <article className="card ">
                    <Image
                    src="/images/blog/post-2.jpg"
                    alt="API Security"
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                    <span className="theme-badge">Backend</span>
                    <h3 className="mt-2 text-xl font-semibold theme-color">
                        REST API Security Best Practices
                    </h3>
                    <p className="mt-2 theme-color">
                        Essential security measures for modern API development...
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">May 10, 2024</span>
                        <Link 
                        href="/blog/api-security" 
                        className="blog-link"
                        >
                        Read →
                        </Link>
                    </div>
                    </div>
                </article>
    
                {/* Blog Post 3 */}
                <article className="card ">
                    <Image
                    src="/images/blog/post-3.jpg"
                    alt="Web Components"
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                    <span className="theme-badge">Web Components</span>
                    <h3 className="mt-2 text-xl font-semibold theme-color">
                        Building UI Libraries with Web Components
                    </h3>
                    <p className="mt-2 theme-color">
                        Creating framework-agnostic UI components using Lit...
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">May 5, 2024</span>
                        <Link 
                        href="/blog/web-components" 
                        className="blog-link"
                        >
                        Read →
                        </Link>
                    </div>
                    </div>
                </article>
                </div>
            </div>
            </section>
    
            {/* Newsletter CTA */}
            <section className="section">
            <div className="container mx-auto px-6 lg:px-16 text-center">
                <div className="theme-bg rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold theme-color mb-4">
                    Subscribe to My Newsletter
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                    Get monthly updates about web development trends, tutorials, and exclusive content
                </p>
                <form className="max-w-md mx-auto flex gap-4">
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="input flex-1"
                    />
                    <button type="submit" className="btn-primary">
                    Subscribe
                    </button>
                </form>
                </div>
            </div>
            </section>
        </div>
        );
    }