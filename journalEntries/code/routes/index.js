import cors from 'cors';
import express from 'express';
import { getEntries } from '../controllers/journalEntriesViaSupabase.js';
import { postEntry } from '../controllers/journalEntriesViaSupabase.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json('hi');
});
// router.get('/example', checkName, responseExample);
// router.post('/example', checkName, updateExample);

router.options('/entries', (req, res, next) => {
  try {
    res.header({
      allow: 'GET, POST, OPTIONS',
      'Content-Type': 'application/json'
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.get('/entries', cors(), getEntries);
router.post('/entries', cors(), postEntry);

export default router;
