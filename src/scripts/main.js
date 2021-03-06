import { createPlan } from "./plan.js"
// import { createAsparagus } from "./seeds/asparagus.js"
// import { createCorn } from "./seeds/corn.js"
// import { createPotato } from "./seeds/potato.js"
// import { createSoybean } from "./seeds/soybean.js"
// import { createSunflower } from "./seeds/sunflower.js"
// import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

console.log("Welcome to the main module")

// // Create and test plan generation
// const yearlyPlan = createPlan()

// console.log(yearlyPlan)


// // Create and test seed generation
// const asparagusSeed = createAsparagus()
// const cornSeed = createCorn()
// const potatoSeed = createPotato()
// const soybeanSeed = createSoybean()
// const sunflowerSeed = createSunflower()
// const wheatSeed = createWheat()

// console.log(asparagusSeed)
// console.log(cornSeed)
// console.log(potatoSeed)
// console.log(soybeanSeed)
// console.log(sunflowerSeed)
// console.log(wheatSeed)

// // Populate crop fields with previously generated seeds and test
// addPlant(
//     [
//         asparagusSeed,
//         cornSeed,
//         potatoSeed,
//         soybeanSeed,
//         sunflowerSeed,
//         wheatSeed
//     ]
// )

// Get array containing list of strings that represent crop types
const yearlyPlantingPlan = createPlan();

// Use array as input to function that populates another array with
// objects representing crop types
plantSeeds(yearlyPlantingPlan)

// Retrieve this new array of objects...
const field = usePlants()

// ... run them through the harvester...
const harvest = harvestPlants(field)

// ...and display.
console.log(harvest)
Catalog(harvest)