import { Router } from 'express';

export interface IRoute {
  readonly path: string;
  router: Router;
}
