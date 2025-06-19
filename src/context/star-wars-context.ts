import  { createContext } from "react";

export type StarWarsContextType = {
    people: Array<any>
    planets: Array<any>
}

const initialState = {
    people: [],
    planets: []
}

export const StarWarsContext = createContext<StarWarsContextType>(initialState);



