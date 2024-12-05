import { Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
import SideMenu from "../SideMenu";
import "./MainLayout.scss";

function MainLayout() {
  const auth = useAuth();
  return (
    <>
      <main className="main-layout">
        <nav className="navbar">
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item is-size-3 has-text-weight-bold">
                <i className="fa-solid fa-tree"></i>
                Bonzai
              </div>
            </div>
            <div className="navbar-end">
              <a className="navbar-item" onClick={auth!.logOut}>
                Logout
              </a>
            </div>
          </div>
        </nav>

        <div className="columns">
          <div className="column is-2">
            <SideMenu />
          </div>
          <div className="column is-10 pr-6 pl-4">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

export default MainLayout;
