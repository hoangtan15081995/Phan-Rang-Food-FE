import React, { useEffect, useState } from 'react';
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { flexbox } from '@mui/system';
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";

const LoginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const defaultValues = {
  email: "",
  password: "",
};

function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { locationPathname } = useSelector((state) => state.location);
  const accessToken = window.localStorage.getItem("user");

 const { control, handleSubmit, formState:{ errors, isSubmitting } } = useForm({
   resolver: yupResolver(LoginSchema),
   defaultValues,
 });
    useEffect(() => {
      if (accessToken) {
        navigate(locationPathname);
      }
    }, [accessToken, navigate]);
  const onSubmit = data => {
      const { email, password } = data;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user.accessToken);
          setError(false);
          window.localStorage.setItem("user", user.accessToken);
          navigate(locationPathname);
        })
        .catch((error) => {
          console.log(error.message)
          setError(true)
        });
  } 

  return (
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          // border: "1px solid black",
          width: "100%",
          textAlign: "center",
        }}
      >
        Đăng nhập
        <div
          style={{
            // border: "1px solid black",
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "7px" }}>Bạn chưa có tài khoản?</p>
          <Link to="/register">
            <p style={{ fontSize: "7px" }}>Đăng ký</p>
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // border: "1px solid black",
          width: "100%",
        }}
      >
        <Button
          style={{
            height: "25px",
            marginBottom: "5px",
            display: "flex",
            justifyContent: "space-between",
          }}
          color="success"
          variant="contained"
        >
          <PhoneIphoneIcon style={{ color: "white", fontSize: "18px" }} />
          <p style={{ fontSize: "11px" }}>Số điện thoại</p>
          <div style={{ width: "10px" }}></div>
        </Button>
        <Button
          style={{
            height: "25px",
            marginBottom: "5px",
            display: "flex",
            justifyContent: "space-between",
          }}
          color="primary"
          variant="contained"
        >
          <FacebookOutlinedIcon style={{ color: "white", fontSize: "18px" }} />
          <p style={{ fontSize: "11px" }}>Facebook</p>
          <div style={{ width: "10px" }}></div>
        </Button>
        <Button
          style={{
            height: "25px",
            marginBottom: "5px",
            display: "flex",
            justifyContent: "space-between",
          }}
          color="error"
          variant="contained"
        >
          <GoogleIcon style={{ color: "white", fontSize: "18px" }} />
          <p style={{ fontSize: "11px" }}>Google</p>
          <div style={{ width: "10px" }}></div>
        </Button>
      </div>
      <div
        style={{
          // border: "1px solid black",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "8px" }}>Hoặc đăng nhập bằng tài khoản của bạn</p>
      </div>
      <div
        style={{
          // border: "1px solid black",
          width: "100%",
          height: "115px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "50px",
            // border: "1px solid black",
            // display: "flex",
            // flexDirection: "column"
          }}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input style={{width: "230px"}} {...field} placeholder="Email" />}
          />
          <p style={{ color: "red", fontSize: "7px" }}>
            {errors.email?.message}
          </p>
        </div>
        <div
          style={{
            height: "50px",
            // border: "1px solid black",
            // display: "flex",
            // flexDirection: "column"
          }}
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                style={{width: "230px"}}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon
                          style={{ color: "black", fontSize: "18px" }}
                        />
                      ) : (
                        <VisibilityIcon
                          style={{ color: "black", fontSize: "18px" }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            )}
          />
          <p style={{ color: "red", fontSize: "7px" }}>
            {errors.password?.message}
          </p>
        </div>
        {error ? (
          <p style={{ color: "red", fontSize: "9px", margin: 0 }}>
            Wrong email or password
          </p>
        ) : (
          ""
        )}
      </div>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // border: "1px solid black",
            }}
          >
            <Checkbox label="check box" size="small" />
            <p style={{ fontSize: "10px" }}>Lưu tài khoản</p>
          </div>
          <Link to="/register">
            <p style={{ fontSize: "10px", marginRight: "15px" }}>
              Quên mật khẩu?
            </p>
          </Link>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        {" "}
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Đăng nhập
        </LoadingButton>
      </div>
    </form>
  );
}

export default LoginPage



    
  // const [error, setError] = useState(false)
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  // const { locationPathname } = useSelector((state) => state.location);
  // // console.log(locationPathname, "redux");

  // const handleLogin = (e) => {
  //   e.preventDefault()
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // console.log(user.accessToken);
  //       setError(false);
  //       window.localStorage.setItem("user", user.accessToken);
  //       navigate(locationPathname);
  //     })
  //     .catch((error) => {
  //       setError(true);
  //     });
  // }