import { useState } from "react";
import { Progress } from "../../components/ui/progress";
import { Counter } from "../../components/ui/counter";

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
