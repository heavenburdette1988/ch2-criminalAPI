import { officer } from './officer.js'
import {getOfficers, useOfficers} from'./OfficerDataProvider.js'

const contentTarget = document.querySelector(".subOfficers")

export const officerList = () => {
    getOfficers()
    .then(() => {
        let officersArray = useOfficers();

        let officerHTML= "";

        officersArray.forEach((singleOfficerObj) => {
                officerHTML += officer(singleOfficerObj);
        })
        contentTarget.innerHTML = officerHTML
    });
};


