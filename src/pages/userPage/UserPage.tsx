import { useNavigate } from "react-router-dom";
import { UserPanel } from "../../components/page/userPage/userPanel/UserPanel";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const UserPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector(({ auth }) => auth);

  useEffect(() => {
    if (!isLoggedIn) navigate("/user/log-in");
  }, []);

  return (
    <div>
      <UserPanel />
    </div>
  );
};
