import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Layout = () => {
  return (
    <main className="App">
      <Navigation title="header" />
      <Outlet />
    </main>
  );
};

export default Layout;
