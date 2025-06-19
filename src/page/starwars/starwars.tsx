import { useState } from "react";

import { Progress } from "../../components/ui/progress";
import { People } from "../../redux/features/people/people";
import { Planets } from "../../redux/features/planet/planets";
import { Counter } from "../../redux/features/counter/counter";

function StarWars() {
  // store value?
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Progress />;
  }

  return (
    <>
      <Counter />
    </>
  );
}

export default StarWars;
