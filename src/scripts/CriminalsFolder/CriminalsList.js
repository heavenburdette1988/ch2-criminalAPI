
import { useConvictions } from "../convictions/convictionProvider.js"
import { criminals } from "./Criminals.js"
import {getCriminals,useCriminals} from "./CriminalsDataProvider.js"
// import { ConvictionSelect } from "../convictions/ConvictionSelect.js"
const contentTarget = document.querySelector(".contentContainer")

export const criminalList = (crimeSelected) => {
    getCriminals()
    .then(() => {
        let criminalArray = useCriminals();

        let crimHTML = "";

        if(crimeSelected){
      
            criminalArray = criminalArray.filter(singleCriminalInLoop => {
             
                return singleCriminalInLoop.conviction === crimeSelected
                
            // write the condition here to filter for criminals whose crime matches the convictionFilter value
            })
      
          }

        criminalArray.forEach((crimeSelected) => {
                crimHTML += criminals(crimeSelected);
    })
    contentTarget.innerHTML = `<h2 class="criminalsHeader">Criminals</h2><div class="styledContainer">${crimHTML}</div>`
    })
}

// const navElement = document.querySelector("#criminals-nav-link")

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
criminalList()
  
})


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
  
