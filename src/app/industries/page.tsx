import Link from "next/link"
import { getProducts } from "@/lib/actions"

const industries = [
  { name: "Elektronik", desc: "Bahan kimia berkualitas tinggi untuk manufaktur komponen elektronik dan semikonduktor.", icon: "🔌" },
  { name: "Furniture", desc: "Solusi perekat, finishing, dan pelapis untuk industri furniture modern.", icon: "🪑" },
  { name: "Otomotif", desc: "Produk kimia untuk manufaktur, perawatan, dan finishing kendaraan.", icon: "🚗" },
  { name: "Konstruksi", desc: "Bahan baku dan aditif untuk konstruksi bangunan dan infrastruktur.", icon: "🏗️" },
  { name: "Farmasi", desc: "Bahan baku farmasi dengan standar kemurnian dan sertifikasi lengkap.", icon: "💊" },
  { name: "Pertanian", desc: "Produk kimia pertanian untuk meningkatkan produktivitas dan kualitas hasil panen.", icon: "🌱" },
  { name: "Makanan & Minuman", desc: "Bahan tambahan pangan dan pengolahan dengan standar food grade.", icon: "🍜" },
  { name: "Tekstil", desc: "Solusi pewarnaan, finishing, dan pemrosesan tekstil dari hulu ke hilir.", icon: "🧵" },
]

export default async function IndustriesPage() {
  const products = await getProducts()

  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Industri</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">Pengalaman melayani berbagai sektor industri dengan solusi yang disesuaikan.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div key={ind.name} className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 text-3xl">{ind.icon}</div>
                <h3 className="font-semibold text-neutral-900">{ind.name}</h3>
                <p className="mt-2 text-sm text-neutral-500">{ind.desc}</p>
                <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Hubungi kami →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
