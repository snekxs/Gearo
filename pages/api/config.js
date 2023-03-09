import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ridzyuyhihrriayeweqw.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpZHp5dXloaWhycmlheWV3ZXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4OTI5NTUsImV4cCI6MTk5MDQ2ODk1NX0.dNloclNcqXm6V_w1TJ19RV3PXRSjOY03DXNfdFVhfRU";
const supabase = createClient(supabaseUrl, supabaseKey);


export default async function handler(req, res) {
    await supabase
        .from("maintenance")
        .select("*")
        .then((response) => {
            if (response.data.length === 0) {
                res.status(404).json({ message: "Config Not Found" });
            } else {
                res.status(200).json(response.data);
            }
        })
        .catch((error) => {
            console.log("error", error);
        });
}