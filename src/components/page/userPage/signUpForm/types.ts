import { UserI } from "../../../../services/userService/types";

export interface FormInputI
  extends Pick<
    UserI,
    FormInputs.USERNAME | FormInputs.PASSWORD | FormInputs.EMAIL
  > {
  [FormInputs.REFERRER_SOURCE]: string;
}

export enum FormInputs {
  USERNAME = "username",
  PASSWORD = "password",
  EMAIL = "email",
  REFERRER_SOURCE = "referrerSource",
}

export enum ReffererOptions {
  FACEBOOK = "facebook",
  FRIENDS = "friends",
  ADS = "ads",
}
