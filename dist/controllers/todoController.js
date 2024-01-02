"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.getAllTodos = exports.createTodo = void 0;
const databaseService_1 = require("../services/databaseService");
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description } = req.body;
        const newTodo = yield databaseService_1.dbConnection.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);
        res.status(200).send({
            success: true,
            message: "Todo created successfully",
            data: newTodo.rows,
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.createTodo = createTodo;
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield databaseService_1.dbConnection.query("SELECT * FROM todo");
        res.status(200).send({
            success: true,
            message: "Todos fetched successfully",
            data: todos.rows,
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAllTodos = getAllTodos;
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const todo = yield databaseService_1.dbConnection.query("SELECT * FROM todo WHERE todo_id = $1", [
            id,
        ]);
        res.status(200).send({
            success: true,
            message: "Todo fetched successfully",
            data: todo.rows,
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getTodo = getTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { description } = req.body;
        const updatedTodo = yield databaseService_1.dbConnection.query("UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *", [description, id]);
        res.status(200).send({
            success: true,
            message: "Todo updated successfully",
            data: updatedTodo.rows,
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield databaseService_1.dbConnection.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.status(200).send({
            success: true,
            message: "Todo deleted successfully",
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todoController.js.map