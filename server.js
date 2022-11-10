const { application } = require("express");
const express = require("express");
const path = require("path");
const { receiveMessageOnPort } = require("worker_threads");
const api = require("./routes/index.js");

const PORT = 3001;

const app = express();
// uuid to create an id for notes
const { uuid } = require('path')

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const notes = require('./db/db.json');
app.use("/api", api);

app.use(express.static("public"));

// GET Route for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// GET Route for notes page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"))
});

// GET Route for notes
app.get('api/notes', (req, res) => {
    res.json(notes)
});

// POST Route for notes
app.post('api/notes', (req, res) => {
    let nextNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid(),
    }

//Push notes to json file
notes.push(nextNote)
//Send success message
res.json(200)

// function to delete notes

});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


module.exports = notes;
