import { createClient } from '@supabase/supabase-js';
import { key } from './key.js';


const supabase = createClient("https://qsoobnawmpnqstignbjy.supabase.co", key());

export async function getEntriesData() {
    const { data, error } = await supabase.from('journalEntries').select('*');
    if (error) console.log('query error', error);
    else return data;
}

export async function postEntryData(req) {
    try {
        const jsonData = req;

        const { data, error } = await supabase.from('journalEntries').upsert(jsonData);
        if (error) {
            console.log('error', error);
            return error;
        }
        else {
            console.log('data', data);
            return 201;
        }
    } catch (err) {
        console.log('err', err);
        return err;
    }
}
