import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

import { API_URL } from "./util";

import styles from "./App.module.css";

import "./styles.css";

function App() {
  const [posts, setPosts] = useState([]);

  function fetchPosts() {
    axios
      .get(API_URL)
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  function deletePost(id) {
    axios
      .delete(`${API_URL}/${id}`)
      .then((response) => {
        if (response.status === 200) {
          fetchPosts();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <Header />
      <main className={styles.Main}>
        <PostList posts={posts} deletePost={deletePost} />
        <PostForm fetchPosts={fetchPosts} />
      </main>
    </div>
  );
}

export default App;
