
export async function FetchStarWarsPeople() {
    try {
        const response = await fetch('https://swapi.info/api/people')
        const data = await response.json()
        return data
    }
    catch(error: any ){
        console.error(`Error People ${error.message}`)  
    }

}

export async function FetchStarWarsPlanets() {
    return await fetch('https://swapi.info/api/planets')
    .then((res) => res.json())
    .catch((e) => e);
}