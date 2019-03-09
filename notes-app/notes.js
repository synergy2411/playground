const fs = require("fs");
const chalk = require("chalk");

var loadNotes = function () {
    try {
        let notesBuffer = fs.readFileSync("notes.json");
        let notesData = notesBuffer.toString();
        return JSON.parse(notesData);
    } catch (e) {
        return [];
    }
}

var saveNotes = function (notes) {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}

var addNote = function (title, body) {
    let notes = loadNotes();
    let duplicatedNotes = notes.filter(note => note.title === title);
    if (duplicatedNotes.length === 0) {
        let note = { title, body };
        notes.push(note);
        saveNotes(notes);
    } else {
        console.log(chalk.red("Duplicate title, Try again!"));
    }
}

var readNote = function (title) {
    let originalNotes = loadNotes();
    let note = originalNotes.filter(note => note.title === title)
    if (note.length != 0) {
        console.log("--------------------------");
        console.log("Title : " + note[0].title);
        console.log("Body : " + note[0].body);
    }else{
        console.log(chalk.red("Not found."));
    }
}

var removeNote = function (title) {
    let originalNotes = loadNotes();
    let updatedNotes = originalNotes.filter(note => note.title != title);
    saveNotes(updatedNotes);
    console.log(chalk.red.inverse("Note removed titled " + title));
 }

var listNotes = function () {
    return loadNotes();
}

module.exports = { addNote, readNote, removeNote, listNotes };
