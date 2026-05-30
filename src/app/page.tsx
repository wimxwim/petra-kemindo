import Link from "next/link"

const principles = [
  { title: "Kualitas Terjamin", desc: "Setiap produk melewati kontrol kualitas ketat untuk memastikan kemurnian dan konsistensi terbaik." },
  { title: "Mitra Strategis", desc: "Kami bukan sekadar supplier — kami mitra bisnis yang memahami kebutuhan industri Anda." },
  { title: "Logistik Andal", desc: "Jaringan distribusi nasional dengan sistem pengiriman tepat waktu dan aman." },
  { title: "Regulasi & Keamanan", desc: "Kepatuhan penuh terhadap regulasi lingkungan dan keselamatan kerja." },
]

const services = [
  { title: "Konsultasi Teknis", desc: "Tim ahli kami siap membantu memilih produk yang tepat untuk aplikasi Anda." },
  { title: "Pengiriman Khusus", desc: "Layanan logistik untuk bahan kimia dengan penanganan khusus dan terjadwal." },
  { title: "Quality Control", desc: "Pengujian dan sertifikasi produk untuk menjamin standar kualitas." },
  { title: "Dukungan Purna Jual", desc: "Layanan dukungan teknis berkelanjutan setelah pembelian." },
]

const industries = [
  { name: "Elektronik" }, { name: "Furniture" }, { name: "Otomotif" }, { name: "Konstruksi" },
  { name: "Farmasi" }, { name: "Pertanian" }, { name: "Makanan & Minuman" }, { name: "Tekstil" },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="container-wide relative py-24 md:py-36">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent"></span>
              Solusi Kimia Industri Terpercaya
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Mitra Terbaik untuk <span className="text-accent">Kebutuhan Kimia</span> Industri Anda
            </h1>
            <p className="mt-6 text-lg text-white/80 md:text-xl">
              Distributor bahan kimia industri berkualitas tinggi dengan jangkauan nasional, dukungan teknis profesional, dan komitmen mutu tanpa kompromi.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="btn-accent text-base">Lihat Produk</Link>
              <Link href="/contact" className="rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/20">Hubungi Kami</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20">
        <div className="container-wide">
          <div className="text-center">
            <h2 className="section-title">Mengapa Petra Kemindo?</h2>
            <p className="section-subtitle mx-auto max-w-2xl">Kami hadir sebagai mitra strategis yang memahami tantangan industri kimia di Indonesia.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title} className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-xl text-primary">✦</div>
                <h3 className="font-semibold text-neutral-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-neutral-50 py-20">
        <div className="container-wide">
          <div className="text-center">
            <h2 className="section-title">Layanan Kami</h2>
            <p className="section-subtitle mx-auto max-w-2xl">Solusi lengkap dari konsultasi hingga pengiriman untuk memenuhi kebutuhan industri Anda.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <h3 className="font-semibold text-neutral-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-outline">Lihat Semua Layanan</Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container-wide">
          <div className="text-center">
            <h2 className="section-title">Industri yang Kami Layani</h2>
            <p className="section-subtitle mx-auto max-w-2xl">Pengalaman luas di berbagai sektor industri dengan solusi yang disesuaikan.</p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <div key={ind.name} className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary">
                {ind.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-dark to-primary py-20">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Siap Bekerja Sama?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">Hubungi tim kami untuk konsultasi gratis atau permintaan katalog produk lengkap.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-accent text-base">Hubungi Kami</Link>
            <Link href="/products" className="rounded-lg border-2 border-white/30 bg-transparent px-6 py-3 font-semibold text-white transition-all hover:bg-white/10">Download Katalog</Link>
          </div>
        </div>
      </section>
    </>
  )
}
