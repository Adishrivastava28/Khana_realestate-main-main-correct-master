import express from "express";
import sendMail from "../controllers/sendMail.js"
import createProperty from "../controllers/propertyController.js";
import getProperty from "../controllers/getProperty.js";
import getPropertyDetail from "../controllers/getPropertyDetail.js";
const router = express.Router();
router.post("/send",sendMail);
router.post("/SaveProperty", createProperty);
router.get("/getProperty",getProperty);
router.get("/propertyDetail/:id",getPropertyDetail);
export default router;