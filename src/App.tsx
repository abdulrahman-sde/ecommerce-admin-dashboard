import { Link } from "react-router";

export default function App() {
  return (
    <>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/dashboard">Go to Dashboard</Link>
    </>
  );
}
