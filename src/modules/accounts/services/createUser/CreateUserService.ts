import { IUsersRepository } from "../../repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

@injectable()
class CreateUserService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({ email, address, password, name, cep }: ICreateUserDTO): Promise<void> {
        const userExists = await this.usersRepository.findByEmail(email);
        const passwordHash = await hash(password, 8);

        if(userExists){
            throw new Error("Password required !");
        }

        await this.usersRepository.create({
            name,
            email,
            address,
            password: passwordHash,
            cep
        });
    }
}

export { CreateUserService }