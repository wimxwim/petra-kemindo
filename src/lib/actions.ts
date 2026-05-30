'use server'

import { createAdminClient } from './supabase'
import { redirect } from 'next/navigation'

const supabase = createAdminClient()

// --- Product queries ---
export async function getProducts(options?: { category?: string; function?: string; featured?: boolean }) {
  let query = supabase.from('petra_products').select('*, petra_categories(*), petra_functions(*)')
  if (options?.category) query = query.eq('petra_categories.slug', options.category)
  if (options?.function) query = query.eq('petra_functions.slug', options.function)
  if (options?.featured) query = query.eq('featured', true)
  query = query.order('created_at', { ascending: false })
  const { data } = await query
  return data || []
}

export async function getProduct(slug: string) {
  const { data } = await supabase.from('petra_products').select('*, petra_categories(*), petra_functions(*)').eq('slug', slug).single()
  return data
}

export async function getCategories() {
  const { data } = await supabase.from('petra_categories').select('*').order('name')
  return data || []
}

export async function getFunctions() {
  const { data } = await supabase.from('petra_functions').select('*').order('name')
  return data || []
}

// --- Blog queries ---
export async function getBlogPosts(options?: { category?: string; limit?: number }) {
  let query = supabase.from('petra_blog_posts').select('*, petra_blog_categories(*)').eq('published', true)
  if (options?.category) query = query.eq('petra_blog_categories.slug', options.category)
  query = query.order('published_at', { ascending: false })
  if (options?.limit) query = query.limit(options.limit)
  const { data } = await query
  return data || []
}

export async function getBlogPost(slug: string) {
  const { data } = await supabase.from('petra_blog_posts').select('*, petra_blog_categories(*)').eq('slug', slug).single()
  return data
}

export async function getBlogCategories() {
  const { data } = await supabase.from('petra_blog_categories').select('*').order('name')
  return data || []
}

// --- Form handlers (void return for form action) ---
export async function submitContact(formData: FormData) {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    company: formData.get('company') as string || null,
    phone: formData.get('phone') as string || null,
    message: formData.get('message') as string,
  }
  const { error } = await supabase.from('petra_contact_inquiries').insert(data)
  if (error) throw new Error(error.message)
  redirect('/contact?success=1')
}

export async function requestCatalogue(formData: FormData) {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    company: formData.get('company') as string || null,
    phone: formData.get('phone') as string || null,
  }
  const { error } = await supabase.from('petra_catalogue_requests').insert(data)
  if (error) throw new Error(error.message)
  redirect('/contact?catalogue=success')
}

export async function submitServiceInquiry(formData: FormData) {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    company: formData.get('company') as string || null,
    phone: formData.get('phone') as string || null,
    service_type: formData.get('service_type') as string,
    message: formData.get('message') as string || null,
  }
  const { error } = await supabase.from('petra_service_inquiries').insert(data)
  if (error) throw new Error(error.message)
  redirect('/services?booking=success')
}
