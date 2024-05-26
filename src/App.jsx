import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Detail from "./pages/Detail";
import Login from "./pages/auth/Login";
import Myacount from "./pages/auth/Myacount";
import ProtectedLogin from "./pages/auth/ProtectedLogin";
import ChangePassword from "./pages/auth/ChangePassword";
import Hoatuoifl from "./pages/Page tittle product/Hoatuoifl";
import Hoabo from "./pages/Page tittle product/Hoabo";
import Hoasap from "./pages/Page tittle product/Hoasap";
import Giohoa from "./pages/Page tittle product/Giohoa";
import Langhoa from "./pages/Page tittle product/Langhoa";
import Support from "./pages/Support";
import Pay from "./pages/Pay";
import Contact from "./pages/Contact";
import Meaning from "./pages/home/Meaning";
import Blog from "./pages/home/Blog";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/support" element ={<Support  />}  />
          <Route path="/pay" element={<Pay  />} />
          <Route path="/contact" element = {<Contact  />}  />
          <Route path="/y nghia hoa" element={<Meaning  />}  />
          <Route path="/blog" element = {<Blog  />}  />
          <Route path="/hoatuoi" element={<Hoatuoifl />}  />
          <Route path="/hoabo" element = {<Hoabo />} />
          <Route path="/hoasap" element = {<Hoasap />} />
          <Route path="/giohoa" element = {<Giohoa />} />
          <Route path="/langhoa" element = {<Langhoa />} />
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
