import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-2 text-gray-800">
        Prop Drilling Example
      </h2>
      <Child count={count} increment={increment} />
    </div>
  );
}
