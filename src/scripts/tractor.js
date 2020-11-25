
import { createAsparagus} from "/scripts/seeds/asparagus.js"
import { createPotato } from "/scripts/seeds/potato.js"
import { createCorn } from "/scripts/seeds/corn.js"
import { createWheat } from "/scripts/seeds/wheat.js"
import { createSoybean } from "/scripts/seeds/soybean.js"
import { createSunflower } from "/scripts/seeds/sunflower.js"
import { addPlant } from "/scripts/field.js"
import { createPlan } from "/scripts/plan.js"
import { usePlants } from "/scripts/field.js"
 

export const plantSeeds = (field) => {
    for (const row of field) {
        for (let index = 0; index < row.length; index++)  {
            if (row[index] === "Asparagus") {
                const asparagus = createAsparagus()
                   addPlant(asparagus)
            } else if (row[index] === "Potato") {
                    const potato = createPotato()
                    addPlant(potato)
            } else if (row[index] === "Corn") {
                const corn = createCorn()
                    addPlant(corn)
            } else if (row[index] === "Wheat") {
                const wheat = createWheat()
                    addPlant(wheat)
            } else if (row[index] === "Soybean") {
                const soybean = createSoybean()
                    addPlant(soybean)
            } else { 
                const sunflower = createSunflower()
                    addPlant(sunflower)
            }
        }
    }
    return usePlants()
}
