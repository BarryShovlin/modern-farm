const growing = []

export const addPlant = (seed) => {
    
    if(Array.isArray(seed) === false) {
        growing.push(seed)
    }
    else {
        for (const ear of seed) {
            growing.push(ear)
        }
    }
}

export const usePlants = () => {
    return growing.slice()
}