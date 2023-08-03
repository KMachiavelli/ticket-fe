import { Link } from "react-router-dom";
import { PagePaths, UserPaths } from "../../../../routing/types";

export const SignUpForm = () => {
  return (
    <form className="sign-up-form">
      <h2>Sign in</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <select className="sign-up-form__select">
        <option>From other service</option>
        <option>From friends</option>
        <option>From ads</option>
      </select>
      <button type="submit">Create new account</button>
      <Link to={`${PagePaths.USER}/${UserPaths.SIGN_UP}`}>
        <button type="button" className="log-in-form__btn">
          Back to Log in
        </button>
      </Link>
    </form>
  );
};
