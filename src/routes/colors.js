import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import ColorController from '../controller/colors.js'
const router = express.Router()

router.get('/',ColorController.getAllColors)
router.post('/',ColorController.createColor)
router.get('/:id',ColorController.getColorById)
router.put('/:id',ColorController.editColorById)
router.delete('/:id',ColorController.deleteColorById)

export default router