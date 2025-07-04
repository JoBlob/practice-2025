import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../../store/counter/counterSlice";

import { Card, CardContent, CardTitle } from "./card";
import { Button } from "./button";
import { useState } from "react";

export function Counter() {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const resetAmount = () => {
    setAmount(0);
    dispatch({ type: "counter/reset" });
  };

  return (
    <Card>
      <CardContent className="flex flex-col gap-2 p-6">
        <CardTitle>Counter {count} </CardTitle>
        <div className="flex gap-2 justify-center items-center">
          <Button onClick={() => dispatch(decrement())}>Decrement</Button>
          <Button onClick={() => dispatch(reset())}>Reset</Button>
          <Button onClick={() => dispatch(increment())}>Increment</Button>
        </div>
        <input
          type="number"
          defaultValue={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <Button onClick={() => dispatch(incrementByAmount(amount))}>
          Increment by {amount}
        </Button>
      </CardContent>
    </Card>
  );
}
