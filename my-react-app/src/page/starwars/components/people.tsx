import { useContext } from "react";
import ListBasic, { type ListItemType } from "../../../component/list";
import { StarWarsContext } from "../../../context/star-wars-context";

type PersonType = { name: string; birth_year: string };

export function People() {
  const { people } = useContext(StarWarsContext);

  people.sort((a: PersonType, b: PersonType) => a.name.localeCompare(b.name));

  const peopleListItem: Array<ListItemType> = people.map(
    (person: PersonType) => ({
      primary: person.name,
      secondary: person.birth_year,
    })
  );

  return <ListBasic items={peopleListItem} />;
}
