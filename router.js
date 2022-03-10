import {Router} from "express";
import userController from "./userController.js";

const router = new Router();
router.get('/users', userController.getAll)
router.post('/createUser', userController.create)
router.delete('/deleteUser/:id', userController.delete)
router.put('/updateUser', userController.update)
router.get('/users/:id', userController.findOne)
export default router;