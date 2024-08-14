import express from "express";
import { fetchUser, createUser, update , deleteBlog} from "../controllers/userController.js";


const rout = express.Router();


rout.post("/create_users",createUser )
rout.get("/fetch_users", fetchUser);
rout.put("/update_users/:id", update);
rout.delete("/delete_users/:id", deleteBlog);


export default rout;