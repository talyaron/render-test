"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
console.log("Hi from typescript");
const x = 5;
console.log(x);
app.use(express_1.default.static('public')); //middleware
//get = a method of http
//route '/' 
//req = request
//res = response
//event handler of get method
app.get('/main', (req, res) => {
    console.log("<h1 style='color: blue'>hello world</h1>");
    let x = '';
    for (let i = 0; i < 10; i++) {
        x += `${i} ,`;
    }
    res.send(`<h1 style='color: blue'>hello world</h1><h2>from express</h2><p>${x}</p>`);
});
app.get('/about', (req, res) => {
    res.send("<h1 style='color: green'>About us</h1>");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map