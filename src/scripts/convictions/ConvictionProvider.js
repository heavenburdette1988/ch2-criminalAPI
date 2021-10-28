let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
        return fetch ("https://criminals.glassdale.us/crimes")
        .then (dirtyConvictions => dirtyConvictions.json())
        .then (cleanConvictions => {
                // console.table(cleanConvictions)    
                convictions = cleanConvictions
        })

    
    /*      
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `convictions`????
        variable to what is in the response from the API.
    */
}
