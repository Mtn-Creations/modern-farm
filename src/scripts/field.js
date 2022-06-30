let plantField = []

export const addPlant = (plantSeed) => {
    
    if ( Array.isArray(plantSeed) ) {
        
        for ( const seedItem of plantSeed) {
            addPlant(seedItem)
        }

    } else {

        plantField.push(plantSeed)
    
    }

}

export const usePlants = () => {

    return [...plantField]

}