import { useAuth } from "./hooks/useAuth";

function Dashboard() {
  const auth = useAuth();

  const handleClick = () => {
    auth!.logOut();
  };

  return (
    <>
      <button className="button is-link is-rounded" onClick={handleClick}>
        Log Out
      </button>
    </>
  );
}

export default Dashboard;
