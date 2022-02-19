const Note = require("../Models/note_model");

const getNotes = (req, res)=> {
    Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));
};

const getNoteById = (req, res) => {
    let id = req.params.id;
    Note.findById(id, function(err, note) {
        res.json(note);
    });
}


const deleteNote = (req, res) => {
   Note.findByIdAndDelete(req.params.id)
    .then(() => res.json('Note deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}


const addNote = (req, res) => {
   const title = req.body.title;
   const content = req.body.content;
  


    const note = new Note({
        title,
        content,
      
    });

  note.save()
  .then(() =>  res.status(201).json({
                body: note,
                message: `Note added successfully`
            }))
  .catch(err => res.status(400).json('Error: ' + err));
}


const updateNote = function (req, res) {
     Note.findById(req.params.id)
    .then(note => {
      note.title = req.body.title;
      note.content = req.body.content;
      note.save()
  .then(() =>  res.status(201).json({
                body: note,
                message: `Note updated successfully`
            }))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}







module.exports = { getNotes, getNoteById, deleteNote, addNote, updateNote }; 