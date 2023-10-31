const { createPost } = require("../controllers/postsController");

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
};
