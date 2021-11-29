
import { useConvictions } from "../convictions/convictionProvider.js"
import { getLocations, useLocations } from "../Locations/locationDateProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js"
import { criminals } from "./Criminals.js"
import { getCriminals,useCriminals } from "./CriminalsDataProvider.js"

const contentTarget = document.querySelector(".contentContainer")

export const criminalList = () => {
    // Kick off the fetching of both collections of data
    getLocations()
        .then(getCriminals)
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useLocations()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
}

const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return criminals(criminalObject, facilities)
        }
    ).join("")
}



// import { ConvictionSelect } from "../convictions/ConvictionSelect.js"
// )

// export const criminalList = (crimeSelected, officerFilter) => {
//     // let criminalContainer = document.querySelector(".filters__crime")
    
// let crimHTML = "";

//     getCriminals()
//     .then(() => {
//         let criminalArray = useCriminals();

        
//         if(crimeSelected === "crime"){
      
//             criminalArray = criminalArray.filter(singleCriminalInLoop => {
             
//                 return singleCriminalInLoop.conviction === officerFilter
                
//             // write the condition here to filter for criminals whose crime matches the convictionFilter value
//             })
               
//           } else if (crimeSelected === "officer") {
//                 criminalArray = criminalArray.filter(singleCriminalInLoop => {
//                     return singleCriminalInLoop.arrestingOfficer === officerFilter
//                 })
//             }
               
        
//         criminalArray.forEach((singleCriminal) => {
//                 crimHTML += criminals(singleCriminal);
//     })
//     contentTarget.innerHTML = `<h2 class="criminalsHeader">Criminals</h2><div class="styledContainer">${crimHTML}</div>`
//     })
// }

// const navElement = document.querySelector("#criminals-nav-link")

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
criminalList()
  
})


// Nav Bar
const navBarCriminals = document.querySelector("#criminals-nav-link")

// navBarCriminals.addEventListener("click", () => {
//     // invoke the function that prints the criminals
//        CriminalList ()
// })
// export const CriminalList = (convictionFilter) => {
//     let criminalListContainer = document.querySelector(".criminal-list");
  
//     criminalListContainer.innerHTML = ""
  
//     getCriminals().then(() => {
//       let criminals = useCriminals();
       
//       // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
     
  
//       // at this point, the value criminals will either be all of the criminals (if no convictionFilter was selected) or the criminals that match the crime selected 
//       // either way, we want to print them!
//       criminals.forEach((singleCriminal) => {
//         criminalListContainer.innerHTML += Criminal(singleCriminal);
//       });
//     });
//   };
  
