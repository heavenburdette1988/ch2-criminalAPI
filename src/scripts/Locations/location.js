export const locations = (Object) => {
    return `
    <section class="locationCard">
    <h3 class="id"><a>ID: </a>${Object.id}</h3>
    <div class="facilityName"><a>Facility: </a>${Object.facilityName}</div>
    <div class="SecuityLevel"><a>SecuirityLevel: </a>${Object.securityLevel}</div>
    <div class="Capacity"><a>Capacity: </a>${Object.capacity}</div>
    </section>`
}