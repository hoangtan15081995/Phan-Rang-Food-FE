import React, { useEffect, useState } from 'react';
import "./login.css";
import { signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber  } from "firebase/auth";
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
import PhoneModal from '../../components/phoneModal/PhoneModal';


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
  const { cartList } = useSelector((state) => state.cart);
  const accessToken = window.localStorage.getItem("user");

 const { control, handleSubmit, formState:{ errors, isSubmitting } } = useForm({
   resolver: yupResolver(LoginSchema),
   defaultValues,
 });
    useEffect(() => {
      if (accessToken) {
        navigate("/");
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
          window.localStorage.setItem("accessToken", user.accessToken);
          cartList.length > 0 ? navigate("/checkout") : navigate("/");
    
        })
        .catch((error) => {
          console.log(error.message)
          setError(true)
        });
  } 

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
}, auth);
  }

  const onSignInSubmit = (e) => {
    e.preventDefault();
    setupRecaptcha();
    const phoneNumber = "+911234567899";
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        const code = window.prompt("Enter OTP");
        confirmationResult
          .confirm(code)
          .then((result) => {
            // User signed in successfully.
            const user = result.user;
            // ...
            console.log(user, "SIGN IN SUCCESS")
          })
          .catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
          });
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  }

  return (
    <>
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            // border: "1px solid black",
            width: "100%",
            textAlign: "center",
          }}
        >
          <p style={{fontSize: 27, margin:6}}>Đăng nhập</p>
          <div
            style={{
              // border: "1px solid black",
              width: "100%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: "14px", margin: 0 }}>Bạn chưa có tài khoản?</p>
            <Link to="/register">
              <p style={{ fontSize: "14px", margin: 0 }}>Đăng ký</p>
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
            id="sign-in-button"
            // onClick={onSignInSubmit}
            style={{
              height: "40px",
              marginBottom: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
            color="success"
            variant="contained"
          >
            <PhoneIphoneIcon style={{ color: "white", fontSize: "18px" }} />
            <p style={{ fontSize: "14px" }}>Số điện thoại</p>
            <div style={{ width: "10px" }}></div>
          </Button>
          <Button
            style={{
              height: "40px",
              marginBottom: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
            color="primary"
            variant="contained"
          >
            <FacebookOutlinedIcon
              style={{ color: "white", fontSize: "18px" }}
            />
            <p style={{ fontSize: "14px" }}>Facebook</p>
            <div style={{ width: "10px" }}></div>
          </Button>
          <Button
            style={{
              height: "40px",
              marginBottom: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
            color="error"
            variant="contained"
          >
            <GoogleIcon style={{ color: "white", fontSize: "18px" }} />
            <p style={{ fontSize: "14px" }}>Google</p>
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
          <p style={{ fontSize: "14px" }}>
            Hoặc đăng nhập bằng tài khoản của bạn
          </p>
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
              marginBottom: 20
              // border: "1px solid black",
              // display: "flex",
              // flexDirection: "column"
            }}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  style={{ width: "300px" }}
                  {...field}
                  placeholder="Email"
                />
              )}
            />
            <p style={{ color: "red", fontSize: "14px" }}>
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
                  style={{ width: "300px" }}
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
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.password?.message}
            </p>
          </div>
          {error ? (
            <p style={{ color: "red", fontSize: "14px", margin: 14 }}>
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
              <Checkbox label="check box" size="small" checked={true} />
              <p style={{ fontSize: "15px" }}>Lưu tài khoản</p>
            </div>
            <Link to="/register">
              <p style={{ fontSize: "15px", marginRight: "15px" }}>
                Quên mật khẩu?
              </p>
            </Link>
          </div>
        </div>
        <div style={{ width: "30%" }}>
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
    </>
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