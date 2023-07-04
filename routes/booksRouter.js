import {Router} from "express"
import { getBooks, signBook } from "../controllers/bookController.js";


const bookRouter = Router()

bookRouter.post("/signbook", signBook)
bookRouter.get("/allbooks", getBooks)

export default bookRouter;