const yargs = require("yargs");
const notes = require("./notes");
const chalk = require("chalk");

yargs.command({
    command: 'add',
    description: "Add a new note in my app",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            description: "This is title of the note"
        },
        body: {
            type: "string",
            demandOption: true,
            description: "This is body of the note"
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})


yargs.command({
    command: 'remove',
    description: "Removing a new note in app",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            description: "This is title of the note"
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'read',
    description: "Read a new note in app",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            description: "This is title of the note"
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    description: "Listing all notes in app",
    handler: function (argv) {
        console.log(chalk.green.bold.inverse("Listing all Notes!"));
        notes.listNotes().forEach(note => {
            console.log(chalk.red("---------------"));
            console.log("Title : " + note.title);
            console.log("Body : " + note.body);
        })
    }
})

yargs.parse();

// console.log(yargs.argv);

// console.log(process.argv);


// node app.js add --title="" --body=""
// node app.js remove --title="" 
// node app.js list 
// node app.js read --title="" 