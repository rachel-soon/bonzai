import "./SideMenu.scss";

function SideMenu() {
  return (
    <aside className="menu">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <a>
            <i className="fa-brands fa-flipboard"></i> &nbsp; Board
          </a>
        </li>
        <li>
          <a>
            <i className="fa-solid fa-clipboard-check"></i> &nbsp; To Do
          </a>
        </li>
        <li>
          <a>
            <i className="fa-solid fa-chart-line"></i> &nbsp; Reports
          </a>
        </li>
      </ul>
      {/* <p className="menu-label">Administration</p>
      <ul className="menu-list">
        <li>
          <a>Team Settings</a>
        </li>
        <li>
          <a className="is-active">Manage Your Team</a>
          <ul>
            <li>
              <a>Members</a>
            </li>
            <li>
              <a>Plugins</a>
            </li>
            <li>
              <a>Add a member</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Invitations</a>
        </li>
        <li>
          <a>Cloud Storage Environment Settings</a>
        </li>
        <li>
          <a>Authentication</a>
        </li>
      </ul> */}
      <p className="menu-label">Integrations</p>
      <ul className="menu-list">
        <li>
          <a>
            <i className="fa-brands fa-spotify"></i> &nbsp; Spotify
          </a>
        </li>
        <li>
          <a>
            <i className="fa-brands fa-google"></i> &nbsp; Google Calendar
          </a>
        </li>
      </ul>
      <p className="menu-label">Account</p>
      <ul className="menu-list">
        <li>
          <a>
            <i className="fa-solid fa-user"></i> &nbsp; Profile
          </a>
        </li>
        <li>
          <a>
            <i className="fa-solid fa-gear"></i> &nbsp; Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default SideMenu;
