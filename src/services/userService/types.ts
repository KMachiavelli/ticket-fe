export interface UserI {
  accessToken: string;
  username: string;
  password: string;
  email: string;
  joinDate: Date;
  tickets: Array<string>;
  wishList: Array<string>;
}
