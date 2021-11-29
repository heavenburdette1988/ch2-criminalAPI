import { useLocations, getLocations } from "./locationDateProvider.js";
import { locations } from "./location.js";
import { getCriminals, useCriminals } from "../CriminalsFolder/CriminalsDataProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "../CriminalsFolder/CriminalFacilityProvider.js";

const contentTarget = document.querySelector(".contentContainer")

// export const LocationsList = () => {
//     getLocations()
//     .then(() => {
//         let locationArray = useLocations();

//         let locHTML = "";

//         locationArray.forEach((singleLocObj) => {
//                 locHTML += locations(singleLocObj);
//     })
//     contentTarget.innerHTML = `<h2 class="locationHeader">Facilities</h2><div class="styledContainer">${locHTML}</div>`
//     })
// }


document.querySelector("#facilitiesnav-link").addEventListener("click", () => {
    LocationsList()
    })
    

    export const LocationsList = () => {
        // Kick off the fetching of both collections of data
        getCriminals()
            .then(getLocations)
            .then(getCriminalFacilities)
            .then(
                () => {
                    // Pull in the data now that it has been fetched
                    const facilities = useLocations()
                    const crimFac = useCriminalFacilities()
                    const criminals = useCriminals()
    
                    // Pass all three collections of data to render()
                    render(facilities, criminals, crimFac)
                }
            )
    }
    
    const render = (locationsToRender, allCriminals, allRelationships) => {
        // Step 1 - Iterate all criminals
        contentTarget.innerHTML = locationsToRender.map(
            (locationObject) => {
                // Step 2 - Filter all relationships to get only ones for this criminal
                const criminalsRelationshipsForThisLocation = allRelationships.filter(cf => cf.facilityId === locationObject.id)
    
                // Step 3 - Convert the relationships to facilities with map()
                const criminals = criminalsRelationshipsForThisLocation.map(cf => {
                    const matchingCriminalObject = allCriminals.find(criminal => criminal.id === cf.criminalId)
                    return matchingCriminalObject
                })
    
                // Must pass the matching facilities to the Criminal component
                return locations(locationObject, criminals)
            }
        ).join("")
    }
    