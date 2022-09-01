"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const APP = (0, express_1.default)();
APP.use((0, cors_1.default)());
APP.get('/', (req, res) => {
    res.send('sup');
});
APP.listen(5500, () => {
    console.log('Server is rnning.');
});
