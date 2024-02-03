import { Router } from "express";
import AuthRoutes from './AuthRoutes.js'
import TodoRoute from './TodoRoute.js'
const router=Router()
router.use('/auth',AuthRoutes)
router.use('/todo',TodoRoute)
export default router;