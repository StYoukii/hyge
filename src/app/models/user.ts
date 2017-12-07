export class User {
  public username: string;
  public firstName: string;
  public lastName: string;
  public gender: string;
  public emailAddress: string;
  public emailAddressConfirm: string;
  public password: string;
  public passwordConfirm: string;
  public profilePhoto: string;
  public birthDate: Date;
  public city: string;
  public phoneNumber: string;
  public friendsList: [string];

  constructor() { }
}
