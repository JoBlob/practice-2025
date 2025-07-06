import { Outlet } from "react-router";
import "./App.css";
import { Header } from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <div style={{ padding: "0 2rem" }}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
