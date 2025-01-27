/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dudrufhbqlimxumybvan.supabase.co";
// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://dudrufhbqlimxumybvan.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1ZHJ1ZmhicWxpbXh1bXlidmFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2OTY2NjIsImV4cCI6MjA0MzI3MjY2Mn0.EdM2UCstJAMzM4nzM7B0ewF0JUwmDSRNb4PFq8U9-S8"
);

export default supabase;
