"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = void 0;
const db_json_1 = __importDefault(require("../data/db.json"));
const findAll = () => {
    return new Promise((resolve, reject) => {
        resolve(db_json_1.default);
    });
};
exports.findAll = findAll;
