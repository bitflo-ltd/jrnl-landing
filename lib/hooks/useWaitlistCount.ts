"use client";

import { useState, useEffect } from 'react';
import { getWaitlistCount } from '@/lib/supabase';

export function useWaitlistCount() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const waitlistCount = await getWaitlistCount();
        setCount(waitlistCount);
      } catch (err) {
        console.error('Error fetching waitlist count:', err);
        setError('Failed to load waitlist count');
        // Fallback to a placeholder count
        setCount(500);
      } finally {
        setLoading(false);
      }
    }

    fetchCount();
  }, []);

  return { count, loading, error };
}