// prints to the dom

import { useNotes, getNotes } from "./NoteDataProvider.js";
import { notes } from "./Note.js"; //import note card
import { getCriminals, useCriminals } from "../CriminalsFolder/CriminalsDataProvider.js";
import { NoteForm } from "./Noteform.js";

const contentTarget = document.querySelector(".contentContainer")

// const render = (noteCollection, criminalCollection) => {
//     contentTarget.innerHTML = noteCollection.map(note => {
//         // Find the related criminal
//         const relatedCriminal = criminalCollection.find(criminal => criminal.id === +note.criminalId)
       
//         return `
//             <section class="note">
//                 <h2>Note about ${relatedCriminal.name}</h2>
//                 ${note.noteText}
//             </section>
//         `
//     })
// }


export const NoteList = () => {
    getNotes()
    .then(getCriminals)
    .then(() => {
        let notesArray = useNotes();
        const criminals = useCriminals()
    
        let notesHTML = "";

        notesArray.forEach((singleNoteObj) => {
            let singleCriminal = criminals.find(x => 
                singleNoteObj.criminalId === x.id)
           
                notesHTML += notes(singleNoteObj, singleCriminal);

                // render(notesArray, criminals)
    })
    
    contentTarget.innerHTML = `${NoteForm(criminals)} ${notesHTML}`
    })
}




document.querySelector("#notes-nav-link").addEventListener("click", () => {
    NoteList()
    })




 
