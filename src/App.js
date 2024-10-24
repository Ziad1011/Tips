import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(null);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  const tip = bill * ((tip1 + tip2) / 2 / 100);

  function handleReset() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Tip tip={tip1} setTip={setTip1}>
        How did you like the service?
      </Tip>
      <Tip tip={tip2} setTip={setTip2}>
        How did your friend like the service?
      </Tip>
      {bill > 0 && (
        <>
          <Total bill={bill} avgTip={tip} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div>
      <span>
        <label>How much was the bill?</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </span>
    </div>
  );
}

function Tip({ tip1, setTip, children }) {
  return (
    <div>
      <span>
        <label>{children}</label>
        <select value={tip1} onChange={(e) => setTip(Number(e.target.value))}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </span>
    </div>
  );
}

function Total({ bill, avgTip }) {
  return (
    <h3>
      You pay ${bill + avgTip} (${bill} + ${avgTip} tip)
    </h3>
  );
}

function Reset({ bill, handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
