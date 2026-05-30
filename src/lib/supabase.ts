import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Public client (RLS-aware)
export function createSupabaseClient() {
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Admin client (bypass RLS — server-only)
export function createAdminClient() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

// Database types (generated from schema)
export type Tables = {
  petra_categories: { id: number; name: string; slug: string; description: string | null; created_at: string }
  petra_functions: { id: number; name: string; slug: string; created_at: string }
  petra_products: { id: number; name: string; slug: string; grade: string | null; category_id: number | null; function_id: number | null; description: string | null; image_url: string | null; applications: string | null; featured: boolean; created_at: string; updated_at: string }
  petra_blog_posts: { id: number; title: string; slug: string; excerpt: string | null; content: string | null; image_url: string | null; category_id: number | null; author: string | null; published: boolean; published_at: string | null; created_at: string; updated_at: string }
  petra_blog_categories: { id: number; name: string; slug: string; created_at: string }
  petra_contact_inquiries: { id: number; name: string; email: string; company: string | null; phone: string | null; message: string; created_at: string }
  petra_catalogue_requests: { id: number; name: string; email: string; company: string | null; phone: string | null; created_at: string }
  petra_service_inquiries: { id: number; name: string; email: string; company: string | null; phone: string | null; service_type: string; message: string | null; created_at: string }
}
