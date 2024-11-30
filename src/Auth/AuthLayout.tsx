import { Outlet } from "react-router";

function Auth() {
  return (
    <>
      <main>
        <nav className="navbar">
          <div className="container">
            <div id="navMenu" className="navbar-menu">
              <div className="navbar-end">
                <a
                  className="navbar-item"
                  href="https://github.com/rachel-soon/spark-time"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>GitHub
                </a>
              </div>
            </div>
          </div>
        </nav>

        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container columns is-vcentered is-centered">
              <div className="column">
                <p className="title">Spark Time 🐦‍🔥</p>
                <p className="subtitle">Focus on what matters.</p>
              </div>

              <div className="column">
                <Outlet />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Auth;
