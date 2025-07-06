import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Header } from "./components/header/header";
import StarWars from "./page/starwars/starwars";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <body style={{ padding: "0 2rem" }}>
        <Routes>
          <Route path="/" element={<StarWars />} />
        </Routes>
      </body>
    </BrowserRouter>
  );
}

export default App;
