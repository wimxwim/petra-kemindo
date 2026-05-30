import { notFound } from "next/navigation"
import { getBlogPost } from "@/lib/actions"
import Link from "next/link"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) notFound()

  return (
    <div className="container-wide py-16">
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-primary">← Kembali ke Blog</Link>
      <article className="mx-auto max-w-3xl">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-neutral-400">
          {post.petra_blog_categories && <span className="rounded-full bg-primary/5 px-2.5 py-0.5 font-medium text-primary">{post.petra_blog_categories.name}</span>}
          {post.published_at && <span>{new Date(post.published_at).toLocaleDateString("id-ID")}</span>}
          {post.author && <span>Oleh {post.author}</span>}
        </div>
        <h1 className="text-3xl font-bold text-neutral-900 md:text-4xl">{post.title}</h1>
        {post.excerpt && <p className="mt-4 text-lg text-neutral-500">{post.excerpt}</p>}
        <div className="mt-10 aspect-[16/9] rounded-2xl bg-gradient-to-br from-primary/10 to-primary-light/10 flex items-center justify-center text-6xl">📄</div>
        <div className="mt-10 leading-relaxed text-neutral-600 whitespace-pre-line">{post.content}</div>
      </article>
    </div>
  )
}
