import { createClient } from '@supabase/supabase-js';
import key from './key.js';
import axios from 'axios';
import cors from 'cors';
import express from 'express';
import { getAccData } from './controller.js';
import { insertDataFromJSON } from './sbadptr.js';
import { getAccDataUsername } from './controller.js';
import { updateRowsWithJson } from './sbadptr.js';
import { getAccDataEmail } from './controller.js';


const app = express();
const port = 3000;
app.use(express.json());

app.get('/acc/get', getAccData);
app.get('/acc/username/:author', cors(), getAccDataUsername);
app.get('/acc/email/:author', cors(), getAccDataEmail);

app.get('/test', cors(), (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });



});
app.post('/acc/post', cors(), async (req, res) => {
    console.log(req.body);
    try {
        const result = await insertDataFromJSON(req.body);
        console.log(result);
        res.status(201).json({ message: 'Data inserted successfully'});
    } catch (error) {
        console.error('Error handling POST request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.patch('/acc/update', cors(), async (req, res) => {
    console.log(req.body);
    try {
        const result = await updateRowsWithJson(req.body);
        console.log(result);
        res.status(201).json({ message: 'Data updated successfully' });
    } catch (error) {
        console.error('Error handling POST request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}); 