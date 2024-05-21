import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Detail from "./pages/Detail";
import Login from "./pages/auth/Login";
import Myacount from "./pages/auth/Myacount";
import ProtectedLogin from "./pages/auth/ProtectedLogin";
import ChangePassword from "./pages/auth/ChangePassword";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/account" element={<Login />} />
          <Route
            path="/myacount"
            element={<ProtectedLogin element={<Myacount />} />}
          />
          <Route path="/myacount/changepassword" element = {<ChangePassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
