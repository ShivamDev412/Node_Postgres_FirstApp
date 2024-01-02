"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const endpoints_1 = require("../utils/endpoints");
const todoController_1 = require("../controllers/todoController");
const routes = express_1.default.Router();
exports.todoRouter = routes;
routes.post(endpoints_1.ENDPOINTS.CREATE, todoController_1.createTodo);
routes.get(endpoints_1.ENDPOINTS.ALL_TODOS, todoController_1.getAllTodos);
routes.get(endpoints_1.ENDPOINTS.TODO, todoController_1.getTodo);
routes.put(endpoints_1.ENDPOINTS.UPDATE, todoController_1.updateTodo);
routes.delete(endpoints_1.ENDPOINTS.DELETE, todoController_1.deleteTodo);
//# sourceMappingURL=todoRoute.js.map