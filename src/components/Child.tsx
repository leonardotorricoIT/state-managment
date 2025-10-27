import GrandChild from "./GrandChild";

interface ChildProps {
  count: number;
  increment: () => void;
}

export default function Child({ count, increment }: ChildProps) {
  return (
    <div className="p-4 bg-blue-100 rounded-xl">
      <h3 className="font-medium mb-2">Child Component</h3>
      <GrandChild count={count} increment={increment} />
    </div>
  );
}
