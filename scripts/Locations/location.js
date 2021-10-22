export const locations = (Object) => {
    return `<section class=criminalCard>
    <div class="CrimOne>
    <h3 class="id">${Object.id}</h3>
    <div class="facilityName"><a>Facility: </a>${Object.facilityName}</div>
    <divclass="SecuityLevel"><a>SecuirityLevel: </a>${Object.securityLevel}</div>
    <divclass="Capacity"><a>Capacity: </a>${Object.capacity}</div>
    
    </div>
    </section>`
}