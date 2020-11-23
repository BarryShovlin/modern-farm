
import { createAsparagus} from "/scripts/seeds/asparagus.js"
import { createPotato } from "/scripts/seeds/potato.js"
import { createCorn } from "/scripts/seeds/corn.js"
import { createWheat } from "/scripts/seeds/wheat.js"
import { createSoybean } from "/scripts/seeds/soybean.js"
import { createSunflower } from "/scripts/seeds/sunflower.js"
import { addPlant } from "/scripts/field.js"
 

export const plantSeeds = (field) => {
    
    for (let index = 0; index < field.length; index++) {
        for (const row of field[index])  {
            if ("Asparagus" in row) {
                const asparagus = createAsparagus()
                    addPlant(asparagus)
            } else if ("Potato" in row) {
                    const potato = createPotato()
                        addPlant(potato)
            } else if ("Corn" in row) {
                const corn = createCorn()
                    addPlant(corn)
            } else if ("Wheat" in row) {
                const wheat = createWheat()
                    addPlant(wheat)
            } else if ("Soybean" in row) {
                const soybean = createSoybean()
                    addPlant(soybean)
            } else { 
                const sunflower = createSunflower()
                    addPlant(Sunflowwer)
            }
        }
    }
}
