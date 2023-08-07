export interface UserI {
  accessToken: string;
  username: string;
  password: string;
  email: string;
  joinDate: Date;
  tickets: Array<string>;
  wishList: Array<string>;
}

export interface AuthenticateRequestTO {
  username: string;
  password: string;
}

export interface AuthenticateResponseTO {
  accessToken: string;
  username: string;
}

export interface SignUpRequestTO {
  username: string;
  password: string;
  email: string;
}

export interface SignUpResponseTO {}
