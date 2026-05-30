import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Petra Kemindo — Solusi Kimia Industri Terpercaya",
  description: "Distributor bahan kimia industri terkemuka di Indonesia. Menyediakan solusi kimia berkualitas untuk berbagai sektor industri.",
}

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/products", label: "Produk" },
  { href: "/services", label: "Layanan" },
  { href: "/industries", label: "Industri" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "Tentang" },
  { href: "/contact", label: "Kontak" },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${jakarta.className} flex min-h-screen flex-col`}>
        <nav className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur-sm">
          <div className="container-wide flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">PK</div>
              <span className="text-lg font-bold text-primary">Petra Kemindo</span>
            </Link>
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-primary">{l.label}</Link>
              ))}
              <Link href="/contact" className="btn-primary ml-3 !py-2 !px-4 text-sm">Hubungi Kami</Link>
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-neutral-200 bg-neutral-50">
          <div className="container-wide py-12">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">PK</div>
                  <span className="font-bold text-primary">Petra Kemindo</span>
                </div>
                <p className="text-sm text-neutral-500">Mitra terpercaya Anda dalam penyediaan solusi kimia industri berkualitas tinggi sejak 2010.</p>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-800">Produk</h3>
                <ul className="space-y-2 text-sm text-neutral-500">
                  <li><Link href="/products" className="hover:text-primary">Solvent</Link></li>
                  <li><Link href="/products" className="hover:text-primary">Aditif</Link></li>
                  <li><Link href="/products" className="hover:text-primary">Bahan Baku</Link></li>
                  <li><Link href="/products" className="hover:text-primary">Katalis</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-800">Perusahaan</h3>
                <ul className="space-y-2 text-sm text-neutral-500">
                  <li><Link href="/about" className="hover:text-primary">Tentang</Link></li>
                  <li><Link href="/services" className="hover:text-primary">Layanan</Link></li>
                  <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-primary">Kontak</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-800">Kontak</h3>
                <ul className="space-y-2 text-sm text-neutral-500">
                  <li>Jl. Industri Raya No. 123</li>
                  <li>Jakarta, Indonesia</li>
                  <li>+62 21 1234 5678</li>
                  <li>info@petrakemindo.co.id</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-neutral-200 pt-6 text-center text-sm text-neutral-400">
              &copy; {new Date().getFullYear()} Petra Kemindo. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
