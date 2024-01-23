import { createClient } from "@supabase/supabase-js";
import key from './key.js';
const supabase = createClient("https://lvvmyhlducflakyynoax.supabase.co", key());
export async function getData() {
    const { data, error } = await supabase.from('acc_ms').select('*');
    if (error) console.log('query error', error);
    else return data;
}
export async function insertDataFromJSON(req) {
    try {
        // Read JSON file

        const jsonData = req;
        console.log(jsonData);

        // Insert data into Supabase table
        const { data, error } = await supabase
            .from("acc_ms")
            .upsert(jsonData);

        if (error) {
            throw error;
        }
        else return 201;
        console.log('Data inserted successfully:', data);
    } catch (err) {
        console.error('Error inserting data:', err.message);
    }
}
export async function updateRowsWithJson(updateJson) {
    console.log(updateJson);
    const { data, error } = await supabase
        .from('acc_ms')
        .upsert([updateJson], { onConflict: ['username'], action: 'update' });

    if (error) {
        console.error('Error updating rows:', error.message);
        return null;
    }

    console.log('Rows updated successfully:', data);
    return data;
}

export async function getDataEmail(email) {
    const { data, error } = await supabase.from('acc_ms').select('*').eq('email', email);
    if (error) console.log('query error', error);
    else {
        console.log(data);
        return data;
    }
}
export async function getDataUsername(username) {
    const { data, error } = await supabase.from('acc_ms').select('*').eq('username', username);
    if (error) console.log('query error', error);
    else {
        console.log(data);
        return data;
    }
}