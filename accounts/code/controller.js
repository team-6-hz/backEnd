import { getData } from './sbadptr.js';
import { getDataUsername } from './sbadptr.js';
import { getDataEmail } from './sbadptr.js';

export async function getAccData(req, res, next) {
  try {
    res.json(await getData());
  } catch (error) {
    next(err);
  }
}
export async function getAccDataUsername(req, res, next) {
  try {
    res.json(await getDataUsername(req.params.author));
  } catch (error) {
    next(err);
  }
}
export async function getAccDataEmail(req, res, next) {
  try {
    res.json(await getDataEmail(req.params.author));
  } catch (error) {
    next(err);
  }
}