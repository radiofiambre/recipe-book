import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eouwzfpmctrmhjticlyb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvdXd6ZnBtY3RybWhqdGljbHliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5NDM5NTUsImV4cCI6MjA4NTUxOTk1NX0.oYzXyTGQSjk0cZNkwywb6rpKjKb7DGCFhtyKjEMpp9U'

export const supabase = createClient(supabaseUrl, supabaseKey)