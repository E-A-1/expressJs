import express from "express";
import controller from "../controllers/user.controller";
const router = express.Router();
router.use((req, res, next) => {
  console.log("Request Time:", Date.now());
  next()
});
router.post("/saveUser", controller.saveUser);
router.get("/getUser", controller.getUser);
router.put("/updateUser/:id", controller.updateUser);
router.get("/getAllUsers", controller.getAllUser);
router.delete("/deleteUser/:id", controller.deleteUser);

export = router;
