interface GrandChildProps {
  count: number;
  increment: () => void;
}

export default function GrandChild({ count, increment }: GrandChildProps) {
  return (
    <div className="p-4 bg-blue-50 rounded-xl shadow-sm text-center">
      <p className="text-lg font-semibold">GrandChild Count: {count}</p>
      <button
        onClick={increment}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
}
