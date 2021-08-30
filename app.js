const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes= require('./notes')
const { argv } = require('yargs')



// CustomiZze yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }        
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
        notes.removeNote(argv.title)
        
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List of notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder: {
        title: {
            describe: 'Note tob read',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
        notes.readNotes(argv.title)
    }
})

console.log(yargs.argv)