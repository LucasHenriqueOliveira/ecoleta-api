import express from 'express';
import cors from 'cors';
import routes from './routes';

const APP_PORT = 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(APP_PORT, () => {
    console.log(`[*] Server running on port: ${APP_PORT}`);
});