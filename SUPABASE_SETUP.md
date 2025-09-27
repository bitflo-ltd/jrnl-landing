# JRNL Landing Page - Supabase Setup Guide

## Overview
This guide will help you set up Supabase to store waitlist data for the JRNL landing page. The integration includes real-time waitlist counts and duplicate email prevention.

## Prerequisites
- A Supabase account (free tier is sufficient)
- A Supabase project created

## Step 1: Set up your Supabase project

1. Go to [supabase.com](https://supabase.com) and create an account if you don't have one
2. Create a new project
3. Wait for the project to be fully provisioned

## Step 2: Configure your database

1. In your Supabase dashboard, go to the **SQL Editor**
2. Create a new query and paste the contents of `supabase-setup.sql`
3. Run the query to create the `waitlist` table with proper security policies

The setup includes:
- `waitlist` table with columns for email, name, interests, and marketing preferences
- Row Level Security (RLS) policies for secure access
- Automatic timestamp triggers
- Public read access for count queries
- Secure insert access for form submissions

## Step 3: Get your API credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy your **Project URL** and **Project API keys** → **anon/public** key

## Step 4: Configure environment variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and replace the placeholder values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
   ```

## Step 5: Test the integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the landing page and try submitting the waitlist form
3. Check your Supabase dashboard → **Table Editor** → `waitlist` to see if entries are being stored
4. Verify that the waitlist count updates dynamically on the homepage

## Features Included

### Waitlist Form Integration
- Form validation with React Hook Form
- Duplicate email prevention
- Error handling with user-friendly messages
- Success feedback after submission

### Real-time Count Display
- Dynamic waitlist count in hero section
- Live count updates in social proof section
- Fallback to static numbers if database is unavailable
- Automatic refresh every 30 seconds

### Security Features
- Row Level Security (RLS) enabled
- Public read access only for count queries
- Secure insert policies for form submissions
- Email validation and sanitization

## Troubleshooting

### Environment Variables Not Loading
- Ensure `.env.local` is in your project root
- Restart your development server after adding environment variables
- Check that variable names start with `NEXT_PUBLIC_`

### Database Connection Issues
- Verify your Supabase URL and API key are correct
- Check that your Supabase project is active and not paused
- Ensure RLS policies are properly configured

### Form Submission Errors
- Check browser console for detailed error messages
- Verify the `waitlist` table exists in your database
- Test API connection directly in Supabase dashboard

### Count Not Updating
- Check that the `getWaitlistCount` function has proper permissions
- Verify RLS policy allows public read access for count queries
- Test the count query directly in Supabase SQL editor

## Production Deployment

When deploying to production (Vercel, Netlify, etc.), make sure to:

1. Add your environment variables to your hosting platform's environment settings
2. Ensure your Supabase project is on a paid plan if you expect high traffic
3. Monitor your database usage in the Supabase dashboard

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Review your Supabase logs in the dashboard
3. Verify all setup steps have been completed correctly