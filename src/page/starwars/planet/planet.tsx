import { useLoaderData } from "react-router";
import { Card, CardHeader } from "../../../components/ui/card";

const Person = () => {
  const { planet } = useLoaderData();
  console.log("data", planet);

  return (
    <Card className="mt-2">
      <CardHeader>{planet.name}</CardHeader>
    </Card>
  );
};

export default Person;
