import express, { Express } from 'express';
import { IRoute } from './interfaces/utils/IRoute';
import socketio from 'socket.io';
import { createServer, Server } from 'http';
import cors from 'cors';

export class App {
  private rootPath: string;
  private readonly port: number;
  private app: Express;
  private server: Server;
  private io: socketio.Server;

  constructor(port: number, routes: IRoute[]) {
    this.port = port;
    this.rootPath = '/api';
    this.app = express();
    this.app.disable('x-powered-by');
    this.server = createServer(this.app);
    this.io = new socketio.Server(this.server);

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSocketIo();

    this.app.use(({ res }) => {
      const message =
        'Unable to find the requested resource! Check the URL and try again.';
      if (res) res.status(404).json({ message });
    });
  }

  getApp(): Express {
    return this.app;
  }

  getIo(): socketio.Server {
    return this.io;
  }

  listen(): void {
    this.server.listen(this.port, () => {
      console.log('\n---------------------------------------------');
      console.log(
        `Application started on http://${process.env.DB_HOSTNAME}:${this.port} ✅`
      );
      console.log('Application using socket.io');
      console.log(`Database : ${process.env.DB_NAME} ✨`);
      console.log('---------------------------------------------\n');
    });
  }

  private initializeMiddlewares() {
    this.app.use(cors({ origin: '*' })).use(express.json());
  }

  private initializeRoutes(routes: IRoute[]) {
    console.log('\n===============================');
    console.log('ROUTE INITIALIZATION 🧭 : ');
    console.log('------------------------------');
    if (routes.length === 0) {
      console.log('No route to initialize yet! 🥴');
    } else {
      routes.forEach((route) => {
        this.app.use(`${this.rootPath}`, route.router);
        console.log(
          `[OK] ${this.rootPath}${
            route.path
          } initialized! ${this.randomHappy()}`
        );
      });
    }
    console.log('===============================\n');
  }

  private initializeSocketIo() {
    this.io.on('connection', (socket) => {
      console.log('Hello Socket.io');
      console.log('Socket : ', socket);
      socket.on('sendMessage', (payload) => {
        console.log('Payload : ', payload);
        this.io.emit('receiveMessage', payload);
      });
    });
  }

  private randomHappy = (): string => {
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
}
