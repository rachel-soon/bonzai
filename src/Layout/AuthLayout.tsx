import { Outlet } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Auth() {
  return (
    <>
      <main className="is-relative">
        <section className="hero is-fullheight-with-navbar">
          <nav className="navbar">
            <div className="container">
              <div id="navMenu" className="navbar-menu">
                <div className="navbar-end">
                  <a
                    className="navbar-item"
                    href="https://github.com/rachel-soon/bonzai"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>GitHub
                  </a>
                </div>
              </div>
            </div>
          </nav>

          <div className="hero-body">
            <div className="container columns is-vcentered is-centered">
              <div className="column">
                <DotLottieReact
                  src="https://lottie.host/30627379-4a49-4a6e-8d66-585381f7cd1a/Aj6gw2mwYQ.lottie"
                  loop
                  autoplay
                />
                <p className="title" style={{ textAlign: "center" }}>
                  Bonzai &nbsp;
                </p>
              </div>

              <div className="column">
                <Outlet />
              </div>
            </div>
          </div>
        </section>

        <p
          className="is-size-7"
          style={{ position: "absolute", bottom: 0, right: 20, zIndex: 90 }}
        >
          Hosted with GitHub Pages
        </p>
      </main>
    </>
  );
}

export default Auth;
