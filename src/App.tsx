import "./App.css";
import { useReqHook } from "./hooks";
import type { Post } from "./types";

function App() {
  const { data, onRefetch, loading } = useReqHook({
    endPoint: "/posts",
  });

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <div className="card">
        {(data || []).map((i: Post) => (
          <pre key={i.id}>{JSON.stringify(i, null, 2)}</pre>
        ))}
      </div>

      <div className="card">
        <button onClick={onRefetch} disabled={loading}>
          refetch
        </button>
      </div>
    </>
  );
}

export default App;
