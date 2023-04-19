import "./styles.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./nav";
import Home from "./components/home";
import Create from "./components/create";
import Data from "./components/data";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import userContext from "./components/context";

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <userContext.Provider
          value={{
            users: [
              {
                name: "Jeremy Duval",
                email: "jeremy@gmail.com",
                password: "1234",
                phone: "555-555-5555",
                balance: 10000
              }
            ]
          }}
        >
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/create/" element={<Create />} />
            <Route path="/data/" element={<Data />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
          </Routes>
        </userContext.Provider>
      </HashRouter>
    </div>
  );
}