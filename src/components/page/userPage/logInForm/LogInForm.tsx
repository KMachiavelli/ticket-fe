import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PagePaths, UserPaths } from "../../../../routing/types";

export const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputI>();

  const onSubmit: SubmitHandler<FormInputI> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="log-in-form">
      <h2>Sign in</h2>
      <hr className="log-in-form__hr" />
      <input type="text" placeholder="Username" {...register("username")} />
      <input type="password" placeholder="Password" {...register("password")} />
      <button type="submit" className="log-in-form__btn">
        Sign in
      </button>
      <Link to={`${PagePaths.USER}/${UserPaths.SIGN_UP}`}>
        <button type="button">Sign up</button>
      </Link>
    </form>
  );
};
