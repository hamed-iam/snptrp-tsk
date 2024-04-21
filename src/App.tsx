import { useState } from "react";
import "./App.css";
import { useReqHook } from "./hooks";
import type { Post } from "./types";

function App() {
  const [count, setCount] = useState(0);
  const { data, onRefetch, loading } = useReqHook<Post[]>("/posts");

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <div className="card">
        {data?.map((i) => (
          <pre key={i.id}>{JSON.stringify(i, null, 2)}</pre>
        ))}
      </div>

      <div className="card">
        <button onClick={onRefetch} disabled={loading}>
          refetch
        </button>
        <p>{count}</p>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </>
  );
}

export default App;
