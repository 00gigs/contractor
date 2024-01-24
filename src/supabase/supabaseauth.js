

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://culwwbltxgukurtjdyng.supabase.co'
const supabaseKey = process.env
const supabase = createClient(supabaseUrl, supabaseKey)