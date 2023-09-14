import  connectDB  from "./utils/db";
import { app } from "./app";
require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
  connectDB()
});
