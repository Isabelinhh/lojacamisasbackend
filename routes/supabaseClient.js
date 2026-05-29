import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fqswufmcrdhufippvihg.supabase.co'
const supabaseAnonKey = 'sb_publishable_TLT1SzwNGGd999nvAvc12g_-ZWGajUC'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)