const fs = require("fs");

var loadNotes = function () {
    try {
        let notesBuffer = fs.readFileSync("notes.json");
        let notesData = notesBuffer.toString();
        return JSON.parse(notesData);
    } catch (e) {
        return [];
    }
    
}

var saveNotes = function(notes){
    fs.writeFileSync("notes.json", JSON.stringify(notes));
    console.log("saved");
}

var addNote = function (title, body) {
    let notes = loadNotes();
    let note = { title, body };
    notes.push(note);
    saveNotes(notes);

    // let originalNotes = notes.filter((note) => note.title === title);
    // if (originalNotes.length === 0) {
    //     let note = { title, body };
    //     notes.push(note);
    //     saveNotes(notes);
    //     console.log("Note saved successfully.")
    // } else {
    //     console.log("Duplicated title. Try again.")
    // }
}


var readNote = function (title) { }
var removeNote = function (title) { }
var listNotes = function () { }

module.exports = { addNote, readNote, removeNote, listNotes };
