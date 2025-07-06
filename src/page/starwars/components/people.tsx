import { useContext } from "react";
import { StarWarsContext } from "../../../context/star-wars-context";
import { Card, CardContent, CardTitle } from "../../../components/ui/card";
import { Link } from "react-router";
import { v4 as uuidv4 } from "uuid";

type PersonType = { name: string; birth_year: string };

export function People() {
  const { people } = useContext(StarWarsContext);

  people.sort((a: PersonType, b: PersonType) => a.name.localeCompare(b.name));
  const getId = (endpoint: string) => {
    return endpoint.split("/").pop();
  };

  return (
    <Card className="flex flex-col gap-0 w-full">
      {people.map((person: any) => (
        <Link
          to={`person/${getId(person.url)}`}
          key={uuidv4()}
          className="w-full p-2 border-b"
        >
          <CardContent>
            <CardTitle>{person.name}</CardTitle>
            <span className="text-muted-foreground text-sm">
              {person.descsription}
            </span>
          </CardContent>
        </Link>
      ))}
    </Card>
  );
}
