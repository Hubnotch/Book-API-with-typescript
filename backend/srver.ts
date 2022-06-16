import http, { IncomingMessage, Server, ServerResponse } from 'http';
import fs from 'fs';


const PORT = process.env.port || 3000;

const server: Server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
    
})


server.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}`)
})