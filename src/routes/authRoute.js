import express from "express";
import {
  forgotPassowordController,
  loginController,
  registerController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
// router object
const router = express.Router();

// Routing
// Register || METHOD POST
router.post("/register", registerController);

// Login || POST METHOD
router.post("/login", loginController);

// FORGOT PASSWORD || METHOD POST
router.post("/forgot-password", forgotPassowordController);

// Protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// Protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update profile
router.put("/profile", requireSignIn, updateProfileController);

// orders
router.get("/orders", requireSignIn, getOrdersController);

// orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

//order status update
router.get(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
