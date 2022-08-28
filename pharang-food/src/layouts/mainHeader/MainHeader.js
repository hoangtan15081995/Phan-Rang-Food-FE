import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, NavLink } from "react-router-dom";
import { Avatar, Button, styled, Tab, Tabs, Tooltip } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";
import logo from "../../images/logo.png";
import ninhthuan from "../../images/ninhthuan.png";
import avatar from "../../images/avatar.png";
import "./MainHeader.css";
import { motion } from "framer-motion";
import SelectMenu from "../../components/selectMenu";
import Badges from "../../components/badge"
import SearchIcon from "@mui/icons-material/Search";
import TDrawer from "../../components/drawer";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setLocation} from "../../features/location/locationSlice"
import FSearch from "../../components/Search";


export default function MainHeader() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [active, setActive] = useState("Cơm");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [value, setValue] = useState("one");

  const accessToken = window.localStorage.getItem("user");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  {
      let position = document.getElementById("position");

      window.addEventListener("scroll", function (event) {
        let scroll_y = this.scrollY;
        // console.log(scroll_y);
        if (scroll_y < 230) {
          setValue("one");
        }
        if (scroll_y > 230) {
          setValue("two");
        }
        if (scroll_y > 530) {
          setValue("three");
        }
        if (scroll_y > 830) {
          setValue("four");
        }
        if (scroll_y > 1130) {
          setValue("five");
        }if (scroll_y > 1430) {
          setValue("six");
        }
        if (scroll_y > 1730) {
          setValue("seven");
        }
      });
  } 
  
  const { locationPathname } = useSelector((state) => state.location);
  console.log(locationPathname, "redux");
  console.log(value)

  // console.log(active, "active");
  useEffect(() => {
     switch (value) {
       case "one":
         dispatch(setLocation("rice"));
         break;
       case "two":
         dispatch(setLocation("noodleSoup"));
         break;
       case "three":
         dispatch(setLocation("porridge"));
         break;
       case "four":
         dispatch(setLocation("hotpot"));
         break;
       case "five":
         dispatch(setLocation("juice"));
         break;
       case "six":
         dispatch(setLocation("milktea"));
         break;
       case "seven":
         dispatch(setLocation("coffee"));
         break;
       default:
         break;
     }
  }, [value]);
  
  useEffect(() => {
    //  window.scrollTo({
    //    top: 681,
    //    behavior: "smooth",
    //  });
    
  }, []);
  
  const options = [
    { id: "one", option: "Cơm", active: false },
    { id: "two", option: "Phở", active: false },
    { id: "three", option: "Cháo", active: false },
    { id: "four", option: "Lẩu", active: false },
    { id: "five", option: "Nước ép", active: false },
    { id: "six", option: "Trà sữa", active: false },
    { id: "seven", option: "Cà phê", active: false },
  ];

  const handleClickOption = (option) => {
    switch (option.option) {
      case "Cơm":
        // navigate("/rice");
        // setValueTab("rice")
        setValue("one");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      case "Phở":
        // navigate("/noodleSoup");
        // setValueTab("noodleSoup");
        setValue("two");
        window.scrollTo({
          top: 340.5,
          behavior: "smooth",
        });
        break;
      case "Cháo":
        // navigate("/porridge");
        // setValueTab("porridge");
        setValue("three");
        window.scrollTo({
          top: 681,
          behavior: "smooth",
        });
        break;
      case "Lẩu":
        // navigate("/hotpot");
        // setValueTab("hotpot");
        setValue("four");
        window.scrollTo({
          top: 1021.5,
          behavior: "smooth",
        });
        break;
      case "Nước ép":
        // navigate("/juice");
        // setValueTab("juice");
        setValue("five");
        window.scrollTo({
          top: 1362,
          behavior: "smooth",
        });
        break;
      case "Trà sữa":
        // navigate("/milktea");
        // setValueTab("milktea");
        setValue("six");
        window.scrollTo({
          top: 1702.5,
          behavior: "smooth",
        });
        break;
      case "Cà phê":
        // navigate("/coffee");
        // setValueTab("coffee");
        setValue("seven");
        window.scrollTo({
          top: 2043,
          behavior: "smooth",
        });
        break;
      default:
        break;
    }
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    const from = location.pathname || "/";
    switch (setting) {
      case "Profile":
        navigate("/profile");
        break;
      case "Order":
        navigate("/order");
        break;
      case "Login":
        navigate("/login");
        break;
      case "Logout":
        navigate(from, { replace: true });
        window.localStorage.removeItem("user")
        break;
      default:
        break;
    }
    setAnchorElUser(null);
  };

  const settings = ["Profile", "Order", "Logout"];
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -4,
      top: -5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <div className="container-header">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // border: "1px solid black",
              height: 50,
              width: 100,
            }}
          >
            <IconButton
              onClick={() => {
                navigate("/");
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              style={{ width: "auto", height: "auto" }}
            >
              <motion.img
                whileTap={{ scale: 1 }}
                src={ninhthuan}
                alt="logo"
                width="35px"
                height="35px"
              />
            </IconButton>
            <h6>85 Food</h6>
          </div>
          <div
            style={{
              width: 135,
              display: "flex",
              justifyContent: "center",
              // border: "1px solid black",
            }}
          >
            <SelectMenu />
          </div>
          <div>
            <Box
              sx={{
                width: 400,
                // bgcolor: "background.paper",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                // textColor="secondary"
                // indicatorColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="secondary tabs example"
                sx={{
                  [`& .${tabsClasses.scrollButtons}`]: {
                    "&.Mui-disabled": { opacity: 0.3 },
                  },
                }}
              >

                {options.map((option) => {
                  return (     
                      <Tab
                        // style={{ width: 5, height: 5, fontSize: 11 }}
                        onClick={() => handleClickOption(option)}
                        key={option.id}
                        value={option.id}
                        label={option.option}
                      />
                  );
                })}
              </Tabs>
            </Box>
          </div>
        </div>
        <div>
          <FSearch />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // border: "1px solid black",
            // marginRight: pdr ? "10px" : "0px",
            // marginLeft: 250,
          }}
        >
          <div>
            <TDrawer />
          </div>
          <div>
            <Tooltip title="Open settings">
              <IconButton
                style={{ width: "auto", height: "auto", marginLeft: "10px" }}
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <motion.img
                  whileTap={{ scale: 0.8 }}
                  alt="userProfile"
                  src={avatar}
                  width="35px"
                  height="35px"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "40px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {accessToken ? (
                settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))
              ) : (
                <MenuItem
                  key="Login"
                  onClick={() => handleCloseUserMenu("Login")}
                >
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

            // {
            //   options.map((option) => {
            //     return (
            //       <div
            //         style={{
            //           display: "flex",
            //           alignItems: "center",
            //           borderBottom:
            //             option.option === active ? "2px solid orange" : "",
            //           height: 70,
            //         }}
            //       >
            //         {/* {console.log(option.option, "option")} */}
            //         <IconButton
            //           onClick={() => handleClickOption(option)}
            //           key={option.id}
            //           style={{ width: "auto", height: "auto" }}
            //         >
            //           <Typography
            //             color={option.option === active ? "orange" : "black"}
            //           >
            //             {option.option}
            //           </Typography>
            //         </IconButton>
            //       </div>
            //     );
            //   });
            // }

