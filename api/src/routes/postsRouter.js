const { Router } = require("express");

const postsRouter = Router();

postsRouter.get("/", (req, res) => {
    res.status(200).send("NIY: Esta ruta trae la info de los posts")
})

postsRouter.post("/", (req,res)=>{
    res.send("NIY: esta ruta crea un post");
})

//NIY: Not implemented yet.

module.exports = postsRouter;