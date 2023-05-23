"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.szModels = exports.szInstance = void 0;
const ContactModel_1 = require("../src/models/ContactModel");
const MessageModel_1 = require("../src/models/MessageModel");
const UserModel_1 = require("../src/models/UserModel");
const SequelizeSingleton_1 = require("./SequelizeSingleton");
exports.szInstance = SequelizeSingleton_1.SequelizeSingleton.getInstance();
exports.szModels = {
    User: (0, UserModel_1.User)(exports.szInstance),
    Message: (0, MessageModel_1.Message)(exports.szInstance),
    Contact: (0, ContactModel_1.Contact)(exports.szInstance),
};
//# sourceMappingURL=sequelize.js.map