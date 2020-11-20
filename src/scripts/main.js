import { createAsparagus } from "/scripts/seeds/asparagus.js"
import { createPlan } from "/scripts/plan.js"
import { addPlant } from "/scripts/field.js"
import { usePlants } from "/scripts/field.js"

const yearlyPlan = createPlan()
console.log(yearlyPlan)

//const asparagusSeed = createAsparagus()
//console.log(asparagusSeed)



//console.log("Welcome to the main module")

const seedObject = {
    type: "tomato",
    color: "red",
    taste: "horrible"
}
addPlant(seedObject)
const usedPlants = usePlants()
console.log(usedPlants)