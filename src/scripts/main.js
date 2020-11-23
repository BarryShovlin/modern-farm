import { createAsparagus } from "/scripts/seeds/asparagus.js"
import { createPlan } from "/scripts/plan.js"
import { addPlant } from "/scripts/field.js"
import { usePlants } from "/scripts/field.js"
import { plantSeeds } from "/scripts/tractor.js"
export const yearlyPlan = createPlan()
console.log(yearlyPlan)

const addedPlant = addPlant()
console.log(addedPlant)

//const asparagusSeed = createAsparagus()
//console.log(asparagusSeed)



//console.log("Welcome to the main module")

/*
const seedObject = {
    type: "tomato",
    color: "red",
    taste: "horrible"
}
addPlant(seedObject)
const usedPlants = usePlants()
console.log(usedPlants)
*/