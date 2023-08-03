import { Route, Routes } from "react-router-dom";
import { PagePaths, UserPaths } from "./types";
import { HomePage } from "../pages/homePage/HomePage";
import { TicketPage } from "../pages/ticketPage/TicketPage";
import { UserLogInPage } from "../pages/userPage/UserLogInPage";
import { UserPage } from "../pages/userPage/UserPage";
import { UserSignUpPage } from "../pages/userPage/UserSignUpPage";

interface RoutingI {
  children?: React.ReactElement;
}

export const Routing = ({ children }: RoutingI) => {
  return (
    <Routes>
      <Route element={<HomePage />} path={PagePaths.HOME} />
      <Route element={<TicketPage />} path={`${PagePaths.TICKET}/:type`} />
      <Route path={PagePaths.USER}>
        <Route element={<UserPage />} index />
        <Route element={<UserSignUpPage />} path={UserPaths.SIGN_UP} />
        <Route element={<UserLogInPage />} path={UserPaths.LOG_IN} />
      </Route>
      <Route element={<div>404</div>} path="*" />
    </Routes>
  );
};
