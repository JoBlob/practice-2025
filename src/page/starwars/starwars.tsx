import { useEffect, useState } from "react";
import {
  StarWarsContext,
  type StarWarsContextType,
} from "../../context/star-wars-context";
import { People } from "./components/people";
import { Planets } from "./components/planets";
import { Progress } from "../../components/ui/progress";
import { useLoaderData } from "react-router";

function StarWars() {
  const [starwarsContext, setStarWarsContext] = useState<StarWarsContextType>();
  const data = useLoaderData();

  useEffect(() => {
    setStarWarsContext(data);
  }, []);

  if (!starwarsContext) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Progress />
      </div>
    );
  }

  return (
    <StarWarsContext value={starwarsContext}>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <h2 className="mb-4 p-4 text-center text-lg font-semibold">People</h2>
          <People />
        </div>
        <div className="flex-1 ">
          <h2 className="mb-4 p-4 text-center text-lg font-semibold">
            Planets
          </h2>
          <Planets />
        </div>
      </div>
    </StarWarsContext>
  );
}

export default StarWars;
