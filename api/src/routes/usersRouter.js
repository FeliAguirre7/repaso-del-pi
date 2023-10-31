const { Router } = require("express");

const usersRouter = Router();

const { createUserHandler, getUserHandler, getUsersHandler } = require("../handlers/usersHandlers")


usersRouter.get("/", getUsersHandler)

usersRouter.get("/:id", getUserHandler);

usersRouter.post("/", createUserHandler);

module.exports = usersRouter
