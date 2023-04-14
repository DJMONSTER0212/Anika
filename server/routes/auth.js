
import express from "express";

const router = express.Router();

// controllers
const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");
const {register} = require("../controllers/register")
router.get("/", (req, res) => {
  return res.json({
    data: "API Working!!!",
  });
});
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/complaint_register",register);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
