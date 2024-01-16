import express, { Router } from 'express';
import SearchController from '../controllers/search.controller';

const searchRouter: Router = express.Router();

searchRouter.get('/:query', SearchController.search);

export default searchRouter;
