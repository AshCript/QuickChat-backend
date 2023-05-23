import { App } from './App';
import { IRoute } from './interfaces/utils/IRoute';
import { ContactRoute } from './routes/ContactRoute';
import { MessageRoute } from './routes/MessageRoute';
import { UserRoute } from './routes/UserRoute';

const port = Number(process.env.PORT) || 3005;
const routes: IRoute[] = [
  new UserRoute(),
  new ContactRoute(),
  new MessageRoute(),
];

const app = new App(port, routes);

// const io = app.getIo();

// io.on('connection', (socket) => {
//   console.log('New user connection');

//   socket.on('join', (userInfo, cb) => {
//     cb();
//   });

//   socket.on('disconnect', () => {
//     console.log('User had left.');
//   });
// });

app.listen();
