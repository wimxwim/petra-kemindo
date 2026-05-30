import { submitContact, requestCatalogue, submitServiceInquiry } from "@/lib/actions"

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Hubungi Kami</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">Tim kami siap membantu Anda. Isi form di bawah atau hubungi langsung.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold text-neutral-900">Alamat</h3>
                <p className="mt-2 text-sm text-neutral-500">Jl. Industri Raya No. 123<br />Jakarta, Indonesia</p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold text-neutral-900">Telepon</h3>
                <p className="mt-2 text-sm text-neutral-500">+62 21 1234 5678<br />+62 812 3456 7890</p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold text-neutral-900">Email</h3>
                <p className="mt-2 text-sm text-neutral-500">info@petrakemindo.co.id<br />sales@petrakemindo.co.id</p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold text-neutral-900">Jam Operasional</h3>
                <p className="mt-2 text-sm text-neutral-500">Senin - Jumat: 08:00 - 17:00<br />Sabtu: 08:00 - 13:00</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="rounded-xl border border-neutral-200 bg-white p-8">
                <h2 className="text-2xl font-bold text-neutral-900">Kirim Pesan</h2>
                <p className="mt-2 text-neutral-500">Isi form di bawah dan tim kami akan merespon dalam 1x24 jam.</p>
                <form action={submitContact} className="mt-8 space-y-5">
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
                    <label className="mb-1.5 block text-sm font-medium text-neutral-700">Pesan *</label>
                    <textarea name="message" required rows={5} className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"></textarea>
                  </div>
                  <button type="submit" className="btn-primary">Kirim Pesan</button>
                </form>
              </div>

              {/* Catalogue Request */}
              <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-8">
                <h2 className="text-2xl font-bold text-neutral-900">Download Katalog</h2>
                <p className="mt-2 text-neutral-500">Dapatkan katalog produk lengkap Petra Kemindo.</p>
                <form action={requestCatalogue} className="mt-8 space-y-5">
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
                  <button type="submit" className="btn-primary">Request Katalog</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
