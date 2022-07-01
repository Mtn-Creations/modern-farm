

export const harvestPlants = (plants) => {

    let seeds = []

    for (const plant of plants) {
        
        let plantOutput = (plant.type == 'Corn' || plant.type == 'corn') ? plant.output >> 1 : plant.output

        for (let i = 0; i < plantOutput; i++) {
            seeds.push(plant)
        }

    }
    
    return seeds

}