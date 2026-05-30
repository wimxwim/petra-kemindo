import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Tentang Petra Kemindo</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">Mitra terpercaya dalam distribusi bahan kimia industri sejak 2010.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-neutral-900">Cerita Kami</h2>
            <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
              <p>Petra Kemindo berdiri pada tahun 2010 dengan visi menjadi mitra terpercaya dalam penyediaan solusi kimia industri di Indonesia. Berawal dari sebuah tim kecil yang memahami betul tantangan industri kimia lokal, kami tumbuh menjadi salah satu distributor terkemuka dengan jangkauan nasional.</p>
              <p>Selama lebih dari 15 tahun, kami telah membangun hubungan kuat dengan produsen kimia terkemuka global dan mengembangkan jaringan distribusi yang mencakup seluruh wilayah Indonesia. Komitmen kami terhadap kualitas, keamanan, dan kepuasan pelanggan menjadi fondasi setiap langkah bisnis kami.</p>
              <p>Kami percaya bahwa bahan kimia berkualitas adalah fondasi produk berkualitas. Oleh karena itu, setiap produk yang kami distribusikan melewati proses kontrol kualitas yang ketat dan dilengkapi dengan dokumentasi lengkap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-50 py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-neutral-900">Nilai Perusahaan</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                { title: "Integritas", desc: "Kejujuran dan transparansi dalam setiap transaksi dan hubungan bisnis." },
                { title: "Kualitas", desc: "Standar kualitas tertinggi dalam setiap produk dan layanan yang kami berikan." },
                { title: "Inovasi", desc: "Terus beradaptasi dengan perkembangan teknologi dan kebutuhan industri." },
                { title: "Kemitraan", desc: "Membangun hubungan jangka panjang yang saling menguntungkan dengan seluruh stakeholder." },
              ].map((v) => (
                <div key={v.title} className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-neutral-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-neutral-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid gap-6 text-center md:grid-cols-4">
            {[{ n: "2010", l: "Tahun Berdiri" }, { n: "500+", l: "Produk Tersedia" }, { n: "20+", l: "Kota Coverage" }, { n: "1000+", l: "Pelanggan Terpercaya" }].map((s) => (
              <div key={s.l} className="rounded-xl border border-neutral-200 bg-white p-6">
                <div className="text-3xl font-bold text-primary">{s.n}</div>
                <div className="mt-1 text-sm text-neutral-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white text-center">
        <div className="container-wide">
          <h2 className="text-2xl font-bold">Siap bekerja sama dengan kami?</h2>
          <p className="mt-2 text-white/80">Hubungi tim kami untuk informasi lebih lanjut.</p>
          <Link href="/contact" className="btn-accent mt-6 inline-flex">Hubungi Kami</Link>
        </div>
      </section>
    </>
  )
}
