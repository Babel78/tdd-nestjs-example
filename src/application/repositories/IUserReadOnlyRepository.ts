import User from 'src/domain/User'

export default interface IUserReadOnlyRepository {
  fetch(user: User): Promise<User>
}
