import { Router } from 'express';
import {rouletteController}  from '../controllers/rouletteController'

class RouletteRoutes {
    public router: Router = Router ();
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/', rouletteController.index );
        this.router.post('/', rouletteController.create);
        this.router.put('/:id', rouletteController.update);
        this.router.delete('/:id', rouletteController.delete);
    }
}

const rouletteRoutes = new RouletteRoutes();
export default rouletteRoutes.router;