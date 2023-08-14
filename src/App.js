import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./camera/Navbar";
import Footer from "./camera/Footer";
import HomePage from "./camera/HomePage";
import SignupForm from "./login/SignupForm";
import Loading from "./camera/Loading";
import React from "react";
import SignInForm from "./login/SignInForm";
import ForgotPassword from "./login/ForgotPassword";
import User from "./login/User";
import Admin from "./login/Admin";
import Logout from "./login/Logout";
import ChangePassword from "./login/ChangePassword";

function App() {
  return (
      <BrowserRouter>
          <Loading/>
          <Navbar/>
          <Routes>
              <Route path={"/"} element={<HomePage/>}></Route>
              <Route path={"/signup"} element={<SignupForm/>}></Route>
              <Route path={"/signing"} element={<SignInForm/>}></Route>
              <Route path={"/forgotPassword"} element={<ForgotPassword/>}></Route>
              <Route path={"/user"} element={<User/>}></Route>
              <Route path={"/admin"} element={<Admin/>}></Route>
              <Route path={"/logout"} element={<Logout/>}></Route>
              <Route path={"/change-password"} element={<ChangePassword/>}></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
