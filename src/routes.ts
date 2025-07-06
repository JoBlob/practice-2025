import { createBrowserRouter, type DataRouter } from "react-router";
import App from "./App";
import StarWars from "./page/starwars/starwars";
import Person from "./page/starwars/person/person";
import { PersonLoader, StarWarsLoader } from "./page/starwars/api";

export const router: DataRouter = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
          path: "/",
          Component: StarWars,
          loader: StarWarsLoader
      },
      {
        path: "/person/:id",
        Component: Person,
        loader: PersonLoader
      }
    ]
  },
]);
