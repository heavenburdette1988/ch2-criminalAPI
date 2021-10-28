import { useLocations, getLocations } from "./locationDateProvider.js";
import { locations } from "./location.js";

const contentTarget = document.querySelector(".contentContainer")

export const LocationsList = () => {
    getLocations()
    .then(() => {
        let locationArray = useLocations();

        let locHTML = "";

        locationArray.forEach((singleLocObj) => {
                locHTML += locations(singleLocObj);
    })
    contentTarget.innerHTML = `<h2 class="locationHeader">Facilities</h2><div class="styledContainer">${locHTML}</div>`
    })
}


document.querySelector("#facilitiesnav-link").addEventListener("click", () => {
    LocationsList()
    })
    