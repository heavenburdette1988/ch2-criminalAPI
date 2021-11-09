
import { useConvictions } from "../convictions/convictionProvider.js"
import { criminals } from "./Criminals.js"
import { getCriminals,useCriminals } from "./CriminalsDataProvider.js"

// import { ConvictionSelect } from "../convictions/ConvictionSelect.js"
const contentTarget = document.querySelector(".contentContainer")

export const criminalList = (crimeSelected, officerFilter) => {
    // let criminalContainer = document.querySelector(".filters__crime")
    
let crimHTML = "";

    getCriminals()
    .then(() => {
        let criminalArray = useCriminals();

        
        if(crimeSelected === "crime"){
      
            criminalArray = criminalArray.filter(singleCriminalInLoop => {
             
                return singleCriminalInLoop.conviction === officerFilter
                
            // write the condition here to filter for criminals whose crime matches the convictionFilter value
            })
               
          } else if (crimeSelected === "officer") {
                criminalArray = criminalArray.filter(singleCriminalInLoop => {
                    return singleCriminalInLoop.arrestingOfficer === officerFilter
                })
            }
               
        
        criminalArray.forEach((singleCriminal) => {
                crimHTML += criminals(singleCriminal);
    })
    contentTarget.innerHTML = `<h2 class="criminalsHeader">Criminals</h2><div class="styledContainer">${crimHTML}</div>`
    })
}

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
  
