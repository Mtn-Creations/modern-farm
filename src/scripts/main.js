import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


console.log("Welcome to the main module")

const yearlyPlan = createPlan()

console.log(yearlyPlan)

const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()

console.log(asparagusSeed)
console.log(cornSeed)
console.log(potatoSeed)
console.log(soybeanSeed)
console.log(sunflowerSeed)
console.log(wheatSeed)