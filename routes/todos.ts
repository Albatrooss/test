import express from 'express';
import controller from '../controllers/todos';

const router = express.Router();

router.get('/', controller.all);
router.get('/add-one', controller.addOne);

export = router;