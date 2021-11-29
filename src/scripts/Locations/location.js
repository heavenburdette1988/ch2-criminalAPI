





export const locations = (locationObject, criminals ) => {
    return `
    <section class="locationCard">
    <div>
    <h3 class="facility">Facility: ${locationObject.facilityName}</h3>
    
    <div class="SecuityLevel"><a>SecuirityLevel: </a>${locationObject.securityLevel}</div>
    <div class="Capacity"><a>Capacity: </a>${locationObject.capacity}</div>
    </div>
    <h3>Criminals</h3>
    <ul>
    ${criminals.map(c => `<li>${c.name}</li>`).join("")}
    </ul>
  
    </section>`
}