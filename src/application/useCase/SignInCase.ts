import User from 'src/domain/User'
import IUserReadOnlyRepository from '../repositories/IUserReadOnlyRepository'
import ISignInUseCase from './ISignInUseCase'
import IUserDto from './IUserDto'

export default class SignInCase implements ISignInUseCase {
  private userReadOnlyRepository: IUserReadOnlyRepository
  constructor(userReadOnlyRepository: IUserReadOnlyRepository) {
    this.userReadOnlyRepository = userReadOnlyRepository
  }
  public async signin(userDto: IUserDto): Promise<IUserDto> {
    const user = new User(
      userDto.id,
      userDto.name,
      userDto.email,
      userDto.password,
    )
    console.log("user",user)
    const foundUser: IUserDto = await this.userReadOnlyRepository.fetch(user)
    return foundUser
  }
}
