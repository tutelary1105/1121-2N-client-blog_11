import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://izfkkkxjvqncdvyzzpkv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6Zmtra3hqdnFuY2R2eXp6cGt2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTQ0MzgzMiwiZXhwIjoyMDE1MDE5ODMyfQ.0tClY1KRBkhViC0bg0EM8TKJn1Pb5t_FHfHOqDs-W0Q";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);