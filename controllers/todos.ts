import { NextFunction, Request, Response } from 'express';
import Todo from '../models/Todo';
import DB from '../config/db';
import logging from '../config/logging';

const NAMESPACE = 'TodoCtrl';

const all = async (req: Request, res: Response) => {
    try {
        const allTodos = await DB.query(Todo.all.query);
        res.json({
            success: true,
            msg: '',
            data: allTodos.rows,
        })
    } catch(errpr) {
        res.status(500).json({
            success: false,
            msg: 'Something went wrong..',
            data: {}
        })
    }
};

const addOne = async (req: Request, res: Response) => {
    try {
        const newTodo = await DB.query(Todo.insert.query, [req.body.text]);
        res.json({
            success: true,
            msg: `${newTodo.rowCount} rows inserted`,
            data: { }
        })
    } catch(errpr) {
        res.status(500).json({
            success: false,
            msg: 'Something went wrong..',
            data: {}
        })
    }
};

export default { 
    all,
    addOne,
 };