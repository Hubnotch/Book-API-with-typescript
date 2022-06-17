"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllData = void 0;
const model_1 = require("../model/model");
const getAllData = async (request, response) => {
    try {
        let allData = await (0, model_1.findAll)();
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(allData));
    }
    catch (error) {
        response.writeHead(400, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(error));
    }
};
exports.getAllData = getAllData;
