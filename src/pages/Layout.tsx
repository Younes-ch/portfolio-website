import { Outlet } from "react-router-dom";
import "../assets/sass/style.scss";
import Cursor from "../components/cursor/Cursor";
import BackgroundEffect from "../components/backgroundEffect/BackgroundEffect";
const Layout = () => {
  return (
    <>
      <Outlet />
      <BackgroundEffect />
      <Cursor />
    </>
  );
};

export default Layout;
