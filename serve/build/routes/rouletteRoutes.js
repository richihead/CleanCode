"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rouletteController_1 = require("../controllers/rouletteController");
class RouletteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', rouletteController_1.rouletteController.index);
        this.router.post('/', rouletteController_1.rouletteController.create);
        this.router.put('/:id', rouletteController_1.rouletteController.update);
        this.router.delete('/:id', rouletteController_1.rouletteController.delete);
    }
}
const rouletteRoutes = new RouletteRoutes();
exports.default = rouletteRoutes.router;
