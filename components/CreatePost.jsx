import React, { useState } from "react";
import db from "../firebase";
import { PageHeader, Input, Button } from "antd";
import { navigate } from "@reach/router";
const { TextArea } = Input;

const CreatePost = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = event => setTitle(event.target.value);

  const onContentChange = event => setContent(event.target.value);

  const clickCreatePost = () => {
    let postRef = db.collection("posts");

    let payload = { title, content };

    postRef.add(payload).then(function(doc) {
      console.log("Document Successfully Written!", doc.id);
    });

    setTitle("");
    setContent("");
    navigate("/posts/");
  };
  return (
    <div className="create_post_container">
      <div className="page_header_container">
        <PageHeader
          style={{ border: "1px solid rgb(235, 237, 240)", marginTop: "20px" }}
          title="Create Post"
        />
      </div>

      <div className="post_inputs_container">
        <div className="post_input_container">
          <div className="post_input_title">
            <h2>Post Title</h2>
          </div>

          <div className="post_input">
            <Input placeholder="Post Title" onChange={onTitleChange} />
          </div>
        </div>

        <div className="post_input_container">
          <div className="post_input_title">
            <h2>Post Content</h2>
          </div>

          <div className="post_input">
            <TextArea rows={10} onChange={onContentChange} />
          </div>

          <div className="post_input_button">
            <Button type="primary" size="large" onClick={clickCreatePost}>
              Create Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
