import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Check if we have valid Supabase credentials
const hasValidCredentials = supabaseUrl !== 'https://placeholder.supabase.co' && supabaseAnonKey !== 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our waitlist table
export interface WaitlistEntry {
  id?: string
  email: string
  role?: string
  agree_to_updates: boolean
  created_at?: string
  updated_at?: string
}

// Function to add waitlist entry
export const addWaitlistEntry = async (data: Omit<WaitlistEntry, 'id' | 'created_at' | 'updated_at'>) => {
  if (!hasValidCredentials) {
    console.warn('Supabase credentials not configured. Skipping database operation.')
    return { id: 'mock-id', ...data, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
  }

  const { data: result, error } = await supabase
    .from('waitlist')
    .insert([data])
    .select()
    .single()

  if (error) {
    throw error
  }

  return result
}

// Function to check if email already exists
export const checkEmailExists = async (email: string) => {
  if (!hasValidCredentials) {
    console.warn('Supabase credentials not configured. Returning false for email check.')
    return false
  }

  const { data, error } = await supabase
    .from('waitlist')
    .select('email')
    .eq('email', email)
    .single()

  if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
    throw error
  }

  return !!data
}

// Function to get waitlist count
export const getWaitlistCount = async () => {
  if (!hasValidCredentials) {
    console.warn('Supabase credentials not configured. Returning placeholder count.')
    return 500 // Return a placeholder count for development
  }

  const { count, error } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })

  if (error) {
    throw error
  }

  return count || 0
}