import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./camera/Navbar";
import Footer from "./camera/Footer";
import HomePage from "./camera/HomePage";
import SignupForm from "./login/SignupForm";
import Loading from "./camera/Loading";
import React from "react";
import SignInForm from "./login/signInForm";

function App() {
  return (
      <BrowserRouter>
          <Loading/>
          <Navbar/>
          <Routes>
              <Route path={"/"} element={<HomePage/>}></Route>
              <Route path={"/signup"} element={<SignupForm/>}></Route>
              <Route path={"/signing"} element={<SignInForm/>}></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
