"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoute = void 0;
const express_1 = require("express");
const ContactController_1 = require("../controllers/ContactController");
const auth_1 = require("../utils/middlewares/auth");
class ContactRoute {
    constructor() {
        this.getAllUserContact = (req, res) => {
            this.contactController.getAllUserContact(req, res);
        };
        this.getUserContactById = (req, res) => {
            this.contactController.getUserContactById(req, res);
        };
        this.createUserContact = (req, res) => {
            this.contactController.createUserContact(req, res);
        };
        this.updateUserContact = (req, res) => {
            this.contactController.updateUserContact(req, res);
        };
        this.deleteUserContact = (req, res) => {
            this.contactController.deleteUserContact(req, res);
        };
        this.path = '/contact';
        this.router = (0, express_1.Router)();
        this.contactController = new ContactController_1.ContactController();
        this.init();
    }
    init() {
        this.router.get(`${this.path}s`, auth_1.auth, this.getAllUserContact);
        this.router.get(`${this.path}/:id`, auth_1.auth, this.getUserContactById);
        this.router.post(`${this.path}`, auth_1.auth, this.createUserContact);
        this.router.put(`${this.path}/:id`, auth_1.auth, this.updateUserContact);
        this.router.delete(`${this.path}/:id`, auth_1.auth, this.deleteUserContact);
    }
}
exports.ContactRoute = ContactRoute;
//# sourceMappingURL=ContactRoute.js.map