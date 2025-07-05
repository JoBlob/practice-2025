import "./App.css";
import { Header } from "./components/header/header";
import StarWars from "./page/starwars/starwars";

function App() {
  return (
    <>
      <Header />
      <div style={{ padding: "0 2rem" }}>
        <StarWars />
      </div>
    </>
  );
}

export default App;
