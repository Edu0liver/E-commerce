import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor(){
        this.repository = getRepository(User);
    }

    async create({ email, address, password, name }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({ email, address, password, name });
        await this.repository.save(user);
    }
    async findById(id: string): Promise<User> {
        return await this.repository.findOne(id);
    }
    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne(email);
    }
    
}

export { UsersRepository }