import { useState } from "react";
import ListBasic, { type ListItemType } from "../../components/ui/list";

type PersonType = { name: string; birth_year: string };

export function People() {
  const [people] = useState<Array<PersonType>>([
    { name: "Luke Skywalker", birth_year: "19BBY" },
  ]);

  people.sort((a: PersonType, b: PersonType) => a.name.localeCompare(b.name));

  const peopleListItem: Array<ListItemType> = people.map(
    (person: PersonType) => ({
      primary: person.name,
      secondary: person.birth_year,
    })
  );

  return <ListBasic items={peopleListItem} />;
}
