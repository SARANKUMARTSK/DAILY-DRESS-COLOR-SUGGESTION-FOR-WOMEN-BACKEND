import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import PhantController from '../controller/phants.js'
const router = express.Router()

router.get('/',PhantController.getAllPhants)
router.post('/',PhantController.createPhant)
router.get('/:id',PhantController.getPhantById)
router.put('/:id',PhantController.editDressById)
router.delete('/:id',PhantController.deleteDressById)

export default router