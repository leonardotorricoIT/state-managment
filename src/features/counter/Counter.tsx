import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div className="align-center justify-center">
      <h2>Redux Toolkit + TypeScript</h2>
      <h3>Count: {count}</h3>

      <div className="flex justify-center gap-4">
        <button onClick={() => dispatch(increment())}>+ Increment</button>
        <button onClick={() => dispatch(decrement())}>- Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div className="mt-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Amount"
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Add {amount}
        </button>
      </div>
    </div>
  );
}
