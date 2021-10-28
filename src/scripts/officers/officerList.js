import { officer } from './officer.js'
import {getOfficers, useOfficers} from'./OfficerDataProvider.js'

const contentTarget = document.querySelector(".contentContainer")

export const officerList = () => {
    getOfficers()
    .then(() => {
        let officersArray = useOfficers();

        let officerHTML= "";

        officersArray.forEach((singleOfficerObj) => {
                officerHTML += officer(singleOfficerObj);
        })
        contentTarget.innerHTML = `<h2 class="officerHeader">Officers</h2><div class="styledContainer">${officerHTML}</div>`
    });
};


document.querySelector("#officers-nav-link").addEventListener("click", () => {
    officerList()
        
    })
    