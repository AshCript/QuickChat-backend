"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const ContactRoute_1 = require("./routes/ContactRoute");
const MessageRoute_1 = require("./routes/MessageRoute");
const UserRoute_1 = require("./routes/UserRoute");
const port = Number(process.env.PORT) || 3005;
const routes = [
    new UserRoute_1.UserRoute(),
    new ContactRoute_1.ContactRoute(),
    new MessageRoute_1.MessageRoute(),
];
const app = new App_1.App(port, routes);
app.listen();
//# sourceMappingURL=index.js.map