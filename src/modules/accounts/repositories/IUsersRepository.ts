import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/entities/User";


interface IUsersRepository {
    create({ email, password, name }: ICreateUserDTO): Promise<void>;
    findById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
}

export { IUsersRepository }