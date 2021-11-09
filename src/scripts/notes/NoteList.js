// prints to the dom

import { useNotes, getNotes } from "./NoteDataProvider.js";
import { notes } from "./Note.js"; //import note card

const contentTarget = document.querySelector(".contentContainer")

export const NoteList= () => {
    getNotes()
    .then(() => {
        let notesArray = useNotes();

        let notesHTML = "";

        notesArray.forEach((singleNoteObj) => {
                notesHTML += notes(singleNoteObj);
    })
    contentTarget.innerHTML = `${notesHTML}`
    })
}




document.querySelector("#notes-nav-link").addEventListener("click", () => {
    NoteList()
    })




 
