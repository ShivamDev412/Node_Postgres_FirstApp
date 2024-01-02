import { Request, Response } from "express";
import { dbConnection as pool } from "../services/databaseService";
export const createTodo = async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.status(200).send({
      success: true,
      message: "Todo created successfully",
      data: newTodo.rows,
    });
  } catch (error) {
    console.error(error);
  }
};
export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await pool.query("SELECT * FROM todo");
    res.status(200).send({
      success: true,
      message: "Todos fetched successfully",
      data: todos.rows,
    });
  } catch (error) {
    console.error(error);
  }
};
export const getTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.status(200).send({
      success: true,
      message: "Todo fetched successfully",
      data: todo.rows,
    });
  } catch (error) {
    console.error(error);
  }
};
export const updateTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { description } = req.body;
    const updatedTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
      [description, id]
    );
    res.status(200).send({
      success: true,
      message: "Todo updated successfully",
      data: updatedTodo.rows,
    });
  } catch (error) {
    console.error(error);
  }
};
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.status(200).send({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.error(error);
  }
};
