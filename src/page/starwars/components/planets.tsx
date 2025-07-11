import { useContext } from "react";
import {
  StarWarsContext,
  type StarWarsContextType,
} from "../../../context/star-wars-context";
import ListBasic from "../../../components/ui/list";

export function Planets() {
  const { planets } = useContext<StarWarsContextType>(StarWarsContext);

  const listItem = planets.map((planet) => ({
    primary: planet.name,
    secondary: planet.diameter,
  }));

  listItem.sort((a, b) => a.primary.localeCompare(b.primary));

  return <ListBasic items={listItem} />;
}
