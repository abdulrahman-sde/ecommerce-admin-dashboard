import { Link } from "react-router";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <>
      <Link to="/login">
        <Button>Go to Login</Button>
      </Link>
      <br />
      <Link to="/dashboard">
        <Button>Go to Dashboard</Button>
      </Link>
    </>
  );
}
