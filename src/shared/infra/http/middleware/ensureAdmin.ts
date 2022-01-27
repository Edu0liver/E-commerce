import { Request, Response, NextFunction } from "express";
import { UsersRepository } from "../../../../modules/accounts/infra/repositories/UsersRepository";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    const { id } = request.user;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(id);

    if(!user.admin){
        throw new Error("The user is not a admin !");
    }

    next()
}