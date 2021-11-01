import { getOfficers, useOfficers } from "./OfficerDataProvider.js"
import { criminalList } from "../CriminalsFolder/CriminalsList.js"


// export const criminalList = (crimeSelected, officerFilter) => {

const contentTarget = document.querySelector(".filters__officers")

export const OfficerSelect = () => {
    getOfficers() //pulling from dataprovider to be able to select
    .then(() => {  //promise
        let officerArray = useOfficers();
        render(officerArray) //which allows to render officer to dom??
    })
}

const render = officerCollection => {
     
    contentTarget.innerHTML = `<select class="dropdown" id="officerSelect">
    <option value="0">Please select a officer...</option>
    ${
        officerCollection.map(officerObject => {
            const officerType = officerObject.name
            return `<option> ${officerType}</option>`
        })
    }
</select>
`

}
// *****************above is select list code**** shows officer select drop down with names.  It is fetching the data from officerProvider and putting it in a select
const eventHub = document.querySelector("body")
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        // const selectedOfficer = changeEvent.target.value

        // Write your code here
        criminalList("officer", changeEvent.target.value)
       
    }
})


