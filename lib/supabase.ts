import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

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
  const { count, error } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })

  if (error) {
    throw error
  }

  return count || 0
}