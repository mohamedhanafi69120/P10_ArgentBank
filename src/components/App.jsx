import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SignIn from "../Pages/SignIn/SignIn";
import User from "../Pages/User/User";
import Error from "../Pages/Error/Error";
import { Provider } from "react-redux";
import store from "../redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/User" element={<User />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
