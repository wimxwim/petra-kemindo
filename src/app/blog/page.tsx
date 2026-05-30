import Link from "next/link"
import { getBlogPosts, getBlogCategories } from "@/lib/actions"

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getBlogPosts(), getBlogCategories()])

  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">Artikel dan wawasan seputar industri kimia, tips, dan update terbaru.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          {categories.length > 0 && (
            <div className="mb-10 flex flex-wrap gap-2">
              <Link href="/blog" className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white">Semua</Link>
              {categories.map((cat: any) => (
                <Link key={cat.id} href={`/blog?category=${cat.slug}`} className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:border-primary/30 hover:text-primary">{cat.name}</Link>
              ))}
            </div>
          )}

          {posts.length === 0 ? (
            <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-16 text-center">
              <p className="text-lg text-neutral-500">Belum ada artikel. Konten akan segera hadir.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post: any) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group rounded-xl border border-neutral-200 bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-primary-light/10 flex items-center justify-center text-4xl">📄</div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-2 text-xs text-neutral-400">
                      {post.petra_blog_categories && <span className="rounded-full bg-primary/5 px-2 py-0.5 font-medium text-primary">{post.petra_blog_categories.name}</span>}
                      {post.published_at && <span>{new Date(post.published_at).toLocaleDateString("id-ID")}</span>}
                    </div>
                    <h3 className="font-semibold text-neutral-900 group-hover:text-primary">{post.title}</h3>
                    {post.excerpt && <p className="mt-2 line-clamp-2 text-sm text-neutral-500">{post.excerpt}</p>}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
