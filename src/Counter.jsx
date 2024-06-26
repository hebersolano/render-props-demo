// COMPOUND COMPONENT PATTER
import { createContext, useContext, useState } from "react";

// 1. create context
const CounterContext = createContext();

// 2. create parent component
function Counter({ children }) {
  const [count, setCount] = useState(0);

  const increase = () => setCount((count) => count + 1);
  const decrease = () => setCount((count) => count - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

// 3. create child component to help implement the common task
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}

function Label({ children }) {
  return <span>{children}</span>;
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}

function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

// 4. add child components as properties to parent component
Object.assign(Counter, { Count, Label, Increase, Decrease });
console.dir(Counter);

export default Counter;
