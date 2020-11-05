import { Request, Response } from 'express';

const users = [
    {
        name: 'Rafael',
        email: 'rafaelcamelo23@gmail.com'
    }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    }
};