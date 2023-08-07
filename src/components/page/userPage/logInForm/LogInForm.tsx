import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PagePaths, UserPaths } from "../../../../routing/types";
import { FormInputI } from "./types";
import { useAppDispatch } from "../../../../store/hooks";
import { fetchLogIn } from "../../../../reducers/auth";

export const LogInForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputI>();

  const onSubmit: SubmitHandler<FormInputI> = (data) => {
    dispatch(fetchLogIn(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="log-in-form">
      <h2>Sign in</h2>
      <hr className="log-in-form__hr" />
      <input
        type="text"
        placeholder="Username"
        {...register("username", { required: true })}
      />
      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      <button type="submit" className="log-in-form__btn">
        Sign in
      </button>
      <Link to={`${PagePaths.USER}/${UserPaths.SIGN_UP}`}>
        <button type="button">Sign up</button>
      </Link>
    </form>
  );
};
