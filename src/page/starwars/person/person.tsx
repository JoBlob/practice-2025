import { useLoaderData } from "react-router";
import { Card, CardDescription, CardHeader } from "../../../components/ui/card";

type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

const Person = () => {
  const { person } = useLoaderData();

  return (
    <Card className="mt-2">
      <CardHeader>{person.name}</CardHeader>
    </Card>
  );
};

export default Person;
