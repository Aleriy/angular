export class UserService {

  private users = [
    { name: 'John' },
    { name: 'Bob' },
    { name: 'Alice' }
  ];

  constructor() { }

  public getAll() {
    return this.users;
  }

}
