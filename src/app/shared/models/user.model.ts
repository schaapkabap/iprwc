export class User {
  public id: number;
  public username: string;
  public email: string;

  static generateToken(username: string, password: string) {
    return btoa(username + ':' + password);
  }
}
