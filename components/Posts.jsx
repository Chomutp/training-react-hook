import React, { useState, useEffect } from "react";
import PostSnippet from "./PostSnippet.jsx";
import api from "../mock_api.js";
import _ from "lodash";
import db from "../firebase";
import { PageHeader, Card } from "antd";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let postsRef = db.collection("posts");
    postsRef.get().then(posts => {
      posts.forEach(post => {
        let data = post.data();
        let { id } = post;
        // console.log(data, id);

        let payload = {
          id,
          ...data
        };
        setPosts(posts => [...posts, payload]);
      });
    });
  }, []);

  return (
    <div className="posts_container">
      <div className="page_header_container">
        <PageHeader
          style={{ border: "1px solid rgb(235, 237, 240)", marginTop: "20px" }}
          title="Posts"
        />
      </div>

      <div className="articles_container">
        {_.map(posts, (article, idx) => {
          return (
            <PostSnippet
              key={idx}
              id={article.id}
              title={article.title}
              content={article.content.substring(1, 1000)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
