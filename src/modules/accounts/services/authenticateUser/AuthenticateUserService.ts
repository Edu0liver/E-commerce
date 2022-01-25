import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string;
}

@injectable()
class AuthenticateUserService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({ email, password }: IRequest): Promise<IResponse>{
        const user = await this.usersRepository.findByEmail(email);
        const passwordMatch = await compare(password, user.password);

        if(!user){
            throw new Error("Email or password is invalid !");
        }

        if(!passwordMatch){
            throw new Error("Email or password is invalid !");
        }

        const secretPassword = "123";

        const token = sign({}, secretPassword, {
            subject: user.id,
            expiresIn: "1d"
        })

        const authResponse: IResponse = {
            user: {
                name: user.name,
                email: user.email
            },
            token
        }

        return authResponse;
    }
}

export { AuthenticateUserService }