import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Nb click: {count}</p>
      <button onClick={() => setCount(n => n + 1)}>increment</button>
    </div>
  );
}

export default App;
