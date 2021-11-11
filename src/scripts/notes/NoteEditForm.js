import {useNotes} from "./NoteDataProvider.js"
import { updateNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js";

import { NoteForm } from "./Noteform.js";

// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
const contentTarget = document.querySelector(".noteFormContainer")

export const NoteEditForm = (noteId) => {
    // Give this component access to our application's notes state
    const allNotes = useNotes();

    // Find the note that we clicked on by its unique id
    const noteWeWantToEdit = allNotes.find(singleNote => singleNote.id === noteId) //when singlenote is equal to the Note ID print hereVVVV
   
    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Note</h2>
        <input type="date" id="note-date" value="${noteWeWantToEdit.DateofNote}" />
        <input type="text" value="${noteWeWantToEdit.noteText}" id="note-text" />
        <input type="text" value="${noteWeWantToEdit.suspect}" id="note-suspect"/>
        <button id="saveNoteChanges--${noteId}">Save Changes</button>
    `
}// Form for changes

//edit note event listener that allows you to save new note.
contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveNoteChanges")){ 

        // Make a new object representation of a note
        const editedNote = {
            id: +event.target.id.split("--")[1], // split on -- and pull index 1
            DateofNote: document.querySelector("#note-date").value, 
            noteText: document.querySelector("#note-text").value, 
            suspect: document.querySelector("#note-suspect").value
        } // these ids come from the form for where we edit the note so it can save it
        
        // Send to json-server and refresh the list
        updateNote(editedNote)//this updates the edited note
        .then(NoteList)//This redisplays the updated list 
        .then(NoteForm)//this redisplays the form

    }
})
