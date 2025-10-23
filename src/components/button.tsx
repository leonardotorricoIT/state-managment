function button({
  count,
  setCount,
}: {
  count: number;
  setCount: (value: number) => void;
}) {
  const changeBackgoround = (color: string) => {
    document.body.style.backgroundColor = color;
  };
  return (
    <div className="flex gap-4">
      <button
        className=" border p-2 rounded-xl cursor-pointer "
        onClick={() => setCount(count + 1)}
      >
        Increment {count}
      </button>
      <button
        className="border p-2 rounded-xl cursor-pointer"
        onClick={() => {
          setCount(0);
          changeBackgoround("white");
        }}
      >
        Reset
      </button>
      <button
        className="border p-2 rounded-xl cursor-pointer"
        onClick={() => changeBackgoround("lightblue")}
      >
        Background
      </button>
    </div>
  );
}

export default button;
