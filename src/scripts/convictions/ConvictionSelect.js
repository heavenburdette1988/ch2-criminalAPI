/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */

import { criminalList } from "../CriminalsFolder/CriminalsList.js"
import { getConvictions, useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime") //printing to html 

export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions() //from conviction provider
    .then(() => {
    let convictionArray = useConvictions();
    // let convictionHTML = "";
    render(convictionArray) //
    })
    // const convictions = useConvictions()
    // render(convictions)
}

const render = convictionsCollection => { // calling render function
       //convictionsCollections is as parameter of an array
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(crimeObject => {
                    const crimeType = crimeObject.name
                    return `<option> ${crimeType}</option>`
                })
            }
        </select>
    `
}


// document.querySelector("#notes-nav-link").addEventListener("click", () => {
//     convictionsCollection()
//     })



// This won't throw an error, but it will fire any time there's a change event anywhere in the main container
const eventHub = document.querySelector("body")
eventHub.addEventListener("change", (eventObject) => {
    console.log("You clicked somewhere in the body element")

    // To be more specific, we need to know specifically what we clicked on
    console.log("Here is the element you clicked on: ", eventObject.target)

    
    // ---------- Your code goes here ----------- //
        /*
        - When we select a crime, we need to filter the criminals in CriminalList.
        - Start by importing the CriminalList component at the top of this file.
        - Then call CriminalList, and pass in information about the crime that was chosen
        */
    // 

    if(eventObject.target.id === "crimeSelect"){
        console.log("You selected something from the crime dropdown")
        console.log("This is the crime that was selected: ", eventObject.target.value)
        // Your code goes here!
        criminalList("crime", eventObject.target.value) 
    }
})

