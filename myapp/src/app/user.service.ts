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

  public remove(name : string) {
    return this.users = this.users.filter(user => user.name !== name);
  }
  public add(name: string) {
    this.users.push({ name });
  }

}
