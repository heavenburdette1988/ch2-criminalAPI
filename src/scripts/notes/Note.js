import { deleteNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js";

export const notes = (noteObject) => {
    return `<section class ="noteCard">
    <div id="id">ID:${noteObject.id}</div>
    <div class="DateOfNote"><a>Date: </a>${noteObject.DateofNote}</div>
    <div class="noteText"><a>Note: </a>${noteObject.noteText}</div>
    <div class="suspect"><a>Suspect: </a>${noteObject.suspect}</div>
    <button id="deleteNote--${noteObject.id}">Delete</button>
    <button id="edit--${noteObject.id}">Edit</button>
    </section>`
}

const eventHub = document.querySelector(".contentContainer")

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("deleteNote")) {
    const idToDelete = eventObject.target.id.split("--")[1]
    console.log(idToDelete)
    deleteNote(idToDelete)
    .then(NoteList)
    
// where is delete-note coming from?
    // ---------- Write your code here -------------//
    // Call the deleteNote function and pass in the appropriate id
    // Then call NoteList to refresh the list of notes
  } 
 
});

const editEventHub = document.querySelector(".noteFormContainer")
editEventHub.addEventListener("click", (eventObject) => {

    const noteId = +eventObject.target.id.split("--")[1]
    NoteEditForm(noteId);
    
})
