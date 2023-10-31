const { Router } = require("express");

const postsRouter = Router();
const { createPostHandler } = require("../handlers/postsHandlers");

postsRouter.get("/", (req, res) => {
  res.status(200).send("NIY: Esta ruta trae la info de los posts");
});

postsRouter.post("/", createPostHandler);

//NIY: Not implemented yet.

module.exports = postsRouter;
