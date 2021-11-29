
export const criminals = (criminalObject, facilities) => {
    return `
    <div class="criminal">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
            <div>
                <h2>Facilities</h2>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObject.id}">Show Associates</button>
        </div>
    </div>
    `
}




// export const criminals = (Object) => {
//     return `
//     <section class="criminalCard">
 
//     <h3 class="name">${Object.name}</h3>
//     <div class="age"><a>Age: </a>${Object.age}</div>
//     <div class="crime"><a>Crime: </a>${Object.conviction}</div>
//     <div class="officer"><a>Officer: </a>${Object.arrestingOfficer}</div>
//     <div class="start"><a>Term Start: </a>${new Date(Object.incarceration.start).toLocaleDateString('en-US')}</div>
//     <div class="end"><a>Term End: </a>${new Date(Object.incarceration.end).toLocaleDateString('en-US')}</div>
   
//     </section>`
// }

//need to figure out how to target start and end dates???

// <div class="name">${Object.start[0]}</div>
    // <div class="workHistory">${Object.end}</div>