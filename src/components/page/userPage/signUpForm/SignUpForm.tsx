import { Link } from "react-router-dom";
import { PagePaths, UserPaths } from "../../../../routing/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { REFERRER_OPTIONS } from "./const";
import { FormInputI, FormInputs } from "./types";
import { authService } from "../../../../services/userService/auth.service";
import { useState } from "react";

export const SignUpForm = () => {
  const { register, handleSubmit } = useForm<FormInputI>();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleRegister: SubmitHandler<FormInputI> = (data) => {
    authService.register(data).then(() => {
      setIsCompleted(true);
    });
  };

  return !isCompleted ? (
    <form onSubmit={handleSubmit(handleRegister)} className="sign-up-form">
      <h2>Sign in</h2>
      <input
        {...register(FormInputs.USERNAME)}
        type="text"
        placeholder="Username"
      />
      <input {...register(FormInputs.EMAIL)} type="email" placeholder="Email" />
      <input
        {...register(FormInputs.PASSWORD)}
        type="password"
        placeholder="Password"
      />
      <select
        {...register(FormInputs.REFERRER_SOURCE)}
        className="sign-up-form__select"
      >
        {REFERRER_OPTIONS.map(([_, option]) => (
          <option label={option}>{option}</option>
        ))}
      </select>
      <button type="submit">Create new account</button>
      <Link to={`${PagePaths.USER}/${UserPaths.LOG_IN}`}>
        <button type="button" className="log-in-form__btn">
          Back to Log in
        </button>
      </Link>
    </form>
  ) : (
    <div className="success-view">
      <h1>Account created!</h1>
      <h2>You can now log in</h2>
      <Link to={`${PagePaths.USER}/${UserPaths.LOG_IN}`}>
        <button>Back to sign in</button>
      </Link>
    </div>
  );
};
