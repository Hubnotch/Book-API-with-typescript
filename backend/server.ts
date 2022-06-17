import http, { IncomingMessage, Server, ServerResponse } from 'http';
import {getAllData} from './controller/controller'


const PORT = process.env.port || 3000;

const server: Server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
    if (request.method === "GET") {
        getAllData(request,response)
    }else if(request.method === "POST"){}else if(request.method === "PUT"){}else if(request.method === "DELETE"){}
})


server.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}`)
})