const { Router } = require("express");

const postsRouter = Router();

postsRouter.get("/", (req, res) => {
    res.status(200).send("NIY: Esta ruta trae la info de los posts")
})

//NIY: Not implemented yet.

module.exports = postsRouter;