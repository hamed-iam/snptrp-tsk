import { useState } from "react";
import "./App.css";
import { useReqHook } from "./hooks";
import type { Post, Comment } from "./types";

function App() {
  const [count, setCount] = useState(0);
  const {
    data: postsData,
    onRefetch: onRefetchPosts,
    loading: isPostsLoading,
  } = useReqHook<Post[]>("/posts");
  const {
    data: commentsData,
    onRefetch: onRefetchComments,
    loading: isCommentsLoading,
  } = useReqHook<Comment[]>("/comments", { params: { postId: 1 } });

  return (
    <>
      {isPostsLoading && <h1>Posts Loading...</h1>}
      <div className="card">
        <h2>Posts</h2>
        {postsData?.map((i) => (
          <pre key={i.id}>{JSON.stringify(i, null, 2)}</pre>
        ))}
      </div>

      {isCommentsLoading && <h1>Comments Loading...</h1>}
      <div className="card">
        <h2>Comments</h2>
        {commentsData?.map((i) => (
          <pre key={i.id}>{JSON.stringify(i, null, 2)}</pre>
        ))}
      </div>

      <div className="card">
        <button onClick={onRefetchPosts} disabled={isPostsLoading}>
          refetch posts
        </button>
        <button onClick={onRefetchComments} disabled={isCommentsLoading}>
          refetch comments
        </button>
        <p>{count}</p>

        {/* for rendering test */}
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </>
  );
}

export default App;
