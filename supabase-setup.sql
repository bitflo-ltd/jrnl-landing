-- Supabase Database Setup for JRNL Waitlist
-- Run this in your Supabase SQL Editor

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  role TEXT,
  agree_to_updates BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist (email);

-- Create an index on created_at for ordering
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist (created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for adding new waitlist entries)
CREATE POLICY "Allow public inserts on waitlist" ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow select for counting (optional, for displaying waitlist count)
CREATE POLICY "Allow public select on waitlist" ON waitlist
  FOR SELECT
  TO public
  USING (true);

-- Create a function to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for analytics (counts by role)
CREATE OR REPLACE VIEW waitlist_analytics AS
SELECT 
  role,
  COUNT(*) as count,
  DATE_TRUNC('day', created_at) as signup_date
FROM waitlist 
GROUP BY role, DATE_TRUNC('day', created_at)
ORDER BY signup_date DESC;