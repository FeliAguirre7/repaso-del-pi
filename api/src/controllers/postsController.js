const { Post } = require("../db");
const axios = require("axios");

const getAllPosts = async () => {
  const dbPosts = await Post.findAll();
  const apiPosts = (
    await axios.get("https://jsonplaceholder.typicode.com/posts")
  ).data;
  return [...dbPosts, apiPosts];
};

const createPost = async (title, body, userId) => {
  const newPost = await Post.create({ title, body });
  await newPost.setUser(userId);
  return newPost;
};

module.exports = {
  createPost,
  getAllPosts,
};
