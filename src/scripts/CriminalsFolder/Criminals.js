export const criminals = (Object) => {
    return `
    <section class="criminalCard">
 
    <h3 class="name">${Object.name}</h3>
    <div class="age"><a>Age: </a>${Object.age}</div>
    <div class="EyeColor"><a>Crime: </a>${Object.conviction}</div>
    <div class="start"><a>Term Start: </a>${new Date(Object.incarceration.start).toLocaleDateString('en-US')}</div>
    <div class="end"><a>Term End: </a>${new Date(Object.incarceration.end).toLocaleDateString('en-US')}</div>
   
    </section>`
}

//need to figure out how to target start and end dates???

// <div class="name">${Object.start[0]}</div>
    // <div class="workHistory">${Object.end}</div>