import express from "express";
const router = express.Router();

// controllers
import { Complaints } from "../controllers/complaints";

router.get('/complaints',Complaints); 

export default router;
