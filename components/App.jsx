import React from "react";
import Posts from "./Posts.jsx";
import Post from "./Post.jsx";
import CreatePost from "./CreatePost";
import { Router, Link } from "@reach/router";
import { Menu } from "antd";
import { AppstoreOutlined, AppstoreAddOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="app_container">
      <div className="app_main_navigation">
        <Menu mode="horizontal">
          <Menu.Item key="mail">
            <AppstoreOutlined />
            <Link to="/posts">Posts</Link>
          </Menu.Item>
          <Menu.Item key="app">
            <AppstoreAddOutlined />
            <Link to="/create_post">Create Post</Link>
          </Menu.Item>
        </Menu>
      </div>

      <Router>
        <Posts path="posts" default />
        <Post path="post/:id" />
        <CreatePost path="create_post" />
      </Router>
    </div>
  );
}

export default App;
