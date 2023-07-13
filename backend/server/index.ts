import './common/env';
import Server from './common/server';
import routes from './routes';

import db from './db'

const port = parseInt(process.env.PORT ?? '3000');

const start = async () => {
    try {
        await db.sync({ alter: true });
        console.log('DB aggiornato!');
    } catch (err: any) {
        console.error("Errore", err); 
    }
}

start();


export default new Server().router(routes).listen(port);
