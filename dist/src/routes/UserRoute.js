"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
class UserRoute {
    constructor() {
        this.getUserLogin = (req, res) => {
            this.userController.getUserByLogin(req, res);
        };
        this.getAllUsers = (req, res) => {
            this.userController.getAllUsers(req, res);
        };
        this.getUserById = (req, res) => {
            this.userController.getUserById(req, res);
        };
        this.createUser = (req, res) => {
            this.userController.createUser(req, res);
        };
        this.updateUser = (req, res) => {
            this.userController.updateUser(req, res);
        };
        this.deleteUser = (req, res) => {
            this.userController.deleteUser(req, res);
        };
        this.path = '/user';
        this.router = (0, express_1.Router)();
        this.userController = new UserController_1.UserController();
        this.init();
    }
    init() {
        this.router.post('/login', this.getUserLogin);
        this.router.get(`${this.path}s`, this.getAllUsers);
        this.router.get(`${this.path}/:id`, this.getUserById);
        this.router.post(`${this.path}`, this.createUser);
        this.router.put(`${this.path}/:id`, this.updateUser);
        this.router.delete(`${this.path}/:id`, this.deleteUser);
    }
}
exports.UserRoute = UserRoute;
//# sourceMappingURL=UserRoute.js.map