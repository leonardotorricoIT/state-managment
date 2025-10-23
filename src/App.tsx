import { useState } from "react";
import Button from "./components/button";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="justify-center items-center flex h-screen">
      <Button count={count} setCount={setCount} />
    </div>
  );
}

export default App;
