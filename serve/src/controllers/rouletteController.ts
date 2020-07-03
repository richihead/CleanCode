import {Request, Response } from 'express';
import pool from '../database';

class RouletteController {
    public index (req: Request, res: Response) {
        pool.query('DESCRIBE mitabla');
        res.json({text: "Roulette"});
    }
    public async create (req: Request, res:Response): Promise <void>{
        await pool.query ('INSERT into mitabla set ?', [req.body])
        res.json({text: 'creating a new Game'})
    }
    public delete (req: Request, res:Response){
        res.json({text: 'Game deleted ' +  req.params.id} )
    }
    public update (req: Request, res:Response){
    res.json({text: 'Game update ' + req.params.id} )
    }
}


export const rouletteController = new RouletteController();