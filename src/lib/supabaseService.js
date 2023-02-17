import { createClient } from "@supabase/auth-helpers-sveltekit";
import supabaseConfig from "./config/supabaseConfig";

export default class SupabaseService {
  constructor() {
    this.supabase = createClient(supabaseConfig.supabaseUrl, supabaseConfig.anonKey);
  }

  supabase = null;

  async addProductToSupabase(product) {
    try {
      //Start Time
      const startTime = performance.now();

      //Test
      const { data, error } = await this.supabase.from("products").insert(product).select();

      //Stop Time
      const endTime = performance.now();
      const supabaseAddTime = endTime - startTime;

      //Show Results
      console.log(`Supabase: Product aangemaakt met id: ${data[0].id} en duurde ${supabaseAddTime}MS`);

      //Return
      return supabaseAddTime;
    } catch (error) {
      console.log(error);
    }
  }

  async getProductFromSupabase() {
    try {
      //Start Time
      const startTime = performance.now();

      //Test
      const { data, error } = await this.supabase.from("products").select().limit(1);
      
      //Stop Time
      const endTime = performance.now();
      const supabaseGetTime = endTime - startTime;

      //Show Results
      console.log(data);
      console.log(`Supabase: Product opgehaald en duurde ${supabaseGetTime}MS`);

      //Return
      return supabaseGetTime;
    } catch (error) {
      console.log(error);
    }
  }
}
