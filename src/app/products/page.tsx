import Link from "next/link"
import { getCategories, getProducts } from "@/lib/actions"

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()])

  return (
    <div className="container-wide py-16">
      <div className="mb-10">
        <h1 className="section-title">Produk</h1>
        <p className="section-subtitle">Berbagai bahan kimia industri berkualitas tinggi untuk kebutuhan bisnis Anda.</p>
      </div>

      {/* Categories */}
      <div className="mb-10 flex flex-wrap gap-2">
        <Link href="/products" className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white">Semua</Link>
        {categories.map((cat: any) => (
          <Link key={cat.id} href={`/products?category=${cat.slug}`} className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:border-primary/30 hover:text-primary">{cat.name}</Link>
        ))}
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-16 text-center">
          <p className="text-lg text-neutral-500">Belum ada produk. Data akan segera ditambahkan.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p: any) => (
            <Link key={p.id} href={`/products/${p.slug}`} className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-2xl text-primary">🧪</div>
              <h3 className="font-semibold text-neutral-900 group-hover:text-primary">{p.name}</h3>
              {p.grade && <p className="mt-1 text-sm text-neutral-400">Grade: {p.grade}</p>}
              <p className="mt-2 line-clamp-2 text-sm text-neutral-500">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.petra_categories && <span className="rounded-full bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary">{p.petra_categories.name}</span>}
                {p.featured && <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-amber-700">Featured</span>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
