import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xoodmjzorcqqzmbhpbuy.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhvb2RtanpvcmNxcXptYmhwYnV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzMTU2NTksImV4cCI6MjA4Mzg5MTY1OX0.TxDVV8qtzsRPIeTiwHxFEyl8H647KV7hDUqpbReXIUE';

// Debug logging (remove in production)
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key exists:', !!supabaseKey);

// Validate required values
if (!supabaseUrl || supabaseUrl === 'undefined') {
  console.error('VITE_SUPABASE_URL is missing or undefined');
  throw new Error('Missing Supabase URL. Please check your environment variables.');
}

if (!supabaseKey || supabaseKey === 'undefined') {
  console.error('VITE_SUPABASE_ANON_KEY is missing or undefined');
  throw new Error('Missing Supabase Anon Key. Please check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
