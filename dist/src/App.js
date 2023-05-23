"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
class App {
    constructor(port, routes) {
        this.randomHappy = () => {
            var randNum = parseInt(String(Math.random() * 10));
            switch (randNum) {
                case 0:
                    return '😋';
                    break;
                case 1:
                    return '😘';
                    break;
                case 2:
                    return '😂';
                    break;
                case 3:
                    return '😁';
                    break;
                case 4:
                    return '😝';
                    break;
                case 5:
                    return '😛';
                    break;
                case 6:
                    return '😜';
                    break;
                case 7:
                    return '🤭';
                    break;
                case 8:
                    return '🙃';
                    break;
                case 9:
                    return '🤤';
                    break;
                default:
                    return '😳';
                    break;
            }
        };
        this.port = port;
        this.rootPath = '/api';
        this.app = (0, express_1.default)();
        this.app.disable('x-powered-by');
        this.server = (0, http_1.createServer)(this.app);
        this.io = new socket_io_1.default.Server(this.server);
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeSocketIo();
        this.app.use(({ res }) => {
            const message = 'Unable to find the requested resource! Check the URL and try again.';
            if (res)
                res.status(404).json({ message });
        });
    }
    getApp() {
        return this.app;
    }
    getIo() {
        return this.io;
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log('\n---------------------------------------------');
            console.log(`Application started on http://${process.env.DB_HOSTNAME}:${this.port} ✅`);
            console.log('Application using socket.io');
            console.log(`Database : ${process.env.DB_NAME} ✨`);
            console.log('---------------------------------------------\n');
        });
    }
    initializeMiddlewares() {
        this.app.use((0, cors_1.default)({ origin: '*' })).use(express_1.default.json());
    }
    initializeRoutes(routes) {
        console.log('\n===============================');
        console.log('ROUTE INITIALIZATION 🧭 : ');
        console.log('------------------------------');
        if (routes.length === 0) {
            console.log('No route to initialize yet! 🥴');
        }
        else {
            routes.forEach((route) => {
                this.app.use(`${this.rootPath}`, route.router);
                console.log(`[OK] ${this.rootPath}${route.path} initialized! ${this.randomHappy()}`);
            });
        }
        console.log('===============================\n');
    }
    initializeSocketIo() {
        this.io.on('connection', (socket) => {
            console.log('Hello Socket.io');
            console.log('Socket : ', socket);
            socket.on('sendMessage', (payload) => {
                console.log('Payload : ', payload);
                this.io.emit('receiveMessage', payload);
            });
        });
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map