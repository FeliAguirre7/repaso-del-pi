const { Router } = require("express");

const usersRouter = Router();

const {
  createUserHandler,
  getUserHandler,
  getUsersHandler,
} = require("../handlers/usersHandlers");

const validate = (req, res, next) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone)
    return res.status(400).json({ error: "Missing data" });
  next();
};

usersRouter.get("/", getUsersHandler);

usersRouter.get("/:id", getUserHandler);

usersRouter.post("/", validate, createUserHandler);

module.exports = usersRouter;
