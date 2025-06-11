import { useEffect, useState } from "react";
import { FetchStarWarsPeople, FetchStarWarsPlanets } from "./api";
import {
  StarWarsContext,
  type StarWarsContextType,
} from "../../context/star-wars-context";
import { People } from "./components/people";
import { Planets } from "./components/planets";
import { Progress } from "../../components/ui/progress";

function StarWars() {
  const [starwarsContext, setStarWarsContext] = useState<StarWarsContextType>();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchStarWarsContext() {
    setIsLoading(true);
    const people = await FetchStarWarsPeople();
    const planet = await FetchStarWarsPlanets();

    setStarWarsContext(() => ({
      people: people,
      planets: planet,
    }));
  }

  useEffect(() => {
    fetchStarWarsContext();
    setIsLoading(false);
  }, []);

  if (isLoading || !starwarsContext) {
    return <Progress />;
  }

  return (
    <StarWarsContext value={starwarsContext}>
      <div className="flex gap-8">
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
