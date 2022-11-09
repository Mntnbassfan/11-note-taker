const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the tips
notes.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
  });
  
  // POST Route for a new UX/UI note
notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { notes } = req.body;
  
    if (req.body) {
      const newTip = {
        notes,
        notes_id: uuid(),
      };
  
      readAndAppend(newTip, './db/tips.json');
      res.json(`Tip added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });
  