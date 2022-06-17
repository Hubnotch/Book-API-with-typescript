"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = void 0;
let db = require('../data/db.json');
const findAll = () => {
    return new Promise((resolve, reject) => {
        resolve(db);
    });
};
exports.findAll = findAll;
