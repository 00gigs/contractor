
import { createClient } from '@supabase/supabase-js'
export const  createClient=()=> {
    createClient(
         supabaseUrl = process.env.SUPABASE_URL,
         supabaseKey = process.env.SUPABASE_ANON_KEY
    )
}