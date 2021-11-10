import {useNotes} from "./NoteDataProvider.js"
import { updateNote } from "./NoteDataProvider.js";

// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
const contentTarget = document.querySelector(".noteFormContainer")

export const NoteEditForm = (noteId) => {
    // Give this component access to our application's notes state
    const allNotes = useNotes();

    // Find the note that we clicked on by its unique id
    const noteWeWantToEdit = allNotes.find(singleNote => singleNote.id === noteId)
   
    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Note</h2>
        <input type="date" id="note-date" value="${noteWeWantToEdit.date}" />
        <input type="text" value="${noteWeWantToEdit.text}" id="note-text" />
        <input type="text" value="${noteWeWantToEdit.suspect}" id="note-suspect" />
        <button id="saveNoteChanges-${noteId}">Save Changes</button>
    `
}


// const eventHub = document.querySelector(.contentContainer)
contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveNoteChanges")){ //check id***

        // Make a new object representation of a note
        const editedNote = {
            id: +eventObject.target.id.split("--")[1], // how can you get the note's id?
            noteText: document.querySelector("noteText").value, // get value of text from input
            suspect: document.querySelector("suspect").value,// get value of suspect from input,
            date: document.querySelector("noteDate").value // get value of date from input
        }

        // Send to json-server and refresh the list
        updateNote(editedNote)
        .then(NoteList)

    }
})
