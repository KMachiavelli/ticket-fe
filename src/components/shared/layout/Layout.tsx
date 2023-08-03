import { Navbar } from "../navbar/Navbar";

interface LayoutI {
  children: React.ReactElement;
}

export const Layout = ({ children }: LayoutI) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
