import { createClient } from "@supabase/supabase-js";
import { supabase } from "@/components/helpers/Supabase";


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