import Header from "../layout/Header";
import Footer from "../layout/Footer";

interface BlogPostProps {
  post: {
    title: string;
    date: string;
    category: string;
    content: string;
    author: {
      name: string;
      role: string;
      image: string;
    };
  };
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article className="container py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-sm font-medium text-primary">
              {post.category}
            </div>
            <h1 className="mt-2 text-4xl font-bold tracking-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center space-x-4">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="h-12 w-12 rounded-full"
              />
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">
                  {post.author.role}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{post.date}</div>
            </div>
            <div className="prose prose-slate mt-12 max-w-none">
              {post.content}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
