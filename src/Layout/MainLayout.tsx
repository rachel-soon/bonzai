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
          <div className="container">
            <div id="navMenu" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item" onClick={auth!.logOut}>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="columns">
          <div className="column is-2">
            <SideMenu />
          </div>
          <div className="column">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

export default MainLayout;
