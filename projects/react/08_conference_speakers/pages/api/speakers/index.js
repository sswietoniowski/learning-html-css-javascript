// import { data } from '../../../SpeakerData';
import path from 'path';
import fs from 'fs';

const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export default async function handler(req, res) {
  //   res.status(200).send(JSON.stringify(data, null, 2));
  const jsonFile = path.resolve('./', 'db.json');
  try {
    const data = await readFile(jsonFile, 'utf8');
    await delay(1000);
    const speakers = JSON.parse(data).speakers;
    if (speakers) {
      // file deepcode ignore ContentTypeNoCharset: this is just a demo code
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(speakers, null, 2));
      console.log('GET /api/speakers status: 200');
    } else {
      res.status(404).send('Not found');
      console.log('GET /api/speakers status: 404');
    }
  } catch (err) {
    // file deepcode ignore ServerLeak: this is just a demo code
    res.status(500).send(err);
    console.log('GET /api/speakers status: 500');
  }
}
