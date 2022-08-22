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
  const method = req?.method;
  const id = parseInt(req?.query.id);
  const recordFromBody = req?.body;

  const postMethod = async () => {
    const jsonFile = path.resolve('./', 'db.json');

    try {
      const data = await readFile(jsonFile, 'utf8');
      await delay(1000);
      const speakers = JSON.parse(data).speakers;
      if (speakers) {
        const newSpeaker = {
          id: speakers.length + 1,
          ...recordFromBody,
        };
        speakers.push(newSpeaker);
        await writeFile(jsonFile, JSON.stringify({ speakers }));
        res.setHeader('Content-Type', 'application/json');
        res.status(201).send(JSON.stringify(newSpeaker, null, 2));
        console.log('POST /api/speakers status: 201');
      } else {
        res.status(404).send('Not found');
        console.log('POST /api/speakers status: 404');
      }
    } catch (err) {
      res.status(500).send(err);
      console.log('POST /api/speakers status: 500');
    }
  };

  const putMethod = async () => {
    try {
      const data = await readFile(jsonFile, 'utf8');
      await delay(1000);
      const speakers = JSON.parse(data).speakers;
      if (speakers) {
        const speaker = speakers.find((s) => s.id === id);
        if (speaker) {
          const updatedSpeaker = {
            ...speaker,
            ...recordFromBody,
          };
          const updatedSpeakers = speakers.map((s) =>
            s.id === id ? updatedSpeaker : s
          );
          await writeFile(
            jsonFile,
            JSON.stringify({ speakers: updatedSpeakers })
          );
          res.setHeader('Content-Type', 'application/json');
          res.status(200).send(JSON.stringify(updatedSpeaker, null, 2));
          console.log('PUT /api/speakers status: 200');
        } else {
          res.status(404).send('Not found');
          console.log('PUT /api/speakers status: 404');
        }
      } else {
        res.status(404).send('Not found');
        console.log('PUT /api/speakers status: 404');
      }
    } catch (err) {
      res.status(500).send(err);
      console.log('PUT /api/speakers status: 500');
    }
  };

  const deleteMethod = async () => {
    try {
      const data = await readFile(jsonFile, 'utf8');
      await delay(1000);
      const speakers = JSON.parse(data).speakers;
      if (speakers) {
        const speaker = speakers.find((s) => s.id === id);
        if (speaker) {
          const updatedSpeakers = speakers.filter((s) => s.id !== id);
          await writeFile(
            jsonFile,
            JSON.stringify({ speakers: updatedSpeakers })
          );
          res.setHeader('Content-Type', 'application/json');
          res.status(200).send(JSON.stringify(speaker, null, 2));
          console.log('DELETE /api/speakers status: 200');
        } else {
          res.status(404).send('Not found');
          console.log('DELETE /api/speakers status: 404');
        }
      } else {
        res.status(404).send('Not found');
        console.log('DELETE /api/speakers status: 404');
      }
    } catch (err) {
      res.status(500).send(err);
      console.log('DELETE /api/speakers status: 500');
    }
  };

  switch (method) {
    case 'POST':
      postMethod();
    case 'PUT':
      putMethod();
    case 'DELETE':
      deleteMethod();
    default:
      res.status(500).send(`Method ${method} not supported!`);
  }
}
