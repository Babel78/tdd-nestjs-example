import IUserDto from './IUserDto'

export default interface ISignInUseCase {
  signin(user: IUserDto): Promise<IUserDto>
}
