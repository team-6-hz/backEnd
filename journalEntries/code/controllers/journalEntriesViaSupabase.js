import { getEntriesData } from "../adapters/supabaseAdapter.js";
import { postEntryData } from "../adapters/supabaseAdapter.js";

export async function getEntries(req, res) {
    try {
        const data = await getEntriesData();
        console.log('data', data);
        res.json(data);
    } catch (err) {
        console.log('err', err);
        res.status(500).send(err);
    }
}

export async function postEntry(req, res) {
    try {
        res.json(await postEntryData(req.body));
    } catch (error) {
        next(err);
    }
}