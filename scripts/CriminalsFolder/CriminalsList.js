
import { criminals } from "./Criminals.js"
import {getCriminals,useCriminals} from "./CriminalsDataProvider.js"

const contentTarget = document.querySelector(".subCriminals")

export const criminalList = () => {
    getCriminals()
    .then(() => {
        let criminalArray = useCriminals();

        let crimHTML = "";

        criminalArray.forEach((singleCrimObj) => {
                crimHTML += criminals(singleCrimObj);
    })
    contentTarget.innerHTML = crimHTML
    })
}