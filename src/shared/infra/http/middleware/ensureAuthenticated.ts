import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    user_id: string;
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new Error("Token is Missing !")
    }

    const [, token] = authHeader.split(" ");
    const secretPassword = "123"
    try{
        const { user_id } = verify(token, secretPassword) as IPayload;

        request.user = {
            id: user_id
        }

        next();
    }catch{
        throw new Error("Token invalid !");
    }
}