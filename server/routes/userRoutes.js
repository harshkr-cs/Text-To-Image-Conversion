import express from 'express'
import { loginUser, paymentRazorpay, registerUser, userCredits, verifyRazorpay } from '../controllers/userController.js';
import authUser from '../middlewares/auth.js';

//creating a new router instance using Express.js for specifically for handling routes related to "users"
const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits',authUser, userCredits)
userRouter.post('/pay-razor',authUser, paymentRazorpay)
userRouter.post('/verify-razor',verifyRazorpay)

export default userRouter