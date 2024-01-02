import express from "express";
import { ENDPOINTS } from "../utils/endpoints";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodo,
  updateTodo,
} from "../controllers/todoController";
const routes = express.Router();

routes.post(ENDPOINTS.CREATE, createTodo);
routes.get(ENDPOINTS.ALL_TODOS, getAllTodos);
routes.get(ENDPOINTS.TODO, getTodo);
routes.put(ENDPOINTS.UPDATE, updateTodo);
routes.delete(ENDPOINTS.DELETE, deleteTodo);

export { routes as todoRouter };
