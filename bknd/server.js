"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const controller_1 = require("./controller/controller");
const PORT = process.env.port || 3000;
const server = http_1.default.createServer((request, response) => {
    if (request.method === "GET") {
        (0, controller_1.getAllData)(request, response);
    }
    else if (request.method === "POST") { }
    else if (request.method === "PUT") { }
    else if (request.method === "DELETE") { }
});
server.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}`);
});
