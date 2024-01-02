import express, { Application } from "express"
import {todoRouter} from "../routes/todoRoute";
import cors from "cors"
export const expressService = async (app:Application) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/todo", todoRouter);
}
export default expressService;