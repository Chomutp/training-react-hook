import React from "react";
import Posts from "./Posts.jsx";
import Post from "./Post.jsx";
import CreatePost from "./CreatePost";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="app_container">
      <Router>
        <CreatePost default />
        <Posts path="posts" />
        <Post path="post/:id" />
      </Router>
    </div>
  );
}

export default App;
