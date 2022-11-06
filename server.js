const { application } = require("express");
const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const notes = (.db/db.json);
app.use("/api", api);

app.use(express.static("public"));

// GET Route for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// GET Route for notes page
app.get("/notes", (req, res) => {
  res.sendfile(path.join(__dirname, "public/notes.html"))
});

// GET Route for notes
app.get('api/notes', (req, res) =>{
    res.json(notes)
});

// POST Route for notes

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);