import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import TshirtController from '../controller/tShirts.js'
const router = express.Router()

router.get('/',TshirtController.getAllTshirt)
router.post('/',TshirtController.createTshirt)
router.get('/:id',TshirtController.getTshirtById)
router.put('/:id',TshirtController.editDressById)
router.delete('/:id',TshirtController.deleteDressById)

export default router