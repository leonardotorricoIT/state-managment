import PropDrillingExample from "./components/PropDrillingExample";
import Counter from "./features/counter/Counter";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-8 justify-center items-start p-10 bg-gray-100">
      <div className="flex-1">
        <PropDrillingExample />
      </div>

      <div className="flex-1">
        <Counter />
      </div>
    </div>
  );
}
