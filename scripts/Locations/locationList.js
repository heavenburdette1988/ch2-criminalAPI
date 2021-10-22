import { useLocations, getLocations } from "./locationDateProvider.js";
import { locations } from "./location.js";

const contentTarget = document.querySelector(".subLocations")

export const LocationsList = () => {
    getLocations()
    .then(() => {
        let locationArray = useLocations();

        let locHTML = "";

        locationArray.forEach((singleLocObj) => {
                locHTML += locations(singleLocObj);
    })
    contentTarget.innerHTML = locHTML
    })
}