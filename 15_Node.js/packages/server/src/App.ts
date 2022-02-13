import express, { RequestHandler } from 'express';
import { Methods } from './Methods';

export class App {
  private app: express.Application;
  private port: number;
  private host: string;

  public constructor() {
    this.app = express();
    this.port = 3000;
    this.host = 'localhost';
  }

  public setRoute = (url: string, method: Methods, handler: RequestHandler) => {
    if (this.app) {
      switch (method) {
        case Methods.GET:
          this.app.get(url, handler);
          break;
        case Methods.PUT:
          this.app.put(url, handler);
          break;
        case Methods.DELETE:
          this.app.delete(url, handler);
          break;
        case Methods.POST:
          this.app.post(url, handler);
          break;
        default:
          throw new Error('No such method');
      }
    }
  };

  public setStatic = (path: string) => {
    this.app.use(express.static(path));
  };

  public setMiddleware = (middleware: express.Handler) => {
    this.app.use(middleware);
  };

  public run = () => {
    this.app.listen(this.port, this.host, () => {
      console.log(`Server is run on port ${this.port}`);
    });
  };
}
