import { supabase } from "@/lib/supabase";

export function useUpdateUProBalance() {

    const updateBalance = async (upro_gold: number, userId: string) => {
        const { data, error } = await supabase
        .from("users")
        .update({ upro_gold })
        .eq("id", userId)
        .select()
        .single();

        if (error) throw error;

        return data;
    }
    
    return {
        updateBalance
    }
}