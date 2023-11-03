const { createPost, getAllPosts } = require("../controllers/postsController");

const getPostsHandler = async (req, res) => {
  const posts = await getAllPosts();

  res.status(200).json(posts);
};

const createPostHandler = async (req, res) => {
  const { title, body, userId } = req.body;

  try {
    const newPost = await createPost(title, body, userId);
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  createPostHandler,
  getPostsHandler,
};
