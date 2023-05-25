import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element=<Home/> exact />
        <Route path="/signin" element=<SigninPage/> exact />
      </Routes>
    </Router>
  );
}

export default App;