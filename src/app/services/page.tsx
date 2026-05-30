import Link from "next/link"
import { submitServiceInquiry } from "@/lib/actions"

const serviceList = [
  {
    title: "Distribusi & Logistik",
    desc: "Jaringan distribusi nasional dengan armada khusus dan sistem manajemen logistik yang memastikan pengiriman tepat waktu dan aman.",
    features: ["Pengiriman terjadwal", "Armada khusus bahan kimia", "Tracking real-time", "Dokumentasi lengkap"],
  },
  {
    title: "Konsultasi Teknis",
    desc: "Tim teknis berpengalaman siap membantu Anda memilih produk yang tepat dan memberikan solusi untuk tantangan industri Anda.",
    features: ["Pemilihan produk", "Analisis kebutuhan", "Rekomendasi formulasi", "Troubleshooting"],
  },
  {
    title: "Quality Control",
    desc: "Laboratorium dan sistem QC untuk memastikan setiap produk memenuhi spesifikasi dan standar yang dijanjikan.",
    features: ["Pengujian kemurnian", "Sertifikat analisis", "Batch tracking", "Standar internasional"],
  },
  {
    title: "Dukungan Purna Jual",
    desc: "Layanan berkelanjutan setelah pembelian untuk memastikan kepuasan dan kelancaran operasional Anda.",
    features: ["Technical support", "Garansi kualitas", "Penggantian produk", "Pelatihan tim"],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Layanan</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">Solusi lengkap dari distribusi hingga dukungan teknis untuk bisnis Anda.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide space-y-16">
          {serviceList.map((svc, i) => (
            <div key={svc.title} className="grid gap-8 md:grid-cols-2 items-center">
              {i % 2 === 0 && <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/5 to-primary-light/5 flex items-center justify-center text-6xl">⚙️</div>}
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">{svc.title}</h2>
                <p className="mt-3 text-neutral-600">{svc.desc}</p>
                <ul className="mt-4 space-y-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-primary">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              {i % 2 !== 0 && <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/5 to-primary-light/5 flex items-center justify-center text-6xl">⚙️</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Service Booking */}
      <section className="bg-neutral-50 py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-neutral-900 text-center">Booking Layanan</h2>
            <p className="mt-2 text-center text-neutral-500">Pesan layanan konsultasi atau kunjungan tim teknis kami.</p>
            <form action={submitServiceInquiry} className="mt-8 space-y-5 rounded-xl border border-neutral-200 bg-white p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">Nama *</label>
                  <input name="name" required className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">Email *</label>
                  <input name="email" type="email" required className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">Perusahaan</label>
                  <input name="company" className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">Telepon</label>
                  <input name="phone" className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-neutral-700">Jenis Layanan *</label>
                <select name="service_type" required className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20">
                  <option value="">Pilih layanan...</option>
                  <option value="konsultasi">Konsultasi Teknis</option>
                  <option value="pengiriman">Pengiriman Khusus</option>
                  <option value="qc">Quality Control</option>
                  <option value="training">Pelatihan Tim</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-neutral-700">Pesan</label>
                <textarea name="message" rows={4} className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"></textarea>
              </div>
              <button type="submit" className="btn-primary">Kirim Permintaan</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
