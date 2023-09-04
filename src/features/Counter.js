import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p className="text-3xl">Counter</p>
      <p className="mt-10 text-3xl">{count}</p>
      <div className="mt-10">
        <button
          className="border-solid border-2 border-blue-700 h-9 w-20 text-2xl bg-blue-700 hover:bg-sky-500"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="ml-8 border-solid border-2 border-blue-700 h-9 w-20 text-2xl bg-blue-700 hover:bg-sky-500"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <input
        className="border-soloid border-2 border-gray-800 mt-10 text-2xl"
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button
          className="mt-8 border-solid border-2 border-green-700  text-2xl bg-green-700 hover:bg-emerald-500"
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </button>
      </div>
      <button
        className="mt-8 border-solid border-2 border-red-700  text-2xl bg-red-700 "
        onClick={resetAll}
      >
        Reset
      </button>
    </section>
  );
};

export default Counter;
