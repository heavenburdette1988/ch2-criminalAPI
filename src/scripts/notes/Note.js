import { deleteNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js";
import { NoteEditForm } from "./NoteEditForm.js";

export const notes = (noteObject) => {
    return `<section class ="noteCard">
    <div id="id">ID: ${noteObject.id}</div>
    <div class="DateOfNote" type="date" value="mm-dd-yyyy">Date: ${new Date(noteObject.DateofNote).toLocaleDateString('en-us')}</div>
    <div class="noteText">Note: ${noteObject.noteText}</div>
    <div class="suspect">Suspect: ${noteObject.criminalId}</div>
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


//Edit button eventlistener
const editEventHub = document.querySelector(".contentContainer")
editEventHub.addEventListener("click", (eventObject) => {
  console.log(eventObject.target.id.split("--"))
  if(eventObject.target.id.startsWith("edit")) {

    console.log("you clicked")
    const noteId = +eventObject.target.id.split("--")[1]//I do not understand the split--
    NoteEditForm(noteId);
    }
})
