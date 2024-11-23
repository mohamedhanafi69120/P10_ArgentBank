import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SignIn from "../Pages/SignIn/SignIn";
import User from "../Pages/User/User";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/User" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
