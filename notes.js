const fs = require('fs')



const addNote = (title, body) => {
    const notes= loadNotes()

    
    const duplicateNote = notes.find((note) => note.title === title)

    if (duplicateNote === undefined) {

        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
    } else {
        console.log('Note Title Taken')
    }

    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return data
    } catch (e) {
        return []
    }
}


const removeNote = (title) => {
    const notes = loadNotes()

    const newNotes = notes.filter((note) => note.title != title )


    if (newNotes.length === notes.length) {
        console.log('There is no note of this title')
    } else{

        saveNotes(newNotes)    
        console.log('This title is removed')
    }
     
}

const listNotes = () => {

    const notes = loadNotes()

    if (notes.length === 0) {
        console.log('There are no notes')
    } else {
        console.log('Your Notes')
        notes.forEach(note => {
            console.log(note.title)
        });
    }

}

const readNotes = (title) =>{

    const notes = loadNotes()

    const noteRead = notes.find((note) => note.title === title)

    if (noteRead === undefined) {
        console.log('No note is there of this title')
    } else {
        console.log(noteRead.title + ": " + noteRead.body )
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};