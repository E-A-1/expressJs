import express, { Express } from "express";
import routes, { route } from "./routes/user.route";
import http from "http";
import { myDataSource } from "./config/dbConfig";
const app = express();
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: any) => {
    console.error("Error during Data Source initialization:", err);
  });
const router: Express = express();
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello , this express api");
});
const port = process.env.PORT || 3000;

/** Routes */

router.use("/", routes);
const httpServer = http.createServer(router);
httpServer.listen(port, () => console.log(`App running on port ${port}`));
