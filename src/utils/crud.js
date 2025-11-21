import data from "./items.json"

export function getData() {
    const dataStorage = localStorage.getItem("data")

    if (dataStorage !== null) {
        return JSON.parse(dataStorage)
    }
    else {
        localStorage.setItem("data", JSON.stringify(data))
        return data
    }
}

export function getAllItems() {
    return getData()
}

export function getItemById(id) {
    const items = getData()

    for (const key in items["jeux video"]) {
        if (items["jeux video"][key].id === id) {
            return items["jeux video"][key]
        }
    }
    return null
}

export function saveItem(newItem) {
    const items = getData()

    if (getItemById(newItem.id) !== null) {
        return null
    }
    
    items["jeux video"].push(newItem)
    localStorage.setItem("data", JSON.stringify(items))

    return newItem
}

export function deleteItem(id) {
    const items = getData()
    let indexToDelete = -1
    
    for (const key in items["jeux video"]) {
        if (items["jeux video"][key].id === id) {
            indexToDelete = key
            break
        }
    }
    
    if (indexToDelete === -1) {
        return false
    }
    
    items["jeux video"].splice(indexToDelete, 1)
    localStorage.setItem("data", JSON.stringify(items))
    
    return true
}

export function Test() {
    console.log(getAllItems())

    console.log(getItemById(1))

    const newItem = {
        "id": 4,
        "Intitule": "Quel est le nom de la console de jeu vidéo de Sony ?",
        "Reponses": [
            "Xbox",
            "PlayStation",
            "Nintendo Switch",
            "Sega Genesis"
        ],
        "Bonne_Reponse": "PlayStation",
        "Difficulte": "Moyen"
    }

    console.log(saveItem(newItem))
    console.log(deleteItem(4))

}