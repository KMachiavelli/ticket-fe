import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserPanel = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/user/log-in");
  }, []);
  return <div>UserPanel</div>;
};
