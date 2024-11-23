"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const users_controller_1 = require("../controllers/users_controller");
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
usersRoutes.post('/users', users_controller_1.createUser);
usersRoutes.post('/getUsers', users_controller_1.getUsers);
