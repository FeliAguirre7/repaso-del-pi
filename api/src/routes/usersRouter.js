const {Router} = require("express");

const usersRouter= Router();

usersRouter.get("/", (req, res) => {
    res.status(200).send("NIY: Esta ruta trae la info de los users")
});

usersRouter.get("/:id", (req, res) => {
    res.status(200).send("NIY: Esta ruta trae la info de un user determinado por id")
});

usersRouter.post("/", (req, res) => {
    res.status(200).send("NIY: Esta ruta crea un nuevo user")
});

//NIY: Not implemented yet.

module.exports = usersRouter