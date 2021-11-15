
let notes = [] // notes here *

export const useNotes = () => {
    return notes.slice() //notes here *
}

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes //notes here *
        })

}
                        //vv-paramater - since one parameter it does not need () 
export const saveNote = (note) => {
    return fetch('http://localhost:8088/notes', { //fetch says go to host to retrieve data
        method: "POST",  
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes) // After we add a note, get them all again so our new note appears in our collection
}


export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
    // .then(getNotes) works without this one
}


export const updateNote = note => {

    return fetch(`http://localhost:8088/notes/${note.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })

}
