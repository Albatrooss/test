import express from 'express';
import http from 'http';
import logging from '../config/logging';
import config from '../config/config';

import todoRoutes from '../routes/todos';
const app = express();

const NAMESPACE = 'Server';

app.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATE: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })

    next();
})

app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next()
})

app.use(express.json());
app.use('/api/todos', todoRoutes);

app.use((req, res, next) => {
    const error =  new Error('Not found');

    res.status(404).json({
        message: error.message
    })
})

const httpServer = http.createServer(app);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));