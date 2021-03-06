let criminals = []

export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
    .then (response => response.json())
    .then (criminalFunction => {
        // console.table(criminalFunction)
        criminals = criminalFunction
    })
}