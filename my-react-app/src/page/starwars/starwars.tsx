import { useEffect, useState } from "react";
import { FetchStarWarsPeople, FetchStarWarsPlanets } from "./api";
import { CircularProgress, Grid, Typography } from "@mui/material";
import {
  StarWarsContext,
  type StarWarsContextType,
} from "../../context/star-wars-context";
import { People } from "./components/people";
import { Planets } from "./components/planets";

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
    return <CircularProgress />;
  }

  return (
    <StarWarsContext value={starwarsContext}>
      <Grid container spacing={32}>
        <Grid size={6}>
          <Typography variant="h2">People</Typography>
          <People />
        </Grid>
        <Grid size={6}>
          <Typography variant="h2">Planet</Typography>
          <Planets />
        </Grid>
      </Grid>
    </StarWarsContext>
  );
}

export default StarWars;
