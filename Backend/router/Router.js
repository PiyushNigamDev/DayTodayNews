import express from "express"

 import * as studentRoutes from "../Controller/student.controller.js"
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

  
const router=express.Router()

 
router.post("/",studentRoutes.createStudent)
router.get("/gets",studentRoutes.getUser)
router.put("/:id",auth,upload.single("thumbnail"), studentRoutes.updateNews)
router.get("/:id",studentRoutes.getbyId)
router.delete("/:id",auth, studentRoutes.delUser)
router.post("/upload",auth,upload.single("thumbnail"),studentRoutes.uploadNews)

router.post("/register", studentRoutes.registerStudent)
router.post("/login",studentRoutes.loginStudent)

export default router