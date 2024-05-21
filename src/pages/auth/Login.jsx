import React, { useEffect, useState } from "react";
import "../../assets/css/account.css";
import axios from "axios";
import { URL_LOGIN } from "../../useAPi/url";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // console.log(userName);
  // console.log(password);
  const handleSubmit = async (e) => {
    // xóa bỏ mặc định
    e.preventDefault();
    let infoUser = {
      email: email,
      password: password,
    };
    try {
      console.log(infoUser);
      const response = await axios.post(URL_LOGIN, infoUser);
      // console.log(response.data.user);
      // luu tru token vao local storage
      let userDataBase = response && response.data.user;
      if (userDataBase) {
        localStorage.setItem("isAuth", JSON.stringify(userDataBase.token));
      }
      // chuyen huong nguoi dung sang login
      navigate("/myacount");
    } catch (error) {
      alert(" Đăng nhập thất bại!");
    }
  };
  // check xem user dang nhap hay chua
  useEffect(()=>{
    // lay duoc isauth tren locastorage
    let isAuth = JSON.parse(localStorage.getItem('isAuth'))
    if(isAuth){
      return navigate('/myacount')
    }
    console.log(isAuth);
  },[])
  return (
    <>
      <>
        {/* form đăng nhập */}
        <div className="container1">
          <form className="form-login" onSubmit={handleSubmit}>
            <div id="error-message" />
            <h1>Đăng nhập</h1>
            <div className="form-text">
              <label>Tên đăng nhập hoặc địa chỉ email:</label>
              <input
                id="username"
                type="email"
                autoComplete="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-text">
              <label>Mật Khẩu:</label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button type="submit">Đăng nhập</button>
            <br />
            <div>
              Bạn chưa có tài khoản? Đăng ký <a href="./singup.html">Tại đây</a>
            </div>
            <div className="passcode">
              <a href="#">Quên mật khẩu?</a>
            </div>
          </form>
        </div>
      </>
    </>
  );
};

export default Login;
