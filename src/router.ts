import {Router, Request, Response} from "express"
import { createMovie } from "./controllers/movieControllers";


// validations
import { validate } from "./middleware/handleValidation";
import { movieCreateValidations } from "./middleware/movieValidaton";

const router = Router()

export default router
    .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working!");
})
    .post("/movie", movieCreateValidations(), validate, createMovie);

