import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import imageRouter from "./routes/imageRoutes.js"
import userRouter from "./routes/userRoutes.js"

const port = process.env.PORT || 4000
const app= express()

//This is a middleware in Express.js used to parse incoming requests with JSON payloads.
app.use(express.json());

//It is used in an Express.js app to enable CORS (Cross-Origin Resource Sharing) — which allows your backend server to accept requests from different origins (like a frontend app running on another port or domain).
app.use(cors());
await connectDB()


app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res) => {
    res.send('API Working')
  });

app.listen(port, () => console.log(`Server started on PORT:${port}`))