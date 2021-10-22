console.log("Welcome to the main module")
// import { officer } from './officer.js'
// import {getOfficers, useOfficers} from'./OfficerDataProvider.js'
import { officerList } from './officerList.js'
import { criminalList} from './CriminalsFolder/CriminalsList.js'
import { LocationsList } from './Locations/locationList.js'
 



// getOfficers()
// .then(() => {
//  let officersArray = useOfficers()
// console.log(officersArray)   
// officersArray.forEach(singleOffObj =>{
//     console.log(singleOffObj.name)
//     })
// })

officerList()
criminalList()
LocationsList()