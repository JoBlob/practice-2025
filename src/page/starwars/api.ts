import type { LoaderFunctionArgs } from "react-router"

const BASE_URL = 'https://swapi.info/api/'

export async function FetchStarWarsPeople() {
    try {
        const response = await fetch(`${BASE_URL}people`)
        const data = await response.json()
        return data
    }
    catch(error: any ){
        console.error(`Error People ${error.message}`)  
    }

}

export async function StarWarsLoader() {
	const people =  await fetch(`${BASE_URL}people`)
	.then((res) => res.json())
	.catch((e) => e.message);

	const planets =  await fetch(`${BASE_URL}planets`)
	.then((res) => res.json())
	.catch((e) => e.message);

	return {
		people: people, 
		planets: planets
	}
}

export async function PersonLoader({ params }: LoaderFunctionArgs) {
  let person = await fetch(`${BASE_URL}people/${params.id}`)
  .then((res) => res.json())
	.catch((e) => e.message)
  return { person };
}