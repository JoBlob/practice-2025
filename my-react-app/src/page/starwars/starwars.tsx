import { useState } from "react";

import { People } from "./components/people";
import { Planets } from "./components/planets";
import { Progress } from "../../components/ui/progress";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

function StarWars() {
  // store value?
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Progress />;
  }

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default StarWars;
