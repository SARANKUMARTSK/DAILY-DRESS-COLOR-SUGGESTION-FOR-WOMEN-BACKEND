import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import TopsController from '../controller/tops.js'
const router = express.Router()

router.get('/',TopsController.getAllTops)
router.post('/',TopsController.createTops)
router.get('/:id',TopsController.getTopsById)
router.put('/:id',TopsController.editDressById)
router.delete('/:id',TopsController.deleteDressById)

export default router