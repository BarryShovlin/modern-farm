
import { createPlan } from "/scripts/plan.js"
import { addPlant } from "/scripts/field.js"
import {usePlants } from "/scripts/field.js"
//import { usePlants } from "/scripts/field.js"
import { plantSeeds } from "/scripts/tractor.js"


const yearlyPlan = createPlan()

console.log(plantSeeds(yearlyPlan))

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