import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

export const plantSeeds = (plantingPlan) => {
    for (const cropRow of plantingPlan) {
        for (const crop of cropRow) {
            
            switch (crop) {
                case 'Asparagus':
                case 'asparagus':
                    addPlant(createAsparagus())
                    break;
                
                case 'Corn':
                case 'corn':
                    addPlant(createCorn())
                    break;
                
                case 'Potato':
                case 'potato':
                    addPlant(createPotato())
                    break;
                
                case 'Soybean':
                case 'soybean':
                    addPlant(createSoybean())
                    break;
                
                case 'Sunflower':
                case 'sunflower':
                    addPlant(createSunflower())
                    break;
                
                case 'Wheat':
                case 'wheat':
                    addPlant(createWheat())
                    break;
                
                default:
                    console.log(`plantSeeds: Invalid crop ${crop}`)
            }
        }
    }
}