import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment, decrement, reset } from "./counterSlice";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Redux Toolkit + TypeScript
      </h2>
      <h3 className="text-lg mb-4 text-blue-700">Count: {count}</h3>

      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          + Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          - Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
