import { useLoaderData } from "react-router";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";

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
  const { person } = useLoaderData() as { person: Person };

  return (
    <Card className="mt-2 justify-start">
      <CardHeader className="font-bold text-lg">{person.name}</CardHeader>
      <CardContent>
        <div className="my-6 w-full overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="even:bg-muted m-0 border-t p-0">
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  Stats
                </th>
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(person).map(([key, value]) => (
                <tr className="even:bg-muted m-0 border-t p-0">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    {key}
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default Person;
