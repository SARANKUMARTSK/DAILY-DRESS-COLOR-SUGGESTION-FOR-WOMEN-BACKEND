import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import DatesController from '../controller/dates.js'
const router = express.Router()

router.get('/',DatesController.getAllDates)
router.post('/',DatesController.createDate)
router.get('/:id',DatesController.getDateById)
router.put('/:id',DatesController.editDateById)
router.delete('/:id',DatesController.deleteDateById)

export default router