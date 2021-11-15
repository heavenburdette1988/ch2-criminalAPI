import { NoteList } from "./NoteList.js" 
import { saveNote } from"./NoteDataProvider.js"


//This form prints new entries and stores them to server

const contentTarget = document.querySelector(".noteFormContainer")


// Handle browser-generated click event in component
document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        
            //^^^object representation of a note
        // let entryText = document.querySelector("#noteText").value

        // console.dir(entryText);
//        
    
         const newNote = {

            // noteText: entryText
            // Key/value pairs here
            DateofNote: document.querySelector("#noteDate").value,
            noteText: document.querySelector("#noteText").value,
            criminalId: document.querySelector("#noteForm--criminal").value,
            // suspectID: document.querySelector("#suspectId").value,
  

        }
            console.log(newNote)
            document.querySelector("#noteDate").value = ""
            document.querySelector("#noteText").value = ""
            // document.querySelector("#suspect").value = ""
            document.querySelector("#noteForm--criminal").value = ""
        
        // Make a new object representation of a note
       
        // const 
        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
    }
})


export const NoteForm = (criminalCollection) => {
    
     
    contentTarget.innerHTML = `<fieldset><label for="Date"><input type="date" id="noteDate" ></label></fieldset>
    <fieldset><input type="text" id="noteText" placeholder="Note Goes Here"></fieldset>
    
    <select id="noteForm--criminal" class="criminalSelect">
    <option value="">Please select a officer...</option>
    ${
        criminalCollection.map(criminalObject => {
        const criminalType = criminalObject.name
        return `<option value="${ criminalType.id }">${ criminalType.name }</option>` 
        })
    }
    </select>

        <button id="saveNote">Save Note</button>`
      
    }