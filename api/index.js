const app = require("./src/app");
const { sequelize } = require("./src/db");

app.listen(3001, () => {
  sequelize.sync({ alter: true });
  console.log("listening on port 3001");
});
