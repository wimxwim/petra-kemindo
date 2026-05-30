import { notFound } from "next/navigation"
import { getProduct } from "@/lib/actions"
import Link from "next/link"

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProduct(slug)
  if (!product) notFound()

  return (
    <div className="container-wide py-16">
      <Link href="/products" className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-primary">← Kembali ke Produk</Link>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex aspect-square items-center justify-center rounded-2xl bg-neutral-50 text-6xl">🧪</div>
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            {product.petra_categories && <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">{product.petra_categories.name}</span>}
            {product.featured && <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-amber-700">Featured</span>}
          </div>
          <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
          {product.grade && <p className="mt-2 text-lg text-neutral-500">Grade: {product.grade}</p>}
          <p className="mt-6 leading-relaxed text-neutral-600">{product.description}</p>
          {product.applications && (
            <div className="mt-8">
              <h3 className="font-semibold text-neutral-900">Aplikasi</h3>
              <p className="mt-1 text-neutral-600">{product.applications}</p>
            </div>
          )}
          <div className="mt-8 flex gap-4">
            <Link href="/contact" className="btn-primary">Tanyakan Produk Ini</Link>
            <Link href="/contact?catalogue=1" className="btn-outline">Request Katalog</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
