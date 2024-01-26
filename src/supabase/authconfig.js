
import { createClient } from '@supabase/supabase-js'
export const  CreateClient=()=> {
    createClient(
         supabaseUrl = process.env.SUPABASE_URL,
         supabaseKey = process.env.SUPABASE_ANON_KEY
    )
}