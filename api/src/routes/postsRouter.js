const { Router } = require("express");

const postsRouter = Router();
const {
  createPostHandler,
  getPostsHandler,
} = require("../handlers/postsHandlers");

postsRouter.get("/", getPostsHandler);

postsRouter.post("/", createPostHandler);

module.exports = postsRouter;
