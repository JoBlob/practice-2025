import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

import { Card, CardContent, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export function Counter() {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <Card>
      <CardContent className="flex flex-col gap-2 p-6">
        <CardTitle>Counter {count} </CardTitle>
        <div className="flex gap-2 justify-center items-center">
          <Button onClick={() => dispatch(increment())}>Increment</Button>
          <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        </div>
      </CardContent>
    </Card>
  );
}
