console.log("Welcome to the main module")
// import { officer } from './officer.js'
// import {getOfficers, useOfficers} from'./OfficerDataProvider.js'
import { officerList } from './officers/officerList.js'
import { criminalList} from './CriminalsFolder/CriminalsList.js'
import { LocationsList } from './Locations/locationList.js'
 
import { NoteForm } from './notes/Noteform.js'
import { NoteList } from './notes/NoteList.js'

import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { deleteNote } from './notes/NoteDataProvider.js'
import { NoteEditForm } from './notes/NoteEditForm.js'
// getOfficers()
// .then(() => {
//  let officersArray = useOfficers()
// console.log(officersArray)   
// officersArray.forEach(singleOffObj =>{
//     console.log(singleOffObj.name)
//     })
// })

// officerList()
// criminalList()
// LocationsList()


const darkModeButton = document.querySelector("#dark-mode")

darkModeButton.addEventListener("click", function(){
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList.toggle("dark-background")
  })
  
  NoteForm()
  // NoteList()
  ConvictionSelect()
  OfficerSelect()
  // deleteNote()