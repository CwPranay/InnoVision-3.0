import { createClient } from '@supabase/supabase-js';

// Debug: Log all environment variables
console.log('All env vars:', import.meta.env);
console.log('VITE_SUPABASE_URL from env:', import.meta.env.VITE_SUPABASE_URL);
console.log('VITE_SUPABASE_ANON_KEY from env:', import.meta.env.VITE_SUPABASE_ANON_KEY);

// Get environment variables with fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xoodmjzorcqqzmbhpbuy.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhvb2RtanpvcmNxcXptYmhwYnV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzMTU2NTksImV4cCI6MjA4Mzg5MTY1OX0.TxDVV8qtzsRPIeTiwHxFEyl8H647KV7hDUqpbReXIUE';

// Debug logging
console.log('Final Supabase URL:', supabaseUrl);
console.log('Final Supabase Key:', supabaseKey ? 'EXISTS (length: ' + supabaseKey.length + ')' : 'MISSING');

// Validate required values
if (!supabaseUrl || supabaseUrl === 'undefined' || supabaseUrl === '') {
  console.error('VITE_SUPABASE_URL is missing, undefined, or empty');
  throw new Error('Missing Supabase URL. Please check your environment variables.');
}

if (!supabaseKey || supabaseKey === 'undefined' || supabaseKey === '') {
  console.error('VITE_SUPABASE_ANON_KEY is missing, undefined, or empty');
  throw new Error('Missing Supabase Anon Key. Please check your environment variables.');
}

console.log('Creating Supabase client...');
export const supabase = createClient(supabaseUrl, supabaseKey);
console.log('Supabase client created successfully!');
