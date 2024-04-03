import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router()
import UserController from '../controller/user.js'

router.get('/',UserController.getAllUsers)
router.get('/:id',UserController.getUserById)
router.put('/edit-user/:id',UserController.editUserById)
router.post('/signup',UserController.signUp)
router.post('/signin',UserController.signIn)
router.post('/forgot-mail',UserController.forgotMail)
router.post('/reset-password',UserController.resetPassword)
router.delete('/delete-user/:id',UserController.deleteUserById)

export default router   