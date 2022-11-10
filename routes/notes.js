const notes = require('express').Router();
const fs = require('fs');
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const uuid = require('../helpers/uuid');
const uuid= require('uniqid')
// GET Route for retrieving all the tips
notes.get('/', (req, res) => {
    fs.readFile('./db/db.json',(error, data) =>{ 
      console.log(error);
      res.send((data))})
  });
  
  // POST Route for a new UX/UI note
notes.post('/', (req, res) => {
    console.log(req.body);
  
    
    if (req.body) {
      const newNote = {
      ...req.body, 
        notes_id: uuid(),
      };

      fs.readFile('./db/db.json',(error, data) =>{ 
        console.log(error);
      var notes = JSON.parse(data)
      notes.push(newNote)
      fs.writeFile('./db/db.json', JSON.stringify(notes), (error, data)=>{
        res.json(`Note added successfully 🚀`);
      })
      })
      
     
    } else {
      res.error('Error in adding note');
    }
  });

  module.exports = notes;
  